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
@Controller('students')
export class StudentController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getStudents() {
    return this.userService.findAllByRole(UserRole.STUDENT);
  }

  // TODO: Authorize only SUPER ROLE can call this api
  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  createStudent(@Body() userCreate: UserCreationDto) {
    const { password, ...result } = userCreate;

    return this.userService.createNewUser(
      {
        ...result,
        role: UserRole.STUDENT,
      },
      password
    );
  }
}
