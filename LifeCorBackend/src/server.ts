import "dotenv/config";
import express from "express";
import cors from "cors";
import "express-async-errors";
import errorMiddleware from "./middleware/errors.middleware";

import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

app.listen(3333, () => {
  console.log("server is running at port 3333");
});

export default app;
