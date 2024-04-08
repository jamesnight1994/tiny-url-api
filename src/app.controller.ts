import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ShortenUrlDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Post('/shorten-url')
  shortenUrl(@Body() data: ShortenUrlDto) {
    return this.appService.shortenUrl(data);
  }
}
