import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { AddTurnDto } from 'src/shared/dto/addTurn.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profile: ProfileService) {}

  @Get('myUploads/:user_id')
  async getMyUploads(@Param('user_id') user_id: string) {
    return await this.profile.getMyUploads(user_id);
  }

  @Get('playlist/:user_id')
  async getPlaylist(@Param('user_id') user_id: string) {
    return await this.profile.getPlaylist(user_id);
  }

  @Get(':user_id')
  async get(@Param('user_id') user_id: string) {
    return await this.profile.getProfile(user_id);
  }

  @Put()
  async add(@Body() addTurnDto: AddTurnDto): Promise<{
    title: string;
    turn_id: string;
    cover: string;
  }> {
    return await this.profile.add(addTurnDto);
  }

  @Delete('turn')
  async deleteTurn(@Body() turnDto: AddTurnDto) {
    return await this.profile.deleteTurn(turnDto);
  }

  @Delete('from_playlist')
  async deleteFromPlaylist(@Body() addTurnDto: AddTurnDto): Promise<{
    turn_id: string;
    title: string;
    cover: string;
  }> {
    return await this.profile.deleteFromPlaylist(addTurnDto);
  }
}
