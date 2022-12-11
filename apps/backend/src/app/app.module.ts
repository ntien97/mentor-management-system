import { Module } from '@nestjs/common';

import { User, UserModule } from './user';
import { AuthModule } from './auth';
import {
  AuthController,
  MentorController,
  StudentController,
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USERNAME'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: 'mms',
        entities: [User],
        synchronize: true,
      }),
    }),
    SharedModule,
  ],
  controllers: [MentorController, StudentController, AuthController],
})
export class AppModule {}
