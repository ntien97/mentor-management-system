import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy, LocalStrategy } from './stategies';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt-constant';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
