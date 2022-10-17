import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../../../components/header";
import { apiGet } from "../../../service/api";
import { formatDateJStoDistance } from "../../../utils/formatDateJStoDistance";
import { IProduct } from "./interface";

function ListProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const res = async () => {
      await apiGet("/products")
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => toast.error(err.message));
    };

    res();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex bg-white w-full bg-opacity-60 p-10 justify-center items-center flex-col">
        <ul className="flex  flex-col w-full max-w-[900px] gap-2  h-full">
          {products.map((product) => {
            return (
              <li
                key={product.id}
                className="flex w-full justify-between bg-black bg-opacity-20 p-2 rounded-lg"
              >
                <p>
                  {product.name} - {product.length}
                </p>
                <div>
                  {product.Lot.map((lot) => {
                    return lot.qtd < 5 ? (
                      <div className="flex gap-2 items-center">
                        <div
                          key={lot.id}
                          className="flex gap-2 mt-1 bg-red-400 px-4 rounded-md"
                        >
                          <p>lote: {lot.name} -&gt;</p>
                          <p>{lot.qtd} und</p>
                        </div>
                        <div>
                          vencimento: {formatDateJStoDistance(lot.dueDate)}
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <div
                          key={lot.id}
                          className="flex gap-2 mt-1 bg-green-300  px-4 rounded-md"
                        >
                          <p>lote: {lot.name} -&gt;</p>
                          <p>{lot.qtd} und</p>
                        </div>
                        <div>
                          vencimento: {formatDateJStoDistance(lot.dueDate)}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p>SUS: R$ {product.price}</p> <p>PT: R$ {product.pricePt}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListProducts;
