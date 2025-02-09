/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient}  from '@workspace/database';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to connect to database: ${error.message}`);
      }
      throw new Error('Failed to connect to database');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
