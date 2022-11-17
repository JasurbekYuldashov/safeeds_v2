import { INestMicroservice, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$connect();
  }

  async enableShutdownHooks(app: INestMicroservice) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
