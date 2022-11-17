import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SatisfiedService {
  constructor(private prisma: PrismaService) {}

  async getAll(query?: any): Promise<any> {
    return this.prisma.satisfied.findMany({});
  }

  async save(data?: any): Promise<any> {
    return this.prisma.satisfied.create({ data })
  }

  async update(id: number, data?: any): Promise<any> {
    return this.prisma.satisfied
      .update({ where: { id: +id }, data })
      .catch((e) => {
        throw new Error('Item not found');
      });
  }

  async getOne(id?: number): Promise<any> {
    return await this.prisma.satisfied
      .findUnique({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }

  async delete(id?: number): Promise<any> {
    return await this.prisma.satisfied
      .delete({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }
}
