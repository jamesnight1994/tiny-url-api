import { Injectable } from '@nestjs/common';
import { ShortenUrlDto } from './app.dto';
import MD5Utils from './MD5Utils';

@Injectable()
export class AppService {
  shortenUrl(data: ShortenUrlDto) {
    const short_url = MD5Utils.generateRandomShortUrl(data.long_url);
    const domain = process.env.APP_DOMAIN || 'http://localhost:3000';
    // url record will be stored
    let url = {
      destination: data.long_url, short_url
    };

    

    return url;
    
  }
}
