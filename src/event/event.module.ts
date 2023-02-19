import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [EventController],
  providers: [EventService, PrismaService],
})
export class EventModule {}
