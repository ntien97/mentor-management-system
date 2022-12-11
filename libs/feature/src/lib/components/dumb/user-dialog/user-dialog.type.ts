import { IUser, UserRole } from '@mentor-management-system/util';

export type UserDialogInputType =
  | {
      type: 'edit';
      user: IUser;
    }
  | {
      type: 'create';
      role: UserRole;
    };

export type UserDialogOutputType =
  | false
  | {
      // todo: create dto or edit dto
      user: Partial<IUser>;
    };
