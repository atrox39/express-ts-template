import { IsString, IsEmail } from 'class-validator';

export class LoginDto {
  constructor({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    this.email = email;
    this.password = password;
  }

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
};
