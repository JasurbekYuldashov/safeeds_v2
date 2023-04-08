import { pattern } from '../utils/pattern';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) {}

  async getAll(query?: any): Promise<any> {
    const data = await this.prisma.history.findMany();
    return data.map((r) => {
      return {
        ...r,
        body: r.body.match(pattern)?.[0] || '',
      };
    });
  }

  async save(data?: any): Promise<any> {
    return this.prisma.history.create({ data });
  }

  async update(id: number, data?: any): Promise<any> {
    return this.prisma.history
      .update({ where: { id: +id }, data })
      .catch((e) => {
        throw new Error('Item not found');
      });
  }

  async getOne(id?: number): Promise<any> {
    return await this.prisma.history
      .findUnique({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }

  async delete(id?: number): Promise<any> {
    return await this.prisma.history
      .delete({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }
}
