import SideBar from "../../../components/sideBar";

import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { ICreateProvider, IResponseProvider } from "./interface";
import { apiGet, apiPost } from "../../../service/api";
import { CircleDashed } from "phosphor-react";

function CreateProvider() {
  const [provider, setProvider] = useState<IResponseProvider[]>([]);
  const [loading, setLoading] = useState(false);
  const providerSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    phone: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateProvider>({
    resolver: yupResolver(providerSchema),
  });

  useEffect(() => {
    const res = async () => {
      await apiGet("/providers")
        .then((res) => {
          setProvider(res);
        })
        .catch((err) => toast.error(err.message));
    };

    res();
  }, [loading === false]);

  const handleCreateProvider = async (data: ICreateProvider) => {
    setLoading(true);
    await apiPost("/provider", data)
      .then((res) => {
        console.log(loading);
        toast.success(res.message);
        reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setLoading(false);
  };

  return (
    <div className="bg-white bg-opacity-80 h-screen flex ">
      <SideBar />
      <div className="flex flex-col w-full p-5">
        <form
          className="flex w-full p-8 flex-col gap-4"
          onSubmit={handleSubmit(handleCreateProvider)}
        >
          <label htmlFor="" className="flex w-1/2 justify-between">
            Fornecedor:{" "}
            <input
              className="bg-slate-500 rounded-lg pl-4 text-white"
              type="text"
              placeholder="nome"
              {...register("name")}
            />
          </label>{" "}
          <label htmlFor="" className="flex w-1/2 justify-between">
            email:{" "}
            <input
              className="bg-slate-500 rounded-lg pl-4 text-white"
              type="email"
              placeholder="email@dominio.com"
              {...register("email")}
            />
          </label>{" "}
          <label htmlFor="" className="flex w-1/2 justify-between">
            telefone:{" "}
            <input
              className="bg-slate-500 rounded-lg pl-4 text-white"
              type="text"
              placeholder="(xx)xxxxx-xxxx"
              {...register("phone")}
            />
          </label>
          <button
            type="submit"
            className="bg-green-400 rounded-xl p-2 w-52 text-white flex justify-center"
          >
            {loading ? (
              <CircleDashed className="animate-spin" size={20} />
            ) : (
              "cadastrar"
            )}
          </button>
        </form>
        <h1 className="font-black">Fornecedores Cadastrados</h1>
        <div className="w-full p-10 bg-white rounded-md">
          <ul className="flex flex-col gap-2">
            {provider.map((e) => {
              return (
                <li key={e.id} className="flex w-full justify-between">
                  <p>{e.name}</p>
                  <p>{e.email}</p>
                  <p>{e.phone}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateProvider;
