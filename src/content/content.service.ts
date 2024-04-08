import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Turn } from '@prisma/client';
import { STATUS_CODES } from 'http';
import { getLogs } from 'src/aws/cloudwatch';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTurnDto } from 'src/shared/dto/createTurn.dto';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  async getTurns() {
    try {
      const turns = await this.prisma.turn.findMany({
        orderBy: { created_at: 'desc' },
        include: {
          user: {
            select: {
              alias: true,
            },
          },
        },
      });

      if (turns.length) {
        return turns;
      }
    } catch (err) {
      console.log('Err while getting turns ->>', err);
    }
  }
  async createTurn(createTurnDto: CreateTurnDto): Promise<Turn> {
    const turn_id = createTurnDto.source.split('.')[0];

    try {
      const turn = await this.prisma.turn.create({
        data: {
          user: {
            connect: {
              user_id: createTurnDto.artist_id,
            },
          },
          turn_id,
          genre: createTurnDto.genre,
          source: createTurnDto.source,
          cover: createTurnDto.cover,
          impressionStartAt: createTurnDto.impressionStartAt,
          duration: createTurnDto.duration,
          title: createTurnDto.title,
          type: createTurnDto.type,
          impressionSource: turn_id + '.m3u8',
        },
      });
      console.log('turn created ->>', turn);
      if (!turn) {
        return;
      }
      return turn;
    } catch (err) {
      console.log('err occured while trying to create turn ->>', err);
      throw new BadRequestException('Could not create Turn');
    }
  }
}
