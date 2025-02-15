import express from "express";
import authorRoutes from "./infra/http/controllers/author/routes";

const app = express();

app.use(express.json());

app.use(authorRoutes);

export default app;
