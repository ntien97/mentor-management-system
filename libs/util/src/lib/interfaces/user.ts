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
