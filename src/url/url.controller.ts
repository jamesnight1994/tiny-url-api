import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { UrlDto } from './url.dto';

@Controller('url-shortener')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}
    @Post('/shorten-url')
    shortenUrl(@Body() data: UrlDto) {
        return this.urlService.shortenUrl(data);
    }
}
