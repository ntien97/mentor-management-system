import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth';

@Controller()
export class MentorController {
  @UseGuards(JwtAuthGuard)
  @Get('mentors')
  getMentor() {
    return [];
  }
}
