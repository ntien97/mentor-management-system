import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserRole } from '@mentor-management-system/util';
import { HashService } from '../shared';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly hashService: HashService
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findAllByRole(role: UserRole): Promise<User[]> {
    return this.usersRepository.findBy({ role });
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
  ): Promise<void> {
    const currentMail = await this.findOne(user.email);
    if (currentMail) {
      throw new HttpException('User existed', HttpStatus.BAD_REQUEST);
    }
    const passwordHash = await this.hashService.hash(password);
    await this.usersRepository.save({ ...user, passwordHash });
  }
}
