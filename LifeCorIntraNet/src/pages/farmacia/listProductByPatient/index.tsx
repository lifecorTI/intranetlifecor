import { useEffect, useState } from "react";
import Header from "../../../components/header";
import { apiGet } from "../../../service/api";
import { IResPatient } from "./interface";

function ListProductByPatient() {
  const [patient, setPatient] = useState<IResPatient[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await apiGet("/patients").then((res) => {
        setPatient(res);
      });
    };
    fetch();
  }, []);

  console.log(patient);
  return (
    <div className="flex flex-col min-h-full w-full justify-center items-center">
      <Header />
      <div className="container w-full h-full p-10 just bg-white ">
        {patient.map((p) => {
          return (
            <table key={p.id} className="w-full">
              {p.Procedures.map((procedure, i) => {
                return (
                  <tbody key={procedure.id}>
                    <tr>
                      <td>
                        <div className="flex flex-col gap-1 mt-20">
                          <p>nome: {p.name}</p>
                          <p>sexo: {p.sex}</p>
                          <p>convênio: {p.agreement}</p>
                          <p>
                            {
                              new Date(procedure.createdAt)
                                .toLocaleString("pt-br")
                                .split(" ")[0]
                            }
                          </p>
                          <p>{procedure.name}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex flex-col w-full">
                          <table>
                            <thead>
                              <tr className="border-b-2 border-black">
                                <td>ref</td>
                                <td>produto</td>
                                <td>tamanho</td>
                                <td>lote</td>
                                <td>qtd</td>
                              </tr>
                            </thead>
                            {procedure.sales.map((sales) => {
                              return sales.productSales.map((pSales) => {
                                return (
                                  <tbody key={pSales.id}>
                                    <tr>
                                      <td>{pSales.lot.product.ref}</td>
                                      <td>{pSales.lot.product.name}</td>
                                      <td>{pSales.lot.product.length}</td>
                                      <td>{pSales.lot.name}</td>
                                      <td>{pSales.qtd}</td>
                                    </tr>
                                  </tbody>
                                );
                              });
                            })}
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default ListProductByPatient;
