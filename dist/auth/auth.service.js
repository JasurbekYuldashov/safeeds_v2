"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants");
const transporter_1 = require("../shared/transporter");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.prisma.user.findFirst({ where: { email } });
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        const token = await this.jwtService.signAsync(payload, {
            secret: constants_1.jwtConstants.secret,
        });
        return {
            access_token: token,
        };
    }
    async forgetPassword(user, body) {
        const code = this.jwtService.decode(body.uniqueId);
        const user1 = await this.prisma.user.update({
            where: { id: code.user.id },
            data: { password: body.password },
        });
        const token = await this.jwtService.signAsync({ email: user1.email, password: user1.password }, {
            secret: constants_1.jwtConstants.secret,
        });
        return { token, user: user1 };
    }
    async createUser(user) {
        const createUser = await this.prisma.user
            .create({
            data: {
                email: user.email,
                password: user.password,
                fullName: user.fullName,
            },
        })
            .catch(() => {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.NOT_FOUND, error: 'Email must be unique!' }, common_1.HttpStatus.NOT_FOUND);
        });
        return { user: createUser };
    }
    async getAll() {
        return await this.prisma.user.findMany();
    }
    async getByEmail(email) {
        return await this.prisma.user.findFirst({ where: { email } }).catch(() => {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.UNAUTHORIZED, error: 'UNAUTHORIZED' }, common_1.HttpStatus.UNAUTHORIZED);
        });
    }
    async getOne(query) {
        const user = await this.prisma.user
            .findFirst({ where: query })
            .catch(() => {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.NOT_FOUND, error: 'Something went wrong!' }, common_1.HttpStatus.NOT_FOUND);
        });
        return { user };
    }
    async update(email) {
        return await this.prisma.user.findFirst({ where: { email } }).catch(() => {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.UNAUTHORIZED, error: 'UNAUTHORIZED' }, common_1.HttpStatus.UNAUTHORIZED);
        });
    }
    async sendCode(body) {
        const user = await this.prisma.user.findFirst({
            where: { email: body.email },
        });
        if (!user) {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.UNAUTHORIZED, error: 'User not found' }, common_1.HttpStatus.NOT_FOUND);
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
        const a = await (0, transporter_1.default)();
        a.sendMail(mailOptions).catch((e) => {
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.UNAUTHORIZED, error: 'Email error' }, common_1.HttpStatus.NOT_FOUND);
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
    async checkCode(body) {
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
            throw new common_1.HttpException({ statusCode: common_1.HttpStatus.UNAUTHORIZED, error: 'Code not found' }, common_1.HttpStatus.NOT_FOUND);
        }
        const token = this.jwtService.sign({ user, code });
        return { statusCode: 200, uniqueId: token };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map