import { Injectable } from '@nestjs/common';
import { ShortenUrlDto } from './app.dto';
import MD5Utils from './MD5Utils';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) { }

  async getDestination(shortUrl: string): Promise<string> {
    // get short url destination
    const url = await this.prismaService.url.findFirst({
      where: {
        short_url: shortUrl
      }
    });
    const destination = url.destination;

    return destination;
  }

  async shortenUrl(data: ShortenUrlDto) {
    const short_url = MD5Utils.generateRandomShortUrl(data.long_url);
    const domain = process.env.APP_DOMAIN || 'http://localhost:3000';

    // store short url and destination
    this.prismaService.url.create({
      data: {
        destination: data.long_url,
        short_url
      }
    });

    return {
      short_url: `${domain}/${short_url}`
    };

  }
}
