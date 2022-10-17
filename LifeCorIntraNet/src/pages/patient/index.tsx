import { ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { apiGet } from "../../service/api";
import { ArrowLeft, FilePdf } from "phosphor-react";
import { IResPatient } from "./interface";
import { PlusCircle } from "phosphor-react";

import ProcedureCreateModal from "../../components/procedureCreateModal";

function Patient() {
  const [patient, setPatient] = useState<IResPatient>({} as IResPatient);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      const res = await apiGet(`/patient/${id}`)
        .then((res) => res)
        .catch((err) => alert(err));

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
          </nav>{" "}
          Paciente: {patient.name}
        </header>
        <ul className="w-4/5 bg-white mt-2 p-5 rounded-xl bg-opacity-90 flex gap-9 flex-wrap">
          {patient.Procedures.map((procedure) => {
            const data = new Date(procedure.CreatedAt).toLocaleString("pt-br");
            return (
              <li
                className="bg-slate-800 text-white p-3 flex flex-col  rounded-md w-full"
                key={procedure.id}
              >
                <div className="flex justify-between">
                  <span>Solicitante: {procedure.Doctor.name}</span>
                  <p>{data}</p>
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
                      className="flex items-center gap-1
                      "
                      href={`/print/opme/${procedure.id}`}
                    >
                      {" "}
                      <FilePdf />
                      OPME
                    </a>
                    <a href={`/sales/${patient.id}`}></a>
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
