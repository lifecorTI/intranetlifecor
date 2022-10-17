import { Router } from "express";
import { Category } from "./controllers/Category.controller";
import { Doctor } from "./controllers/Doctor.controller";
import { Lot } from "./controllers/Lot.controller";
import { Patient } from "./controllers/Patient.controller";

const routes = Router();

import { Procedures } from "./controllers/Procedures.controller";
import { Products } from "./controllers/Products.controller";
import { ProductSales } from "./controllers/ProductSales.controller";
import { Provider } from "./controllers/Provider.controller";
import { Sales } from "./controllers/Sales.controller";
import { Session } from "./controllers/Session.controller";
import { User } from "./controllers/User.controller";

const session = new Session();
const procedures = new Procedures();
const products = new Products();
const user = new User();
const provider = new Provider();
const category = new Category();
const patient = new Patient();
const product = new Products();
const lot = new Lot();
const doctor = new Doctor();
const sales = new Sales();
const productSales = new ProductSales();

//POST
//session
routes.post("/session", session.authSession);
//create
routes.post("/user", user.create);
routes.post("/provider", provider.create);
routes.post("/category", category.create);
routes.post("/patient", patient.create);
routes.post("/product", product.create);
routes.post("/lot", lot.create);
routes.post("/doctor", doctor.create);
routes.post("/procedures", procedures.create);
routes.post("/sales", sales.create);
routes.post("/productSales", productSales.create);

//GET
routes.get("/procedures", procedures.getAll);
routes.get("/procedures/:id", procedures.findOne);
routes.get("/products", products.getAll);
routes.get("/patients", patient.findAll);
routes.get("/patient/:id", patient.findOne);
routes.get("/doctors", doctor.findMany);
routes.get("/providers", provider.findMany);
routes.get("/category", category.findMany);

export { routes };
