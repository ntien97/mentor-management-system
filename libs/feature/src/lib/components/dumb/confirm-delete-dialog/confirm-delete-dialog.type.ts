import { IUser } from '@mentor-management-system/util';

export type ConfirmDeleteDialogInputType = { user: IUser };

export type ConfirmDeleteDialogOutputType =
  | false
  | {
      id: number;
    };
