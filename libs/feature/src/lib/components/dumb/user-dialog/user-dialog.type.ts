import { IUser, UserCreate, UserRole } from '@mentor-management-system/util';

export type UserDialogInputType =
  | {
      type: 'Edit';
      user: IUser;
    }
  | {
      type: 'Create';
      role: UserRole;
    };

export type UserDialogOutputType =
  | false
  | {
      user: UserCreate;
    };
