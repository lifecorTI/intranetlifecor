import { useContext, useEffect, useState } from "react";
import { apiGet } from "../../service/api";

import { PlusCircle } from "phosphor-react";
import PatientCreateModal from "../patientCreateModal";
import { IPatient } from "./interface";
import { authContext } from "../../context/auth/authContext";

function Patient() {
  const [patient, setPatient] = useState<IPatient[]>([]);
  const [show, setShow] = useState(false);
  const { errorToken } = useContext(authContext);

  useEffect(() => {
    const res = async () => {
      const patients = await apiGet("/patients");

      setPatient(patients);
    };
    res();
  }, [show == false]);

  return (
    <>
      <PatientCreateModal show={show} setShow={setShow} />
      <section className="w-full bg-white bg-opacity-60 my-6 p-4 mr-6 rounded-md overflow-x-auto">
        <div>
          <ul className="flex w-full gap-10 flex-wrap">
            {patient.map((p) => {
              const date =
                new Date().getFullYear() - new Date(p.birthDate).getFullYear();
              return (
                <a
                  href={`/patient/${p.id}`}
                  className="flex justify-between bg-black text-white p-2  w-64 items-center rounded-md"
                  key={p.id}
                >
                  <div>
                    <span className="w-full">{p.name}</span>
                    <p>{p.agreement}</p>
                  </div>
                  <div className="text-right">
                    <p>{p.sex}</p>
                    <p>{date}A</p>
                  </div>
                </a>
              );
            })}
          </ul>

          <button
            className="absolute bottom-7 right-10"
            onClick={() => setShow(!show)}
          >
            <PlusCircle size={64} weight="light" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Patient;
