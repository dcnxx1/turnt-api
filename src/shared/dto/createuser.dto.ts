import {
  IsDate,
  IsEmpty,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsObject,
  isInt,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  avatar: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  @IsString()
  code: string;


  @IsNotEmpty()
  @IsString()
  birthday: string;

}
