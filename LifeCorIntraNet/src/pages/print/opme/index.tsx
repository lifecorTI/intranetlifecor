import { useEffect, useRef, useState } from "react";

import ReactToPrint from "react-to-print";
import { FilePdf } from "phosphor-react";
import { apiGet } from "../../../service/api";
import { useParams } from "react-router-dom";
import { IResponseProcedure } from "../../../PDF/procedurePDFCreate.tsx/interface";
import OpmePDF from "../../../PDF/opmePDFCreate";
function Opme() {
  const { id } = useParams();
  const componentRef = useRef<any>();
  const [procedure, setProcedure] = useState<IResponseProcedure>();
  useEffect(() => {
    const query = async () => {
      const res = await apiGet(`/procedures/${id}`)
        .then((res) => res)
        .catch((err) => alert(err));

      setProcedure(res);
    };
    query();
  }, []);

  return (
    <div className="bg-white flex w-full justify-center items-center h-full">
      <div className="flex">
        <ReactToPrint
          trigger={() => (
            <button className=" absolute right-10 top-10 bg-green-500 rounded-3xl p-5 text-white">
              <FilePdf size={32} /> imprimir
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>{" "}
      <OpmePDF props={procedure} ref={componentRef} />
    </div>
  );
}

export default Opme;
