import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PlanController],
  providers: [PlanService, PrismaService],
})
export class PlanModule {}
