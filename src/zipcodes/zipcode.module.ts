import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ZipcodeController } from './zipcode.controller';
import { ZipcodeService } from './zipcode.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 50000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ZipcodeController],
  providers: [ZipcodeService],
})
export class ZipcodeModule {}
