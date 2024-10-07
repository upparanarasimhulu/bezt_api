import { IsString, IsEmail } from 'class-validator';

export class CreateProfileDto {
  @IsEmail()
  email: string;

  @IsString()
  gender: string;

  @IsString()
  address: string;

  @IsString()
  pincode: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;
}
