import { Controller, Get } from '@decorators/express';

@Controller('/')
export default class BaseController {
  private message: string = 'Error';
  
  @Get('/')
  public index() {
    return { message: this.message };
  }
}
