import { CircleDashed, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiDelete, apiGet, apiPost } from "../../service/api";
import {
  ICategory,
  IProductModal,
  IProvider,
  IUpdateProduct,
} from "./interface";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function EditProductModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({} as IProductModal);
  const [responseProvider, setResponseProvider] = useState<IProvider[]>([]);
  const [responseCategory, setResponseCategory] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(product.isCosigned);

  useEffect(() => {
    setLoading(true);
    const fetchProvider = async () => {
      await apiGet("/providers")
        .then((res) => setResponseProvider(res))
        .catch((err) => toast.error(err));
    };
    const fetchCategory = async () => {
      await apiGet("/category")
        .then((res) => setResponseCategory(res))
        .catch((err) => toast.error(err));
    };
    const fetch = async () => {
      await apiGet(`/product/${id}`)
        .then((res) => {
          setProduct(res);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err);
        });
    };
    fetch();
    fetchProvider();
    fetchCategory();
  }, []);

  useEffect(() => {
    reset({
      id: product.id,
      categoryId: product.categoryId,
      isCosigned: product.isCosigned,
      length: product.length,
      name: product.name,
      price: product.price,
      pricePt: product.pricePt,
      providerId: product.providerId,
      lot: product.lot,
    });
  }, [loading == false]);

  const schemeProduct = Yup.object().shape({
    id: Yup.string(),
    name: Yup.string(),
    length: Yup.string(),
    isCosigned: Yup.boolean(),
    price: Yup.number(),
    pricePt: Yup.number(),
    categoryId: Yup.string(),
    providerId: Yup.string(),
    lot: Yup.array(
      Yup.object().shape({
        id: Yup.string(),
        name: Yup.string(),
        dueDate: Yup.string(),
        qtd: Yup.number(),
      })
    ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUpdateProduct>({ resolver: yupResolver(schemeProduct) });

  async function handleUpdateProduct(product: IUpdateProduct) {
    console.log(product);
    await apiPost("/updateProduct", product)
      .then((res) => {
        toast.success(res.message, { autoClose: 400 });
        navigate("/listProduct");
      })
      .catch((err) => toast.error(err));
  }

  async function handleDeleteLot(id: string) {
    await apiDelete("/lot", { id })
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => toast.error(err));
  }

  return loading ? (
    <div className="bg-white bg-opacity-60 absolute w-full h-full flex justify-center items-center">
      <CircleDashed className="animate-spin" size={200} />
    </div>
  ) : (
    <div className="bg-black bg-opacity-80 absolute w-full min-h-full flex items-center justify-center overflow-y-scroll">
      <Link to={`/listProduct`} className="absolute right-10 top-5">
        <X size={50} color="red" />
      </Link>
      <form
        onSubmit={handleSubmit(handleUpdateProduct)}
        className="flex flex-col justify-center bg-white p-10 bg-opacity-60 items-center gap-3 "
      >
        <input type="hidden" {...register("id")} />
        <label htmlFor="name" className="text-left flex flex-col">
          Produto - {product.name}
          <input
            type="text"
            {...register("name")}
            placeholder="nome novo"
            className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
          />
        </label>
        <label htmlFor="name" className="text-left flex flex-col">
          Tamanho - {product.length}
          <input
            type="text"
            {...register("length")}
            placeholder="tamanho novo"
            className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
          />
        </label>
        <label htmlFor="name" className="text-left flex flex-col">
          Preço SUS - R$ {product.price}
          <input
            type="text"
            {...register("price")}
            placeholder="preço sus"
            className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
          />
        </label>
        <label htmlFor="name" className="text-left flex flex-col">
          Preço PT - R$ {product.pricePt}
          <input
            type="number"
            {...register("pricePt")}
            placeholder="preço particular"
            className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
          />
        </label>
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
        <label htmlFor="providerId" className="text-left flex flex-col">
          Fornecedor
          <select
            {...register("providerId")}
            placeholder="fornecedor"
            className="bg-slate-600 p-1 w-[200px] rounded-md pl-2 my-1 text-white"
          >
            {responseProvider.map((provider) => {
              return (
                <option key={provider.id} value={provider.id}>
                  {provider.name}
                </option>
              );
            })}
          </select>{" "}
        </label>
        <label htmlFor="categoryId" className="text-left flex flex-col">
          Categoria
          <select
            {...register("categoryId")}
            placeholder="Categoria"
            className="bg-slate-600 p-1 w-[200px] rounded-md pl-2 my-1 text-white"
          >
            {responseCategory.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
        {product.lot ? (
          product.lot.map((l, i) => {
            const date = new Date(l.dueDate);

            return (
              <>
                <label key={l.id} className="text-left flex flex-col">
                  Lote - {l.name}
                  <input type="hidden" {...register(`lot.${i}.id`)} />
                  <input
                    {...register(`lot.${i}.name`)}
                    placeholder="atualizar lote"
                    className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
                  />
                  <input
                    {...register(`lot.${i}.qtd`)}
                    placeholder="qtd"
                    className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
                  />
                  <input
                    type="date"
                    {...register(`lot.${i}.dueDate`, { value: date })}
                    className="bg-slate-600 p-1 rounded-md pl-2 my-1 text-white"
                  />
                </label>
                <button onClick={() => handleDeleteLot(l.id)}>
                  Delete Lote
                </button>
              </>
            );
          })
        ) : (
          <CircleDashed className="animate-spin" size={40} />
        )}

        <button
          type="submit"
          className="bg-green-400 p-2 rounded-lg text-white"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default EditProductModal;
