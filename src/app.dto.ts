import { ApiProperty } from '@nestjs/swagger';

export class ShortenUrlDto {
  @ApiProperty({ description: 'The long URL to be shortened', default:"https://example.com"})
  long_url: string;
}
