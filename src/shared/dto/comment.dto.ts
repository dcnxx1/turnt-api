import { IsNotEmpty, IsString } from "class-validator";

export class CommentDto {
  @IsString()
  @IsNotEmpty()
  textBody: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;
  
  created_at: Date;

  updatedAt?: Date;
}
