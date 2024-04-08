import { Post, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import generateId from 'src/shared/generators/id.generator';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  // TODO: pls fix: This code is setting the code is used to true, which causes problems when the user uses the code, but doesn't create an actual account.
  // the code should be set at profileSetup. pls fix
  async findCode(code: string) {
    try {
      const recievedCode = await this.prisma.entryCodes.findUnique({
        where: {
          code,
        },
        select: {
          user_id: true,
          isUsed: true,
          code: true,
          role: true,
        },
      });
      if (!recievedCode) {
        return new NotFoundException('Code not found');
      }
      if (!recievedCode.isUsed) {
        return {
          code: recievedCode.code,
          role: recievedCode.role,
        };
      } else {
        const user = await this.prisma.user.findFirst({
          where: {
            user_id: recievedCode.user_id,
          },
        });

        return user;
      }
    } catch (err) {
      throw new NotFoundException('Code not found');
    }
  }
}
