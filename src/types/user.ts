export interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: TGender;
}

export interface ILogin {
  username: string;
  password: string;
}

export type TGender = 'Male' | 'Female';
