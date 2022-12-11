import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { IUser, UserRole } from '@mentor-management-system/util';
import { HashService } from '../shared';
import { maskedUser } from './functions/masked-user.function';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly hashService: HashService
  ) {}

  findAllByRole(role: UserRole): Promise<IUser[]> {
    return this.usersRepository
      .findBy({ role })
      .then((users) => users.map(maskedUser));
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createNewUser(
    user: Omit<User, 'id' | 'isActive' | 'passwordHash'>,
    password: string
  ): Promise<IUser> {
    const currentMail = await this.findOne(user.email);
    if (currentMail) {
      throw new HttpException('User existed', HttpStatus.BAD_REQUEST);
    }
    const passwordHash = await this.hashService.hash(password);
    return await this.usersRepository
      .save({ ...user, passwordHash })
      .then(maskedUser);
  }
}
