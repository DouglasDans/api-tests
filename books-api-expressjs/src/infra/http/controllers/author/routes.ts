import { Router } from "express";
import createAuthorRoute from "./create-author.controller";
import getAllAuthorsRoute from "./get-all-authors.controller";

const authorRoutes = Router();

authorRoutes.get("/author", getAllAuthorsRoute);
authorRoutes.post("/author", createAuthorRoute);

export default authorRoutes;
