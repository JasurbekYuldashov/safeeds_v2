import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [HistoryController],
  providers: [HistoryService, PrismaService],
})
export class HistoryModule {}
