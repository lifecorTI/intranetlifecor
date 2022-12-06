import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import "express-async-errors";
import errorMiddleware from "./middleware/errors.middleware";
import fileUploaded from "express-fileupload";

import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

// app.use(fileUploaded());
// app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorMiddleware);
app.use("/uploads", express.static(path.join(__dirname, "..", "tmp")));

app.listen(3333, () => {
  console.log("server is running at port 3333");
});

export default app;
