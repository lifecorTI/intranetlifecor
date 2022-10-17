import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/auth/authContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useContext(authContext);

  useEffect(() => {
    const token = localStorage.getItem("@lifeCor:token");

    if (token) {
      navigate("/home");
    }
  });

  return (
    <div className="max-w-[1344px] mx-auto h-screen flex items-center justify-center flex-col">
      <div className="bg-emerald-50 w-full  max-w-[450px] items-center justify-center text-center rounded-md border-none p-6">
        <span>Entre com seu usuário</span>
        <form className="font-black flex flex-col w-full items-center justify-center gap-2 my-5 text-white">
          <input
            className="bg-slate-600 p-1 rounded-md pl-2 my-1 "
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <input
            className="bg-slate-600 p-1 rounded-md pl-2 my-1"
            type="password"
            name="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          onClick={() => signIn({ name, password })}
          className="bg-red-500 mt-4 p-2 text-stone-50 rounded-md"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
