import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import transporter from '../shared/transporter';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const token = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.secret,
    });
    return {
      access_token: token,
    };
  }

  async forgetPassword(user: any, body: any) {
    const code: any = this.jwtService.decode(body.uniqueId);
    const user1 = await this.prisma.user.update({
      where: { id: code.user.id },
      data: { password: body.password },
    });
    const token = await this.jwtService.signAsync(
      { email: user1.email, password: user1.password },
      {
        secret: jwtConstants.secret,
      },
    );
    return { token, user: user1 };
  }

  async createUser(user: any) {
    const createUser = await this.prisma.user
      .create({
        data: {
          email: user.email,
          password: user.password,
          fullName: user.fullName,
        },
      })
      .catch(() => {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, error: 'Email must be unique!' },
          HttpStatus.NOT_FOUND,
        );
      });
    return { user: createUser };
  }

  async getAll() {
    return await this.prisma.user.findMany();
  }

  async getByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: { email } }).catch(() => {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'UNAUTHORIZED' },
        HttpStatus.UNAUTHORIZED,
      );
    });
  }

  async getOne(query: any) {
    const user = await this.prisma.user
      .findFirst({ where: query })
      .catch(() => {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, error: 'Something went wrong!' },
          HttpStatus.NOT_FOUND,
        );
      });

    return { user };
  }

  async update(email: string) {
    return await this.prisma.user.findFirst({ where: { email } }).catch(() => {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'UNAUTHORIZED' },
        HttpStatus.UNAUTHORIZED,
      );
    });
  }

  async sendCode(body: { email: string }) {
    const user = await this.prisma.user.findFirst({
      where: { email: body.email },
    });
    if (!user) {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }
    const min = Math.ceil(1000);
    const max = Math.floor(9999);
    const numbers = Math.floor(Math.random() * (max - min + 1)) + min;
    const mailOptions = {
      from: 'safeed12341@gmail.com',
      to: body.email,
      subject: 'Forget password',
      html: `<h2>${numbers}</h2>`,
    };
    await transporter.sendMail(mailOptions).catch((e) => {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'Email error' },
        HttpStatus.NOT_FOUND,
      );
    });
    const date = Date.now() + 60000;
    await this.prisma.forgetPassword.create({
      data: {
        expireIn: new Date(date),
        code: numbers,
        userId: user.id,
      },
    });
    return { statusCode: 200, message: 'Sent' };
  }

  async checkCode(body: { email: string; code: number }) {
    const user = await this.prisma.user.findFirst({
      where: { email: body.email },
    });
    const code = await this.prisma.forgetPassword.findFirst({
      where: {
        code: body.code,
        userId: user.id,
        isChecked: false,
        expireIn: {
          gte: new Date(Date.now() - 60000).toISOString(),
        },
      },
      include: { user: true },
    });
    if (!code) {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'Code not found' },
        HttpStatus.NOT_FOUND,
      );
    }
    const token = this.jwtService.sign({ user, code });
    return { statusCode: 200, uniqueId: token };
  }
}
