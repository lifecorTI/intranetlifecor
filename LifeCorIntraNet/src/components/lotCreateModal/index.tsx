import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ILotPropsRequest } from "./interface";
import * as Yup from "yup";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { apiPost } from "../../service/api";
import { toast } from "react-toastify";
import { X } from "phosphor-react";

function LotModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const schemaLot = Yup.object().shape({
    lot: Yup.array(
      Yup.object().shape({
        productId: Yup.string().required(),
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
  } = useForm<ILotPropsRequest>({ resolver: yupResolver(schemaLot) });

  const { fields, append, remove } = useFieldArray({
    name: "lot",
    control,
  });

  async function handleCreateLot(data: ILotPropsRequest) {
    await apiPost("/lot", data).then((res) => {
      toast.success(res.message);
      navigate("/listProduct");
    });
  }

  return (
    <div className="absolute w-full bg-white p-10 bg-opacity-90 h-full  justify-center items-center">
      <Link to={`/listProduct`} className="absolute right-10 top-5">
        <X size={50} color="red" />
      </Link>
      <form
        className="h-full w-full p-10"
        onSubmit={handleSubmit(handleCreateLot)}
      >
        <div className="flex flex-col w-full gap-5 h-full overflow-auto ">
          <ul className=" flex flex-col h-full gap-3 flex-wrap overflow-auto">
            {fields.map((item, index) => (
              <li
                key={item.id}
                className="flex  flex-col items-center justify-between gap-3 max-w-[500px] bg-white p-2 rounded-md"
              >
                {" "}
                <Controller
                  render={({ field }) => (
                    <input
                      type="hidden"
                      className="bg-slate-700 max-w-xs text-white placeholder:text-gray-300 pl-5 rounded-sm"
                      {...field}
                    />
                  )}
                  name={`lot.${index}.productId`}
                  control={control}
                />
                <label htmlFor="name" className="flex flex-col">
                  lote{" "}
                  <Controller
                    render={({ field }) => (
                      <input
                        className="bg-slate-700 max-w-xs text-white placeholder:text-gray-300 pl-5 rounded-sm"
                        {...field}
                      />
                    )}
                    name={`lot.${index}.name`}
                    control={control}
                  />
                </label>
                <label htmlFor="qtd" className="flex flex-col">
                  quantidade{" "}
                  <Controller
                    render={({ field }) => (
                      <input
                        className="bg-slate-700 max-w-xs text-white placeholder:text-gray-300 pl-5 rounded-sm"
                        {...field}
                      />
                    )}
                    name={`lot.${index}.qtd`}
                    control={control}
                  />
                </label>
                <label htmlFor="dueDate" className="flex flex-col">
                  vencimento{" "}
                  <Controller
                    render={({ field }) => (
                      <input
                        className="bg-slate-700 max-w-xs text-white w-full placeholder:text-gray-300 pl-5 rounded-sm"
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
            <button
              className="bg-fuchsia-500 rounded-md text-white max-w-[200px]"
              type="button"
              onClick={() =>
                append({
                  productId: id,
                  name: "nome do lote",
                  qtd: 1,
                  dueDate: new Date().toLocaleString("pt-br"),
                })
              }
            >
              Adiconar novo lote
            </button>
          </ul>
        </div>
        <button className="bg-green-400  w-full items-center p-2 rounded-lg text-white">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default LotModal;
