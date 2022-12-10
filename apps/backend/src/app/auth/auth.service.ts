import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserService } from '../user';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
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
    // todo: add the hash function here
    const hashedPassword = password;
    if (user && hashedPassword === user.passwordHash) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordHash, ...result } = user;
      return result;
    }

    throw new UnauthorizedException();
  }
}
