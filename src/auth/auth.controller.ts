import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { AuthDto } from 'src/shared/dto/auth.dto';

@Controller('auth')
@UsePipes(ValidationPipe)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('validate')
  async find(@Body() { code }: AuthDto) {
    return await this.authService.findCode(code);
  }
}
