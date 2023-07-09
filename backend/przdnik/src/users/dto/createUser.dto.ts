import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'You need to pass not empty name field' })
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'You need to pass valid email field' })
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'You need at least 6 char length in you password' })
  readonly password: string;
}
