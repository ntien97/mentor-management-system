import { Module } from '@nestjs/common';

import { UserModule } from './user';
import { AuthModule } from './auth';
import { AppController, AuthController } from './controllers';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController, AuthController],
})
export class AppModule {}
