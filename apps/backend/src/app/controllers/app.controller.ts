import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth';

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return [];
  }
}
