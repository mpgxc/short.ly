import "dotenv/config";
import "express-async-errors";
import express from "express";
import morgan from "morgan";

import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

export { app };
