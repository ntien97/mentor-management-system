import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './stategies/local.stategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
