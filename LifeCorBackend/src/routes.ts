import { Router } from "express";

import uploadConfig from "./config/upload";
import multer from "multer";

import { ensureAuthenticated } from "./middleware/ensureAuthentication.middleware";
import { Category } from "./controllers/Category.controller";
import { Doctor } from "./controllers/Doctor.controller";
import { Lot } from "./controllers/Lot.controller";
import { Patient } from "./controllers/Patient.controller";
import { Procedures } from "./controllers/Procedures.controller";
import { Products } from "./controllers/Products.controller";
import { ProductSales } from "./controllers/ProductSales.controller";
import { Provider } from "./controllers/Provider.controller";
import { Sales } from "./controllers/Sales.controller";
import { Session } from "./controllers/Session.controller";
import { User } from "./controllers/User.controller";
import { NfeController } from "./controllers/Nfe.controller";

const routes = Router();
const upload = multer(uploadConfig);

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
const nfe = new NfeController();

//POST
//session
routes.post("/session", session.authSession);
//create
routes.post("/users", user.create);
routes.post("/provider", ensureAuthenticated, provider.create);
routes.post("/category", ensureAuthenticated, category.create);
routes.post("/patient", ensureAuthenticated, patient.create);
routes.post("/product", ensureAuthenticated, product.create);
routes.post("/lot", ensureAuthenticated, lot.create);
routes.post("/doctor", ensureAuthenticated, doctor.create);
routes.post("/procedures", ensureAuthenticated, procedures.create);
routes.post("/sales", ensureAuthenticated, sales.create);
routes.post("/productSales", ensureAuthenticated, productSales.create);
routes.post("/nfe", upload.single("content"), ensureAuthenticated, nfe.create);
//update
routes.post("/updateProduct", ensureAuthenticated, product.update);
//GET
routes.get("/procedures", ensureAuthenticated, procedures.getAll);
routes.get("/procedures/:id", ensureAuthenticated, procedures.findOne);
routes.get("/products", ensureAuthenticated, products.getAll);
routes.get("/product/:id", ensureAuthenticated, products.findOne);
routes.get("/patients", ensureAuthenticated, patient.findAll);
routes.get("/patient/:id", ensureAuthenticated, patient.findOne);
routes.get("/doctors", doctor.findMany);
routes.get("/providers", ensureAuthenticated, provider.findMany);
routes.get("/category", category.findMany);
routes.get("/sales", ensureAuthenticated, sales.findMany);
routes.get("/productSales", ensureAuthenticated, productSales.findMany);
routes.get("/nfe", nfe.findMany);

//DELETE
routes.delete("/lot", ensureAuthenticated, lot.delete);

export { routes };
