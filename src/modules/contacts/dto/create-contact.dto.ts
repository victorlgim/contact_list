import {
  IsNotEmpty,
  IsEmail,
  isNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @MaxLength(30)
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}
