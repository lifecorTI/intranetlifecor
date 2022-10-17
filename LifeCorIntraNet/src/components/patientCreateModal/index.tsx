import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../service/api";
import { ICreatePatientWithProcedure, IDoctor, IProps } from "./interface";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PatientCreateModal({ show, setShow }: IProps) {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const user = JSON.parse(localStorage.getItem("@lifeCor:user") || "{}");

  useEffect(() => {
    const doctors = async () => {
      const data = await apiGet("/doctors")
        .then((res) => res)
        .catch((err) => err);

      setDoctors(data);
    };
    doctors();
  }, []);

  const schemaPatient = Yup.object().shape({
    patient: Yup.object().shape({
      name: Yup.string().required("Nome obrigatório"),
      birthDate: Yup.string().required("Data de nascimento obrigatório"),
      phone: Yup.string(),
      sex: Yup.string(),
      cpf: Yup.string().max(11).min(11),
      rg: Yup.string(),
      motherName: Yup.string(),
      address: Yup.string().notRequired(),
      houseNumber: Yup.number().notRequired(),
      district: Yup.string(),
      agreement: Yup.string().required("Convênio obrigatório"),
      city: Yup.string().required(),
      municipality: Yup.string(),
      userId: Yup.string(),
    }),
    name: Yup.string(),
    doctorId: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreatePatientWithProcedure>({
    resolver: yupResolver(schemaPatient),
  });

  async function handleCreatePatient(data: ICreatePatientWithProcedure) {
    const res = await apiPost("/patient", data);

    navigate("/home");
    setShow(!show);
    reset({ ...register });
    toast(res.message);
  }
  return show ? (
    <div className="absolute bg-stone-200 bg-opacity-60  backdrop-blur w-full p-10 z-50 flex items-center justify-center flex-col overflow-y-auto mb-7 ">
      <button
        className="flex absolute right-5 top-5"
        onClick={() => setShow(!show)}
      >
        <X color="red" size={32} weight="light" />
      </button>
      <form
        className="flex text-lg gap-16 flex-wrap"
        onSubmit={handleSubmit(handleCreatePatient)}
      >
        <fieldset className="flex flex-col gap-1 font-black">
          <legend>Dados do Paciente</legend>
          <label className="" htmlFor="">
            Nome
          </label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white "
            type="text"
            {...register("patient.name")}
            placeholder="Nome"
          />
          <label htmlFor="">Data de nascimento</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="date"
            {...register("patient.birthDate")}
            placeholder="xx/xx/xxxx"
          />
          <label htmlFor="">telefone</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.phone")}
            placeholder="somente números"
          />
          <label htmlFor="">Convênio</label>
          <select
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            {...register("patient.agreement")}
          >
            <option value="SUS">SUS</option>
            <option value="PARTICULAR">PARTICULAR</option>
            <option value="GEAP">GEAP</option>
            <option value="FUSEX">FUSEX</option>
          </select>
          <label htmlFor="">sexo</label>
          <div className="flex gap-3">
            {" "}
            <input
              className="bg-neutral-600 border rounded-lg pl-4 text-white"
              type="radio"
              {...register("patient.sex")}
              value={"M"}
            />{" "}
            <label htmlFor="">Masculino </label>
            <input
              className="bg-neutral-600 border rounded-lg pl-4 text-white"
              type="radio"
              {...register("patient.sex")}
              value={"F"}
            />
            <label htmlFor="">Feminino </label>
          </div>
          <label htmlFor="">CPF</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.cpf")}
            placeholder="somente números"
          />
          <label htmlFor="">RG</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.rg")}
            placeholder="somente números"
          />
          <label htmlFor="">Nome da mãe</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.motherName")}
            placeholder="dita cuja"
          />
          <input
            className="hidden"
            type="text"
            value={user.id}
            {...register("patient.userId")}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-1 font-black">
          <legend>Endereço</legend>
          <label htmlFor="">Rua</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.address")}
            placeholder="Nome da rua"
          />
          <label htmlFor="">Bairro</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.district")}
            placeholder="Nome do bairro"
          />
          <label htmlFor="">Numero</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="number"
            {...register("patient.houseNumber")}
            placeholder="somente números"
          />
          <label htmlFor="">Cidade</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.city")}
            placeholder="Boa vista"
          />
          <label htmlFor="">Municipío</label>
          <input
            className="bg-neutral-600 border rounded-lg pl-4 text-white"
            type="text"
            {...register("patient.municipality")}
            placeholder="Roraima"
          />
        </fieldset>
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
            <option value="CATETERISMO">Cateterismo Cardiaco</option>
            <option value="ANGIOPLASTIA">Angioplastia Cardiaca</option>
            <option value="ANGIOPLASTIA">Artériografia Cerebral</option>
          </select>{" "}
          <button
            className="bg-green-600 p-2 rounded-xl mt-20  text-white"
            type="submit"
          >
            Cadastrar
          </button>
        </fieldset>{" "}
      </form>
    </div>
  ) : (
    <></>
  );
}

export default PatientCreateModal;
