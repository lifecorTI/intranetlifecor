import { yupResolver } from "@hookform/resolvers/yup";
import { log } from "console";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Header from "../../../components/header";

import SideBar from "../../../components/sideBar";
import { apiGet, apiPost } from "../../../service/api";
import {
  ICategory,
  ICreateProductWithLot,
  IProduct,
  IResponseProvider,
} from "./interface";

function CreateProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [provider, setProvider] = useState<IResponseProvider[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const productSchema = Yup.object().shape({
    name: Yup.string().required(),
    length: Yup.string().required(),
    price: Yup.number().required(),
    pricePt: Yup.number().required(),
    categoryId: Yup.string().required(),
    isConsigned: Yup.boolean().required(),
    providerId: Yup.string().required(),
    algo: Yup.array(),
    lot: Yup.object().shape({
      name: Yup.string().required(),
      dueDate: Yup.date().required(),
      qtd: Yup.number().required(),
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateProductWithLot>({ resolver: yupResolver(productSchema) });

  useEffect(() => {
    const res = async () => {
      await apiGet("/products")
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => toast.error(err.message));
    };

    res();
  }, [loading == false]);

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

  const handleCreateProduct = async (data: ICreateProductWithLot) => {
    setLoading(true);
    await apiPost("/product", data)
      .then((res) => {
        toast.success(res.message);
        reset({ name: "", lot: { name: "", qtd: 0 } });
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setLoading(false);
  };

  return (
    <div className="flex w-full min-h-screen  flex-col">
      <Header />
      <div className="flex w-full">
        <div className="bg-white w-full flex p-10 flex-col gap-10">
          <form
            className="flex flex-col w-full gap-4 items-center"
            onSubmit={handleSubmit(handleCreateProduct)}
          >
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="text"
              {...register("name")}
              placeholder="Nome do produto"
            />
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="text"
              {...register("length")}
              placeholder="Tamanho: 2.00x20 | 7F | null"
            />
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="number"
              {...register("price")}
              placeholder="Preço SUS"
            />
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="number"
              {...register("pricePt")}
              placeholder="Preço Particular"
            />
            {errors.lot?.name?.message}
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="text"
              {...register("lot.name")}
              placeholder="Lote"
            />
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="date"
              {...register("lot.dueDate")}
              placeholder="Vencimento"
            />
            <input
              className="bg-slate-400 text-white placeholder:text-gray-300 pl-5 rounded-sm"
              type="number"
              {...register("lot.qtd")}
              placeholder="qtd"
            />
            <div className="flex gap-2">
              <span>Consignado: </span>
              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  {...register("isConsigned")}
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
              className="bg-slate-500 text-white rounded-lg px-3"
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
              className="bg-slate-500 text-white rounded-lg px-3"
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
            <button className="bg-green-400 w-28 items-center rounded-lg text-white">
              Cadastrar
            </button>
          </form>
          <div className="w-full bg-slate-400 p-10 overflow-hidden">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="w-40 text-sm font-medium text-gray-900 px-6 py-4 text-left border-r"
                  >
                    nome
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r"
                  >
                    tamanho
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r"
                  >
                    consignado?
                  </th>{" "}
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r"
                  >
                    lote
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r"
                  >
                    vencimento
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r"
                  >
                    qtd
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td className="text-sm text-gray-900 font-light px-6 py-4  border-r border-b">
                        {product.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4  border-r border-b">
                        {product.length}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4  border-r border-b">
                        {product.isConsigned ? "consignado" : "comprado"}
                      </td>

                      <td>
                        <ul>
                          {product.Lot.map((l) => {
                            return (
                              <li
                                key={l.id}
                                className="text-sm text-gray-900 font-light px-6 py-4  border-r border-b "
                              >
                                {l.name}
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {product.Lot.map((l) => {
                            const dueDate = new Date(
                              l.dueDate
                            ).toLocaleDateString("pt-br");
                            return (
                              <li
                                key={l.id}
                                className="text-sm text-gray-900 font-light px-6 py-4  border-r border-b"
                              >
                                {dueDate}
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {product.Lot.map((l) => {
                            return (
                              <li
                                key={l.id}
                                className="text-sm text-gray-900 font-light px-6 py-4  border-r border-b"
                              >
                                {l.qtd}
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
