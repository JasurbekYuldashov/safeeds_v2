import { Module } from '@nestjs/common';
import { SatisfiedController } from './satisfied.controller';
import { SatisfiedService } from './satisfied.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [SatisfiedController],
  providers: [SatisfiedService, PrismaService],
})
export class SatisfiedModule {}
