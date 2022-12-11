export interface IUser {
  readonly id: number;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: UserRole;
}

export enum UserRole {
  SUPER = 'SUPER',

  STUDENT = 'STUDENT',

  MENTOR = 'MENTOR',
}

export abstract class UserCreate implements Omit<IUser, 'id' | 'role'> {
  abstract readonly password: string;
  abstract readonly email: string;
  abstract readonly firstName: string;
  abstract readonly lastName: string;
}
