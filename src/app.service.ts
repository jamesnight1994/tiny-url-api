import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ShortenUrlDto } from './app.dto';
import MD5Utils from './MD5Utils';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) { }

  /**
   * Get the destination of the short url provided
   * 
   * @param shortUrl 
   * @returns 
   */
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

  /**
   * Shorten the url passed
   * @param data 
   * @returns 
   */
  async shortenUrl(data: ShortenUrlDto) {
    const short_url = MD5Utils.generateRandomShortUrl(data.url);
    const domain = process.env.APP_DOMAIN || 'http://localhost:3000';

    // Check if the link is valid
    if (!data.url.startsWith('http://') && !data.url.startsWith('https://')) {
      throw new HttpException('Invalid URL format', HttpStatus.BAD_REQUEST);
    }

    const url = await this.prismaService.url.findFirst({where:{
      destination: data.url
    }});
    
    if(!url){
      // if not found in records, store short url and destination 
      await this.prismaService.url.create({
        data: {
          destination: data.url,
          short_url
        }
      });

    }

    return {
      short_url: `${domain}/${short_url}`
    };

  }
}
