import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserService } from '../user';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto';
import { HashService } from '../shared';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly hashService: HashService
  ) {}

  async login(payload: LoginDto) {
    const user = await this.validateUser(payload.email, payload.password);

    return {
      token: this.jwtService.sign(user),
      user,
    };
  }

  private async validateUser(
    email: string,
    password: string
  ): Promise<Omit<User, 'passwordHash'>> {
    const user = await this.userService.findOne(email);

    if (user && (await this.hashService.compare(password, user.passwordHash))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordHash, ...result } = user;
      return result;
    }

    throw new UnauthorizedException();
  }
}
