import { createContext, ReactNode, useState } from "react";
import { IUserContext, IUser } from "./interface";

export const userContext = createContext({} as IUserContext);
export function UserProvider(children: ReactNode) {
  const userProfile = {
    user: JSON.parse(localStorage.getItem("@lifeCor:user") || "{}") as IUser,
    token: localStorage.getItem("@lifeCor:token") as string,
  };

  return (
    <userContext.Provider value={{ userProfile }}>
      {children}
    </userContext.Provider>
  );
}
