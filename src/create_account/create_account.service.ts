import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from 'src/shared/dto/createuser.dto';
import generateId from 'src/shared/generators/id.generator';

@Injectable()
export class CreateAccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(createUserDto: CreateUserDto): Promise<{
    username: string;
    role: string;
    user_id: string;
  }> {
    const genId = generateId();

    const createdUser = await this.prisma.user.create({
      data: {
        user_id: genId,
        alias: createUserDto.username,
        avatar: createUserDto.avatar,
        dob: new Date(parseInt(JSON.parse(createUserDto.birthday))),
        role: createUserDto.role,
      },
    });

    if (createdUser) {
      await this.prisma.entryCodes.update({
        where: {
          code: createUserDto.code,
        },
        data: {
          user_id: createdUser.user_id,
          isUsed: true,
        },
      });
    }

    const createdPlaylist = await this.prisma.playlist.create({
      data: {
        user_id: createdUser.user_id,
        playlist_id: createdUser.user_id,
      },
    });
    if (createdPlaylist.playlist_id) {
      return {
        username: createdUser.alias,
        user_id: createdUser.user_id,
        role: createdUser.role,
      };
    }
  }

  async doesUsernameExist(searchUsername: string) {
    try {
      searchUsername.replace(' ', '').trim();
      const username = await this.prisma.user.findFirst({
        where: {
          alias: searchUsername,
        },
        select: {
          alias: true,
        },
      });
      return !!username;
    } catch (err) {
      console.log('ERR GET USERNAME ->', err);
    }
  }
}
