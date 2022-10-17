export interface IUser {
  name: string;
  isAdmin: boolean;
  id: string;
}

export interface userProfile {
  user: IUser;
  token: string;
}

export interface IUserContext {}
