import { Injectable } from '@nestjs/common';
import { AddTurnDto } from 'src/shared/dto/addTurn.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getPlaylist(user_id: string) {
    try {
      const playlist = await this.prisma.playlist.findFirst({
        where: {
          user_id,
        },
        select: {
          playlist_id: true,
        },
      });

      const playlist_id = playlist?.playlist_id;

      if (playlist_id) {
        const myPlaylist = await this.prisma.playlist.findFirst({
          where: {
            playlist_id,
          },
          select: {
            turns: true,
          },
        });

        const turns = myPlaylist?.turns;

        return turns ?? [];
      }

      return [];
    } catch (err) {
      console.log('ERR GET PLAYLIST :>>', err);

      throw err; // Rethrow the error to propagate it up the call stack
    }
  }
  async getProfile(userId: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          user_id: userId,
        },
        select: {
          user_id: true,
          avatar: true,
          alias: true,
        },
      });

      if (user) {
        return {
          user_id: user.user_id,
          avatar: user.avatar,
          alias: user.alias,
        };
      }
    } catch (err) {
      console.log('err occured while trying to get user from db:>>', err);
    }
  }

  async add(turnDto: AddTurnDto) {
    try {
      const playlists = await this.prisma.user.findFirst({
        where: {
          user_id: turnDto.user_id,
        },
        select: {
          playlist: {
            select: {
              playlist_id: true,
            },
          },
        },
      });

      console.log('playlist_id::>>', playlists);
      const playlist_id: string = playlists.playlist[0].playlist_id;
      const playlistUpdateResult = await this.prisma.playlist.update({
        where: {
          playlist_id,
        },
        data: {
          turns: {
            connect: { turn_id: turnDto.turn_id },
          },
        },
        select: {
          turns: {
            where: {
              turn_id: turnDto.turn_id,
            },
          },
        },
      });
      const addedTurn = playlistUpdateResult.turns[0];
      return {
        title: addedTurn.title,
        turn_id: addedTurn.turn_id,
        cover: addedTurn.cover,
      };
    } catch (err) {
      console.log('Err occured while trying to add to playlist ->>', err);
    }
  }

  async getMyUploads(user_id: string) {
    try {
      const myUploads = await this.prisma.turn.findMany({
        where: {
          artist_id: user_id,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
      return myUploads;
    } catch (err) {
      console.log('ERR GET MYUPLOADS :>', err);
    }
  }

  async deleteFromPlaylist(turnDto: AddTurnDto): Promise<{
    turn_id: string;
    title: string;
    cover: string;
  }> {
    try {
      const playlists = await this.prisma.user.findFirst({
        where: {
          user_id: turnDto.user_id,
        },
        select: {
          playlist: {
            select: {
              playlist_id: true,
            },
          },
        },
      });

      const turn = await this.prisma.turn.findFirst({
        where: {
          turn_id: turnDto.turn_id,
        },
        select: {
          turn_id: true,
          cover: true,
          title: true,
        },
      });
      const playlist_id = playlists.playlist[0].playlist_id;
       await this.prisma.playlist.update({
        where: {
          playlist_id,
        },
        data: {
          turns: {
            disconnect: {
              turn_id: turnDto.turn_id,
            },
          },
        },

        select: {
          turns: {
            where: {
              turn_id: turnDto.turn_id,
            },
          },
        },
      });

      return turn;
    } catch (err) {
      console.log('err occured while trying to delete turn ->>', err);
    }
  }

  async deleteTurn(
    turnDto: AddTurnDto,
  ): Promise<
    | { turn_id: string; title: string; source: string; cover: string }
    | undefined
  > {
    try {
      const user_turn = await this.prisma.turn.findFirst({
        where: {
          turn_id: turnDto.turn_id,
        },
      });
      if (user_turn.artist_id === turnDto.user_id) {
        const deletedTurn = await this.prisma.turn.delete({
          where: {
            turn_id: turnDto.turn_id,
          },
          select: {
            turn_id: true,
            source: true,
            cover: true,
            title: true,
          },
        });
        if (deletedTurn) {
          const { turn_id, title, source, cover } = deletedTurn;
          return { turn_id, title, source, cover };
        }
      }
    } catch (err) {
      console.log('err occured while trying to delete turn ', err);
    }
  }
}
