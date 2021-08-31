import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WhatsappService } from './whatsapp.service';
import { WhatsappRequest } from './whatsapp.request';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly whatsappService: WhatsappService,
  ) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Post('/whatsapp')
  public mandarMensagemWhatsapp(@Body() data: WhatsappRequest) {
    return this.whatsappService.mandarMensagemDeTexto(data.para, data.mensagem);
  }

  @Post('/webhook')
  public recebeMensagemWhatsapp(@Body() data: any) {
    console.log(data);
  }
}
