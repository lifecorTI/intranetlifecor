interface ICreateUser {
  name: string;
  password: string;
  isAdmin?: boolean;
}

interface ISessionUser {
  name: string;
  password: string;
}

export { ICreateUser, ISessionUser };
