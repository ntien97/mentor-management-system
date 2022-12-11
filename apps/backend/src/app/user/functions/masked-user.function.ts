import { IUser } from '@mentor-management-system/util';
import { User } from '../user.entity';

export const maskedUser = (user: User): IUser => {
  const { passwordHash, isActive, ...result } = user;
  return result;
};
