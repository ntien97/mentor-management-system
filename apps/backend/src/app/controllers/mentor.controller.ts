import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth';
import { UserService } from '../user';
import { UserRole } from '@mentor-management-system/util';
import { UserCreationDto } from '../user/dto';

// TODO: Authorize these when you have time
@Controller('mentors')
export class MentorController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  getMentors() {
    return this.userService.findAllByRole(UserRole.MENTOR);
  }

  // TODO: Authorize only SUPER ROLE can call this api
  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  createMentor(@Body() userCreate: UserCreationDto) {
    const { password, ...result } = userCreate;
    return this.userService.createNewUser(
      {
        ...result,
        role: UserRole.MENTOR,
      },
      password
    );
  }
}
