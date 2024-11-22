import express, { Application } from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app: Application = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/api", routes);

export default app;
