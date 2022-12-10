import { Module } from '@nestjs/common';

import { User, UserModule } from './user';
import { AuthModule } from './auth';
import {
  AuthController,
  MentorController,
  StudentController,
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      // todo: move host + password to env
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'mms',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [MentorController, StudentController, AuthController],
})
export class AppModule {}
