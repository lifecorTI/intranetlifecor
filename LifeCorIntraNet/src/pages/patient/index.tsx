import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { apiGet } from "../../service/api";
import { ArrowLeft, FilePdf, ShoppingCart } from "phosphor-react";
import { IResPatient } from "./interface";
import { PlusCircle } from "phosphor-react";

import ProcedureCreateModal from "../../components/procedureCreateModal";
import { toast } from "react-toastify";

function Patient() {
  const [patient, setPatient] = useState<IResPatient>({} as IResPatient);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      const res = await apiGet(`/patient/${id}`)
        .then((res) => {
          console.log(res.status);
          return res;
        })
        .catch((err) => toast.error(err));

      setLoading(false);
      setPatient(res);
    };
    data();
  }, [show == false]);

  function handleBack() {
    navigate("/home");
  }

  return loading ? (
    <>Carregando...</>
  ) : (
    <>
      <ProcedureCreateModal
        show={show}
        setShow={setShow}
        patientId={patient.id}
      />
      <div className="flex flex-col w-full justify-center items-center">
        <header className="w-full flex items-center justify-between px-5 bg-white bg-opacity-90">
          <nav>
            <ArrowLeft size={32} weight="bold" onClick={handleBack} />
          </nav>
        </header>
        <ul className="w-4/5 bg-white mt-2 p-5 rounded-xl bg-opacity-90 flex gap-9 flex-wrap">
          <h1 className="text-2xl">Paciente: {patient.name}</h1>
          {patient.Procedures.map((procedure, i) => {
            const data = new Date(procedure.createdAt).toLocaleString("pt-br");
            const salesProcedures = patient.Sales.filter((sales) => {
              return sales.proceduresId.includes(procedure.id);
            });

            return (
              <li
                className="bg-slate-800 text-white p-3 flex flex-col  rounded-md w-full"
                key={procedure.id}
              >
                <div className="flex justify-between">
                  <span>Solicitante: {procedure.doctor.name}</span>
                  <p>
                    {data} - {procedure.origin} | Vendas realizadas:{" "}
                    {salesProcedures.length}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span>{procedure.name}</span>
                    <p>{patient.agreement}</p>
                  </div>
                  <nav className="flex gap-3">
                    <a
                      className="flex items-center gap-1"
                      href={`/print/atendimento/${procedure.id}`}
                    >
                      <FilePdf /> P.A
                    </a>
                    <a
                      className="flex items-center gap-1"
                      href={`/print/opme/${procedure.id}`}
                    >
                      <FilePdf />
                      OPME
                    </a>
                    <a
                      className="flex items-center gap-1"
                      href={`/sales/${patient.id}/${procedure.id}`}
                    >
                      <ShoppingCart />
                      VENDAS
                    </a>
                  </nav>
                </div>
              </li>
            );
          })}
          <button
            className="absolute bottom-10 right-10"
            onClick={() => setShow(!show)}
          >
            <PlusCircle size={64} weight="regular" color="#fff" />
          </button>
        </ul>
      </div>
    </>
  );
}

export default Patient;
