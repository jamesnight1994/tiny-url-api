import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ShortenUrlDto } from './app.dto';
import { PrismaService } from './prisma/prisma.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prismaService: PrismaService) {}

  
  @Post('/shorten-url')
  shortenUrl(@Body() data: ShortenUrlDto) {
    return this.appService.shortenUrl(data);
  }

  @Get('/:short_url')
  async getShortUrl(@Param('short_url') shortUrl: string, @Res() res: Response) {
    const destination = await this.appService.getDestination(shortUrl);
    
    return res.redirect(destination);
  }
}
