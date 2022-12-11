import { IsNotEmpty, IsString } from 'class-validator';
import { IUser } from '@mentor-management-system/util';

export class UserCreationDto implements Omit<IUser, 'id' | 'role'> {
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
