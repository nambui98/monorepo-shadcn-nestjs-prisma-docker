import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This makes the config available in all modules without needing to import it everywhere.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
