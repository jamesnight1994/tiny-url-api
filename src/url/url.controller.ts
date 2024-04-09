import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { UrlDto } from './url.dto';

@Controller('url')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}
    @Post('/shorten')
    shortenUrl(@Body() data: UrlDto) {
        return this.urlService.shortenUrl(data);
    }
}
