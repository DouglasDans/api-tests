import { Router } from "express";
import createAuthorRoute from "./create-author.controller";
import getAllAuthorsRoute from "./get-all-authors.controller";
import getByIdAuthorRoute from "./get-by-id-author.controller";

const authorRoutes = Router();

authorRoutes.get("/author", getAllAuthorsRoute);
authorRoutes.get("/author/:id", getByIdAuthorRoute);
authorRoutes.post("/author", createAuthorRoute);

export default authorRoutes;
