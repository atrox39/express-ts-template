import Container from 'typedi';
import { Controller, Get, Post } from '@decorators/express';
import { UserService } from '../services';

@Controller('/api/auth')
export default class AuthController {
  constructor(private readonly userService: UserService = Container.get(UserService)) {}

  @Post('/login')
  public async login() {
    return this.userService.login({ email: '', password: '' });
  }

  @Get('/test')
  public async test() {
    await this.userService.test();
    return {};
  }

  @Get('/temp')
  public temp() {
    return {};
  }
}
