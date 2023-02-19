import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AchievementService {
  constructor(private prisma: PrismaService) {}

  async getAll(query?: any): Promise<any> {
    return this.prisma.achievement.findMany({});
  }

  async save(data?: any): Promise<any> {
    return this.prisma.achievement.create({ data });
  }

  async update(id: number, data?: any): Promise<any> {
    return this.prisma.achievement
      .update({ where: { id: +id }, data })
      .catch((e) => {
        throw new Error('Item not found');
      });
  }

  async getOne(id?: number): Promise<any> {
    return await this.prisma.achievement
      .findUnique({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }

  async delete(id?: number): Promise<any> {
    return await this.prisma.achievement
      .delete({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }
}
