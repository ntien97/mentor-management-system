import { IsNotEmpty, IsString } from 'class-validator';
import { UserCreate } from '@mentor-management-system/util';

export class UserCreationDto implements UserCreate {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
