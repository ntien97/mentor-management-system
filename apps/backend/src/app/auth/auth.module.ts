import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './stategies';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SharedModule } from '../shared';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    PassportModule,
    SharedModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
