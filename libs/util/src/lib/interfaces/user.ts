export interface User {
  readonly email: string;
  readonly name: string;
}

export enum UserRole {
  SUPER = 'SUPER',

  STUDENT = 'STUDENT',

  MENTOR = 'MENTOR',
}
