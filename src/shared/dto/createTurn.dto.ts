import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TFileType } from '../interfaces/turn';
import { TGenre } from '../interfaces/turn';

export class CreateTurnDto {
  @IsNotEmpty()
  type: TFileType;

  @IsString()
  @IsNotEmpty()
  artist_id: string;

  @IsString()
  @IsNotEmpty()
  source: string;

  @IsString()
  genre?: TGenre;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  cover?: string;

  @IsNumber()
  @IsNotEmpty()
  impressionStartAt: number;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
