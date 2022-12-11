import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth';
import { UserService } from '../user';
import { UserRole } from '@mentor-management-system/util';
import { UserCreationDto } from '../user/dto';
import { UserIdDto } from '../user/dto/user-id.dto';

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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteStudent(@Param() { id }: UserIdDto) {
    return this.userService.remove(id);
  }
}
