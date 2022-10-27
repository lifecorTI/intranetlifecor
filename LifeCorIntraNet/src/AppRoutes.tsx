import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import { AuthProvider } from "./context/auth/authContext";
import Patient from "./pages/patient";
import Atendimento from "./pages/print/atendimento";
import Opme from "./pages/print/opme";
import CreateProduct from "./pages/farmacia/createProduct";
import CreateProvider from "./pages/farmacia/createProvider";
import ListProducts from "./pages/farmacia/listProducts";
import SalesProducts from "./pages/sales";
import ListProductsSales from "./pages/farmacia/listProductsSales";
import EditProductModal from "./components/editProductModal";
import { UserProvider } from "./context/user";
import LotModal from "./components/lotCreateModal";
import ListProductByPatient from "./pages/farmacia/listProductByPatient";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/patient/:id" element={<Patient />} />
            <Route path="/createProvider" element={<CreateProvider />} />
            <Route path="/createProduct" element={<CreateProduct />} />
            <Route
              path="/listProductByPatient"
              element={<ListProductByPatient />}
            />
            <Route path="/listProduct" element={<ListProducts />}>
              <Route path=":id" element={<EditProductModal />} />
              <Route path="createLot/:id" element={<LotModal />} />
            </Route>
            <Route path="/listProductSales" element={<ListProductsSales />} />
            <Route
              path="/sales/:patientId/:proceduresId"
              element={<SalesProducts />}
            />
            <Route path="/print/atendimento/:id" element={<Atendimento />} />
            <Route path="/print/opme/:id" element={<Opme />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
