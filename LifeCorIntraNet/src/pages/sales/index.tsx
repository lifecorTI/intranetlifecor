import { X } from "phosphor-react";
import { DragEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/header";
import { IPatient } from "../../components/patients/interface";
import SideBar from "../../components/sideBar";
import { apiGet, apiPost } from "../../service/api";
import { formatDateJStoDistance } from "../../utils/formatDateJStoDistance";
import { IProduct } from "../farmacia/listProducts/interface";
import { ISalesProduct, productSales } from "./interface";

function SalesProducts() {
  const navigate = useNavigate();
  const [product, setProducts] = useState<IProduct[]>([]);
  const [patient, setPatient] = useState<IPatient>();
  const [cart, setCart] = useState<ISalesProduct[]>([]);
  const { patientId, proceduresId } = useParams();

  //product
  const user = JSON.parse(localStorage.getItem("@lifeCor:user") || "{}");
  const [search, setSearch] = useState("");
  const [qtd, setQtd] = useState(1);
  const [lotId, setLotId] = useState("");

  useEffect(() => {
    const data = async () => {
      await apiGet(`/patient/${patientId}`)
        .then((res) => {
          toast.success(res.message);
          setPatient(res);
        })
        .catch((err) => toast.error(err));
    };
    data();
  }, []);

  useEffect(() => {
    const res = async () => {
      await apiGet("/products")
        .then((res) => {
          setProducts(res);
          toast.success(res.message);
        })
        .catch((err) => toast.error(err.message));
    };

    res();
  }, []);

  const productSearch =
    search.length > 0
      ? product.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  function handleProductAddCart(product: IProduct) {
    const lot = product.lot.filter((lot) => lot.id.includes(lotId));

    const productSend = {
      name: product.name,
      ref: product.ref,
      productId: product.id,
      length: product.length,
      lotName: lot[0].name,
      lotId: lot[0].id,
      qtd: qtd,
    };

    const existsInCart = cart.filter((c) => {
      return c.lotId.includes(lotId);
    });

    console.log(existsInCart);
    if (existsInCart.length > 0) {
      return toast.error("produto já registrado");
    }

    if (lot[0].qtd < qtd) {
      return toast.error("não tem quantidade suficiente para este lote");
    }

    setQtd(1);
    setCart([...cart, productSend]);
  }

  async function handleSalesSubmit() {
    const dataCart = (cart: ISalesProduct[]) => {
      let arraySalesData: any = [];

      cart.map((e) => {
        const item = {
          lotId: e.lotId,
          qtd: e.qtd,
          productId: e.productId,
        };
        arraySalesData.push(item);
      });

      return arraySalesData;
    };

    const sendData = {
      patientId: patientId,
      userId: user.id,
      proceduresId: proceduresId,
      productSales: dataCart(cart),
    };

    if (sendData.productSales.length <= 0) {
      return toast.error("carrinho vazio");
    }

    await apiPost("/sales", sendData)
      .then((res) => {
        toast(res.message);
        navigate("/home");
      })
      .catch((err) => toast.error(err));
  }

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex h-full w-full">
        <SideBar />
        <div className="bg-white w-full bg-opacity-60 m-5 p-5 items-center overflow-y-auto">
          <h1 className="text-center mb-5 text-2xl">
            Paciente: {patient?.name}
          </h1>
          <div className="flex gap-10 items-center flex-col">
            <div className="lg:flex gap-2 w-full items-center ">
              <label className="w-40 text-left" htmlFor="search">
                Pesquisar produto
              </label>
              <input
                type="text"
                name="search"
                className="w-full p-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {search.length > 0 ? (
              <ul className=" flex flex-col text-sm w-full overflow-auto">
                {productSearch.map((product: IProduct, index: number) => {
                  return (
                    <li
                      key={product.id}
                      className="w-full bg-white border-b-2 p-2 flex justify-between"
                    >
                      <label htmlFor="">
                        {product.ref} - {product.name} - {product.length}
                      </label>
                      <label>
                        {product.isCosigned ? "Consignado" : "Comprado"}
                      </label>

                      <label htmlFor="qtd">
                        quantidade:
                        <input
                          type="number"
                          placeholder="qtd"
                          value={qtd}
                          onChange={(e) => setQtd(Number(e.target.value))}
                        />
                      </label>

                      <label htmlFor="lotId">
                        Lote:{" "}
                        <select
                          name="lotId"
                          value={lotId}
                          onChange={(e) => setLotId(e.target.value)}
                        >
                          {product.lot.map((l) => {
                            return (
                              <option key={l.id} value={l.id}>
                                {l.name} - qtd: {l.qtd} - vencimento:{" "}
                                {formatDateJStoDistance(l.dueDate)}
                              </option>
                            );
                          })}
                        </select>
                      </label>
                      <button onClick={() => handleProductAddCart(product)}>
                        adicionar ao carrinho
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="flex w-full justify-center items-center bg-white">
                Procure um produto
              </div>
            )}
          </div>
          <table className="bg-white p-10 mt-10 w-full ">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-gray-500">
                  ref
                </th>
                <th className="text-left text-sm font-medium text-gray-500">
                  name
                </th>
                <th className="text-left text-sm font-medium text-gray-500">
                  tamanho
                </th>
                <th className="text-left text-sm font-medium text-gray-500">
                  lote
                </th>
                <th className="text-left text-sm font-medium text-gray-500">
                  qtd
                </th>
                <th className="text-left text-sm font-medium text-gray-500">
                  delete
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pSales, i) => {
                return (
                  <tr key={i}>
                    <td>{pSales.ref}</td>
                    <td>{pSales.name}</td>
                    <td>{pSales.length}</td>
                    <td>{pSales.lotName}</td>
                    <td>{pSales.qtd}</td>
                    <td>
                      <button>
                        <X size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="bg-green-400 mt-4 rounded-md p-2 w-full text-white"
            onClick={() => handleSalesSubmit()}
          >
            Vender
          </button>
        </div>
      </div>
    </div>
  );
}

export default SalesProducts;
