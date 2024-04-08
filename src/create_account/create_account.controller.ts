import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CreateAccountService } from './create_account.service';
import { CreateUserDto } from 'src/shared/dto/createuser.dto';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';

@Controller('setup')
@UsePipes(ValidationPipe)
export class CreateAccountController {
  constructor(private createAccountService: CreateAccountService) {}

  @Post('')
  async createProfile(@Body() createUserDto: CreateUserDto): Promise<{
    user_id: string;
    username: string;
    role: string;
  }> {
    return await this.createAccountService.createAccount(createUserDto);
  }

  @Get('/find/:username')
  async findUsername(@Param('username') username: string) {
    return await this.createAccountService.doesUsernameExist(username);
  }
}
