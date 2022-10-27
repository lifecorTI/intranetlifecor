import { ICreateProcedure, IProps } from "./interface";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ICreatePatientWithProcedure,
  IDoctor,
} from "../patientCreateModal/interface";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../service/api";
import { toast } from "react-toastify";

function ProcedureCreateModal({ setShow, show, patientId }: IProps) {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const user = JSON.parse(localStorage.getItem("@lifeCor:user") || "{}");
  const schemaPatient = Yup.object().shape({
    name: Yup.string().required(),
    doctorId: Yup.string().required(),
    origin: Yup.string().required(),
    userId: Yup.string().required(),
    patientId: Yup.string().required(),
  });

  useEffect(() => {
    const doctors = async () => {
      const data = await apiGet("/doctors")
        .then((res) => res)
        .catch((err) => err);

      setDoctors(data);
    };
    doctors();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProcedure>({
    resolver: yupResolver(schemaPatient),
  });

  async function handleCreateProcedure(data: ICreateProcedure) {
    const res = await apiPost("/procedures", data)
      .then((res) => res)
      .catch((err) => toast.error(err));

    toast.success(res.message);
    setShow(!show);
  }
  return show ? (
    <div className="absolute bg-stone-200 bg-opacity-60  backdrop-blur w-full p-10 z-50 flex items-center top-14  h-2/3 flex-col overflow-y-auto mb-7 ">
      <button
        className="flex absolute right-5 top-5"
        onClick={() => setShow(!show)}
      >
        <X color="red" size={32} weight="light" />
      </button>
      <form
        className="flex text-lg gap-16 flex-wrap"
        onSubmit={handleSubmit(handleCreateProcedure)}
      >
        <fieldset className="flex flex-col gap-1 font-black">
          <legend>Dados do médico solicitante</legend>
          <label htmlFor="">Medico solicitante</label>
          <select
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            {...register("doctorId")}
          >
            {doctors.map((doctor) => {
              return (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.location}
                </option>
              );
            })}
          </select>
          <label htmlFor="">Procedimento</label>
          <select
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            {...register("name")}
          >
            <option value="Cateterismo Cardiaco">Cateterismo Cardiaco</option>
            <option value="Artériografia Cerebral">
              Artériografia Cerebral
            </option>
            <option value="Artériografia Cerebral">
              Artériografia Cerebral
            </option>
          </select>{" "}
          <label htmlFor="">Origem</label>
          <select
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            {...register("origin")}
          >
            <option value="SUS">SUS</option>
            <option value="HC">HC</option>
            <option value="EXT">EXT</option>
          </select>
          <input
            className="hidden"
            type="text"
            value={user.id}
            {...register("userId")}
          />
          <input
            className="hidden"
            type="text"
            value={patientId}
            {...register("patientId")}
          />
          <button
            className="bg-green-600 p-2 rounded-xl mt-20  text-white"
            type="submit"
          >
            Cadastrar
          </button>
        </fieldset>
      </form>
    </div>
  ) : (
    <></>
  );
}

export default ProcedureCreateModal;
