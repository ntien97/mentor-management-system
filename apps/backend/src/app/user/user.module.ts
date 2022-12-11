import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { SharedModule } from '../shared';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SharedModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
