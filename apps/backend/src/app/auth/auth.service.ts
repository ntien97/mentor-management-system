import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '@mentor-management-system/util';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.findOne(username);
    if (user && 'tien' === pass) {
      return user;
    }
    return null;
  }
}
