import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../service/api";
import { toast } from "react-toastify";
import { decode } from "jsonwebtoken";

interface IUser {
  name: string;
  isAdmin: boolean;
  id: string;
}
interface IUserSign {
  name: string;
  password: string;
}

interface IAuthContext {
  signIn: (user: IUserSign) => void;
  signOut: () => void;
  errorToken: () => void;
}

interface AuthProvider {
  children: ReactNode;
}

export const authContext = createContext({} as IAuthContext);

export function AuthProvider(props: AuthProvider) {
  const navigate = useNavigate();

  async function signIn(user: IUserSign) {
    const res = await apiPost("/session", user);

    if (!res.token) {
      return toast.error(res.message);
    }
    localStorage.setItem("@lifeCor:token", res.token);
    localStorage.setItem("@lifeCor:user", JSON.stringify(res.user));

    toast.success("Bem-Vindo!");

    navigate("/home");
  }

  function signOut() {
    localStorage.removeItem("@lifeCor:token");
    localStorage.removeItem("@lifeCor:user");

    navigate("/");
  }

  function errorToken() {
    const token = localStorage.getItem("@lifeCor:token") || "{}";

    // const decoded = decode(token);

    // console.log(decoded);

    // localStorage.removeItem("@lifeCor:token");
    // localStorage.removeItem("@lifeCor:user");

    // toast.error("algo de errado com token");
    // navigate("/");
  }

  return (
    <authContext.Provider value={{ signIn, signOut, errorToken }}>
      {props.children}
    </authContext.Provider>
  );
}
