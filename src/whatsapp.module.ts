import { Module } from '@nestjs/common';
import { AppController } from './whatsapp.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WhatsappService } from './whatsapp.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, WhatsappService],
})
export class WhatsappModule {}
