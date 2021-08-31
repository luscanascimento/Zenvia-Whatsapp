/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as zenvia from '@zenvia/sdk';

@Injectable()
export class WhatsappService {
  private client: zenvia.Client;
  private whatsappChannel: zenvia.WhatsAppChannel;
  private doNumero: string;

  constructor(config: ConfigService) {
    this.doNumero = config.get('ZENVIA_FROM_NUMBER');
    this.client = new zenvia.Client(config.get('ZENVIA_TOKEN'));
    this.whatsappChannel = this.client.getChannel(
      'whatsapp',
    ) as zenvia.WhatsAppChannel;
  }

  public async mandarMensagemDeTexto(para: string, mensagem: string) {
    return await this.whatsappChannel.sendMessage(
      this.doNumero,
      para,
      new zenvia.TextContent(mensagem),
    );
  }
}
