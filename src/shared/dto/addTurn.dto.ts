import { IsNotEmpty, IsString } from 'class-validator';

export class AddTurnDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  turn_id: string;
}
