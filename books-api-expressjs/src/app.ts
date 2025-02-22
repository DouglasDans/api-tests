import express from "express";
import authorRoutes from "./infra/http/controllers/author/routes";
import errorHandler from "./infra/http/middlewares/error-handler";
import bookRoutes from "./infra/http/controllers/book/routes";
import publisherRoutes from "./infra/http/controllers/publisher/routes";

const app = express();

app.use(express.json());

app.use(authorRoutes);
app.use(bookRoutes);
app.use(publisherRoutes);

app.use(errorHandler);

export default app;
