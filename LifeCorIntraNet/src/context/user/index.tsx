import { createContext, ReactNode } from "react";

interface IUser {
  name: string;
  isAdmin: boolean;
  id: string;
}

interface IUserContext {}

interface UserProvider {
  children: ReactNode;
}

export const userContext = createContext({} as IUserContext);

export function UserProvider(props: UserProvider) {
  const userProfile = {
    user: JSON.parse(localStorage.getItem("@lifeCor:user") || "{}") as IUser,
    token: localStorage.getItem("@lifeCor:token") as string,
  };

  return (
    <userContext.Provider value={{ userProfile }}>
      {props.children}
    </userContext.Provider>
  );
}
