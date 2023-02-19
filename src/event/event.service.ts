import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getAll(query?: any): Promise<any> {
    return this.prisma.event.findMany({});
  }

  async save(data?: any): Promise<any> {
    return this.prisma.event.create({ data });
  }

  async update(id: number, data?: any): Promise<any> {
    return this.prisma.event.update({ where: { id: +id }, data }).catch((e) => {
      throw new Error('Item not found');
    });
  }

  async getOne(id?: number): Promise<any> {
    return await this.prisma.event
      .findUnique({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }

  async delete(id?: number): Promise<any> {
    return await this.prisma.event.delete({ where: { id: +id } }).catch(() => {
      throw new Error('Item not found');
    });
  }
}
