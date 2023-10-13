import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { Service, Inject } from 'typedi';
import { Logger } from 'winston';
import { User } from '../models/user.model';
import { LoginDto } from '../interfaces/dto/user.dto';

@Service()
export class UserService {
  private temp = 'message';

  constructor(
    @Inject('UserModel') private readonly userModel: Repository<User>,
    @Inject('logger') private readonly logger: Logger,
  ) {}

  public index = () => this.temp ;

  public async login(userReq: LoginDto) {
    const body = new LoginDto(userReq);
    const errors = await validate(body);
    this.logger.error(errors);
    return { message: 'Login success' };
  };

  public async test() {
    try {
      const user = await this.userModel.insert({
        firstName: 'Test',
        lastName: 'Test',
        email: 'email@email.com',
        password: '123456',
        isActive: true,
      });
      this.logger.info(user);
    } catch(err) {
      this.logger.error(err);
    }
    return {};
  };
}
