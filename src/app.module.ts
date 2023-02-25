import { Module } from '@nestjs/common';
import { ZipcodeModule } from './zipcodes/zipcode.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadController } from './file/file.upload.controller';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EmailController } from './email/email.controller';
import { AchievementModule } from './achievement/achievement.module';
import { PrismaService } from './prisma/prisma.service';
import { SatisfiedModule } from './satisfied/satisfied.module';
import { EventModule } from './event/event.module';
import { HistoryModule } from './history/history.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../uploads'),
      serveRoot: '/api/uploads',
      serveStaticOptions: {
        index: false,
      },
    }),
    ZipcodeModule,
    AuthModule,
    SatisfiedModule,
    AchievementModule,
    EventModule,
    HistoryModule,
    PlanModule,
  ],
  controllers: [FileUploadController, EmailController],
  providers: [PrismaService],
})
export class AppModule {};
