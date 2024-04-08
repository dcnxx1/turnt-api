import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { CreateTurnDto } from 'src/shared/dto/createTurn.dto';

@Controller('content')
@UsePipes(ValidationPipe)
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post('')
  @HttpCode(201)
  async createTurn(@Body() createTurnDto: CreateTurnDto) {
    return await this.contentService.createTurn(createTurnDto);
  }

  @Get('')
  async getTurns() {
    try {
      return await this.contentService.getTurns();
    } catch (err) {
      console.log('Err occured while trying to get turns :>>', err);
    }
  }
}
