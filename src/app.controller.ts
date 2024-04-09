import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UrlService } from './url-shortener/url.service';
import { Response } from 'express';

@Controller()
export class AppController {
    constructor(private readonly urlService: UrlService) { }
    @Get('/:short_url')
    async getShortUrl(@Param('short_url') shortUrl: string, @Res() res: Response) {
        const destination = await this.urlService.getDestination(shortUrl);

        return res.redirect(destination);
    }
}
