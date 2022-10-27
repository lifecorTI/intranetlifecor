import { useEffect, useState } from "react";
import Header from "../../../components/header";
import SideBar from "../../../components/sideBar";
import { apiGet } from "../../../service/api";
import { formatDateJStoDistance } from "../../../utils/formatDateJStoDistance";
import { IResponseProductsSales } from "./interface";

function ListProductsSales() {
  const [sales, setSales] = useState<IResponseProductsSales[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await apiGet("/productSales").then((res) => setSales(res));
    };

    fetch();
  }, []);

  console.log(sales);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex w-full h-full p-10 bg-white bg-opacity-60 overflow-hidden overflow-y-auto">
        <table className="w-full text-center bg-black text-white p-10 bg-opacity-60">
          <thead>
            <tr className="bg-white text-black">
              <td>ref</td>
              <td>produto</td>
              <td>tamanho</td>
              <td>quantidade vendida</td>
              <td>lote vendido</td>
              <td>data da venda</td>
              <td>paciente</td>
            </tr>
          </thead>
          <tbody>
            {sales.map((item) => {
              const data = new Date(item.sales.createdAt).toLocaleDateString(
                "pt-BR"
              );
              return (
                <tr key={item.id}>
                  <th>{item.product.ref}</th>
                  <th>{item.product.name}</th>
                  <th>{item.product.length}</th>
                  <th>{item.qtd}</th>
                  <th>{item.lot.name}</th>
                  <th>{data}</th>
                  <th>{item.sales.patient.name}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProductsSales;
