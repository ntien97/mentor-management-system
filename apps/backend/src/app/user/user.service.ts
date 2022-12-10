import { Injectable } from '@nestjs/common';
import { User } from '@mentor-management-system/util';

@Injectable()
export class UserService {
  // todo: move to DB, remove password
  private readonly users: User[] = [
    {
      email: 'nghuuanhtien@gmail.com',
      name: 'tien',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
