import { Module } from '@nestjs/common';
import { CreateAccountController } from './create_account.controller';
import { CreateAccountService } from './create_account.service';

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [CreateAccountService],
})
export class CreateAccountModule {}
