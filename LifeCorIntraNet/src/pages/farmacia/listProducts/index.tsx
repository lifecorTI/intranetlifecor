import { NotePencil, PlusCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../../components/header";
import { apiGet } from "../../../service/api";
import { formatDateJStoDistance } from "../../../utils/formatDateJStoDistance";
import { IProduct } from "./interface";

function ListProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    const res = async () => {
      await apiGet("/products")
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => toast.error(err.message));
    };

    res();
  }, [location.pathname]);

  const filteredList =
    search.length > 0
      ? products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  console.log(filteredList);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex bg-white w-full gap-2 bg-opacity-60 p-10 justify-center overflow-hidden">
        <input
          type="text"
          className="p-2 rounded-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="pesquese um produto aqui "
        />
      </div>
      <div className="flex bg-white w-full gap-2 bg-opacity-60 p-10 justify-center h-full overflow-hidden">
        {filteredList.length > 0 ? (
          <ul className="flex text-white  flex-col w-full  gap-2 overflow-auto ">
            {filteredList.map((product) => {
              return (
                <li
                  key={product.id}
                  className="flex w-full justify-between items-center bg-black bg-opacity-50 p-2 rounded-lg"
                >
                  <p>
                    {product.name} - {product.length}
                  </p>
                  <span>{product.isCosigned ? "Consegnado" : "Comprado"}</span>

                  <div className="flex flex-col items-center justify-center">
                    {product.lot.map((lot) => {
                      return lot.qtd < 5 ? (
                        <div key={lot.id} className="flex gap-2 items-center">
                          <div className="flex gap-2 mt-1 bg-red-400 px-4 rounded-md">
                            <p>lote: {lot.name} -&gt;</p>
                            <p>{lot.qtd} und</p>
                          </div>
                          <div>
                            vencimento: {formatDateJStoDistance(lot.dueDate)}
                          </div>
                        </div>
                      ) : (
                        <div
                          key={lot.id}
                          className="flex gap-2 items-center w-[500px]"
                        >
                          <div className="flex gap-2 mt-1 bg-green-300  px-4 rounded-md">
                            <p>lote: {lot.name} -&gt;</p>
                            <p>{lot.qtd} und</p>
                          </div>
                          <div>
                            vencimento: {formatDateJStoDistance(lot.dueDate)}
                          </div>
                        </div>
                      );
                    })}{" "}
                    <Link to={`createLot/${product.id}`}>
                      <PlusCircle size={35} />
                    </Link>
                  </div>
                  <div>
                    <p>SUS: R$ {product.price}</p>{" "}
                    <p>PT: R$ {product.pricePt}</p>
                  </div>
                  <Link to={`${product.id}`} className="flex items-center">
                    <NotePencil size={32} />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="flex text-white  flex-col w-full  gap-2 overflow-auto ">
            {products.map((product) => {
              return (
                <li
                  key={product.id}
                  className="flex w-full justify-between items-center bg-black bg-opacity-50 p-2 rounded-lg"
                >
                  <p>
                    {product.name} - {product.length}
                  </p>
                  <span>{product.isCosigned ? "Consegnado" : "Comprado"}</span>

                  <div className="flex flex-col items-center justify-center">
                    {product.lot.map((lot) => {
                      return lot.qtd < 5 ? (
                        <div key={lot.id} className="flex gap-2 items-center">
                          <div className="flex gap-2 mt-1 bg-red-400 px-4 rounded-md">
                            <p>lote: {lot.name} -&gt;</p>
                            <p>{lot.qtd} und</p>
                          </div>
                          <div>
                            vencimento: {formatDateJStoDistance(lot.dueDate)}
                          </div>
                        </div>
                      ) : (
                        <div
                          key={lot.id}
                          className="flex gap-2 items-center w-[500px]"
                        >
                          <div className="flex gap-2 mt-1 bg-green-300  px-4 rounded-md">
                            <p>lote: {lot.name} -&gt;</p>
                            <p>{lot.qtd} und</p>
                          </div>
                          <div>
                            vencimento: {formatDateJStoDistance(lot.dueDate)}
                          </div>
                        </div>
                      );
                    })}{" "}
                    <Link to={`createLot/${product.id}`}>
                      <PlusCircle size={35} />
                    </Link>
                  </div>
                  <div>
                    <p>SUS: R$ {product.price}</p>{" "}
                    <p>PT: R$ {product.pricePt}</p>
                  </div>
                  <Link to={`${product.id}`} className="flex items-center">
                    <NotePencil size={32} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default ListProducts;
