import { Module } from '@nestjs/common';
import { CreateAccountModule } from './create_account/create_account.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';
import { GlobalGuard } from './shared/guards/global.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ContentController } from './content/content.controller';
import { ContentService } from './content/content.service';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
    AuthModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    CreateAccountModule,
    PrismaModule,
    ContentModule,
    ProfileModule,
  ],

  providers: [
    // JwtService,
    // {
    //   provide: APP_GUARD,
    //   useClass: GlobalGuard,
    // },
  ],
})
export class AppModule {}
