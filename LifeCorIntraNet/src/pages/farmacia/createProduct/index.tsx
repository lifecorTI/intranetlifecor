import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Header from "../../../components/header";
import { apiGet, apiPost } from "../../../service/api";
import { formatDateJStoDistance } from "../../../utils/formatDateJStoDistance";
import {
  ICategory,
  ICreateProductWithLot,
  IResponseProvider,
} from "./interface";

function CreateProduct() {
  const [products, setProducts] = useState<ICreateProductWithLot[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [provider, setProvider] = useState<IResponseProvider[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    ref: Yup.string().required(),
    length: Yup.string().required(),
    price: Yup.number().required(),
    pricePt: Yup.number().required(),
    categoryId: Yup.string().required(),
    isCosigned: Yup.boolean().required(),
    providerId: Yup.string().required(),
    lot: Yup.array(
      Yup.object().shape({
        name: Yup.string().required(),
        dueDate: Yup.date().required(),
        qtd: Yup.number().required(),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ICreateProductWithLot>({ resolver: yupResolver(productSchema) });

  const { fields, append, remove } = useFieldArray({
    name: "lot",
    control,
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
  }, []);

  useEffect(() => {
    const res = async () => {
      await apiGet("/category")
        .then((res) => {
          setCategory(res);
        })
        .catch((err) => toast.error(err.message));
    };

    res();
  }, []);

  async function handleSubmitProduct(data: ICreateProductWithLot) {
    setLoading(true);
    const productExists = products.filter(
      (p) => p.name.match(data.name) && p.length.match(data.length)
    );

    if (productExists.length > 0) {
      setLoading(false);
      return toast.error("product já foi para cadastro");
    }

    await apiPost("/product", data)
      .then((res) => {
        if (res.message === "product already registered!") {
          return toast.error("produto já registrado no banco de dados");
        }
        reset({
          length: "",
          lot: [],
          name: "",
          price: 0,
          pricePt: 0,
          isCosigned: false,
        });
        setProducts([...products, data]);
        toast.success(res.message);
      })

      .catch((err) => {
        toast.error(err.message);
      });
    setLoading(false);
  }

  return (
    <div className="flex w-full h-full flex-col bg-white bg-opacity-60 overflow-auto">
      <Header />
      <div className="flex w-full h-full">
        <div className="flex p-5 gap-10">
          <form
            className="flex flex-col w-full gap-4 items-center"
            onSubmit={handleSubmit(handleSubmitProduct)}
          >
            {" "}
            <input
              className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="text"
              {...register("ref")}
              placeholder="refefência"
            />
            <input
              className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="text"
              {...register("name")}
              placeholder="Nome do produto"
            />
            <input
              className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="text"
              {...register("length")}
              placeholder="Tamanho: 2.00x20 | 7F | null"
            />
            <input
              className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="number"
              {...register("price")}
              placeholder="Preço SUS"
            />
            <input
              className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="number"
              {...register("pricePt")}
              placeholder="Preço Particular"
            />
            <div className="flex gap-2">
              <span>Consignado: </span>
              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  {...register("isCosigned")}
                />
                <div
                  onClick={() => {
                    setEnabled(!enabled);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"
                ></div>
              </label>
            </div>
            <select
              className="bg-slate-700 text-white rounded-lg px-3"
              {...register("providerId")}
            >
              {provider.map((p) => {
                return (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                );
              })}
            </select>
            <select
              className="bg-slate-700 text-white rounded-lg px-3"
              {...register("categoryId")}
            >
              {category.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
            <div className="flex flex-col w-full gap-5 h-full overflow-auto">
              <ul className=" flex flex-col h-full gap-3 overflow-auto">
                {fields.map((item, index) => (
                  <li
                    key={item.id}
                    className="flex  flex-col gap-3  bg-white p-2 rounded-md"
                  >
                    <label htmlFor="name">
                      lote
                      <Controller
                        render={({ field }) => (
                          <input
                            className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
                            {...field}
                          />
                        )}
                        name={`lot.${index}.name`}
                        control={control}
                      />
                    </label>
                    <label htmlFor="qtd">
                      quantidade
                      <Controller
                        render={({ field }) => (
                          <input
                            className="bg-slate-700 text-white placeholder:text-gray-300 pl-5 rounded-sm"
                            {...field}
                          />
                        )}
                        name={`lot.${index}.qtd`}
                        control={control}
                      />
                    </label>
                    <label htmlFor="dueDate">
                      vencimento
                      <Controller
                        render={({ field }) => (
                          <input
                            className="bg-slate-700 text-white w-full placeholder:text-gray-300 pl-5 rounded-sm"
                            type="date"
                            {...field}
                          />
                        )}
                        name={`lot.${index}.dueDate`}
                        control={control}
                      />
                    </label>
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="bg-fuchsia-500 rounded-md text-white"
                type="button"
                onClick={() =>
                  append({
                    name: "nome do lote",
                    qtd: 1,
                    dueDate: new Date().toLocaleString("pt-br"),
                  })
                }
              >
                Adiconar novo lote
              </button>
            </div>
            <button className="bg-green-400 w-28 items-center rounded-lg text-white">
              adicionar
            </button>
          </form>
        </div>
        <div className="bg-black bg-opacity-60 w-full flex flex-col p-5">
          <h1 className="text-white text-center text-4xl">
            Produtos cadastrados
          </h1>
          <ul className="flex flex-col gap-3">
            {products.length > 0 ? (
              products.map((p, i) => {
                return (
                  <li
                    key={i}
                    className="flex w-full justify-between items-center bg-white bg-opacity-60 p-2 rounded-lg"
                  >
                    <p>
                      {p.ref} - {p.name} - {p.length}
                    </p>
                    <span>{p.isCosigned ? "Consegnado" : "Comprado"}</span>
                    <div className="flex flex-col items-center justify-center">
                      {p.lot.map((lot, i) => {
                        return (
                          <div key={i} className="flex gap-2 items-center">
                            <div className="flex gap-2 mt-1 bg-green-300  px-4 rounded-md">
                              <p>lote: {lot.name} -&gt;</p>
                              <p>{lot.qtd} und</p>
                            </div>
                            <div>
                              vencimento: {formatDateJStoDistance(lot.dueDate)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <p>SUS: R$ {p.price}</p> <p>PT: R$ {p.pricePt}</p>
                    </div>
                  </li>
                );
              })
            ) : (
              <>
                <div className="text-white w-full items-center justify-center flex">
                  <span>SUA LISTA ESTÁ VAZIA</span>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
