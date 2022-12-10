import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService, LocalAuthGuard } from '../auth';
import { LoginDto } from '../auth/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }
}
