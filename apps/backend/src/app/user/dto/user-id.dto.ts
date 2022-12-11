import { IsNumber } from 'class-validator';
import { IUser } from '@mentor-management-system/util';

export class UserIdDto implements Pick<IUser, 'id'> {
  @IsNumber()
  id: number;
}
