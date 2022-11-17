import { Module } from '@nestjs/common';
import { ZipcodeModule } from './zipcodes/zipcode.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadController } from './file/file.upload.controller';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EmailController } from './email/email.controller';
import { ArticleModule } from './article/article.module';
import { PrismaService } from './prisma/prisma.service';
import { SatisfiedModule } from './satisfied/satisfied.module';

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
    ArticleModule,
    SatisfiedModule,
  ],
  controllers: [FileUploadController, EmailController],
  providers: [PrismaService],
})
export class AppModule {}
