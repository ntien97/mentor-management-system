import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth';
import { UserService } from '../user';
import { UserRole } from '@mentor-management-system/util';

// TODO: Authorize these when you have time
@Controller('mentors')
export class MentorController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  getMentors() {
    return this.userService.findAllByRole(UserRole.MENTOR);
  }
}