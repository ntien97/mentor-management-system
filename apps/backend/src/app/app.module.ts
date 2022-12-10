import { Module } from '@nestjs/common';

import { User, UserModule } from './user';
import { AuthModule } from './auth';
import { AppController, AuthController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'mms',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController, AuthController],
})
export class AppModule {}
