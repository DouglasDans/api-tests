import express from "express";
import authorRoutes from "./infra/http/controllers/author/routes";
import errorHandler from "./infra/http/middlewares/error-handler";

const app = express();

app.use(express.json());

app.use(authorRoutes);

app.use(errorHandler);

export default app;
