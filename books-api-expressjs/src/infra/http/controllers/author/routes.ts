import { Router } from "express";
import createAuthorRoute from "./create-author.controller";
import getAllAuthorsRoute from "./get-all-authors.controller";
import getByIdAuthorRoute from "./get-by-id-author.controller";
import updateAuthorRoute from "./update-author.controller";
import deleteAuthorRoute from "./delete-author.controller";

const authorRoutes = Router();

authorRoutes.get("/author", getAllAuthorsRoute);
authorRoutes.get("/author/:id", getByIdAuthorRoute);
authorRoutes.post("/author", createAuthorRoute);
authorRoutes.patch("/author", updateAuthorRoute);
authorRoutes.delete("/author", deleteAuthorRoute);

export default authorRoutes;
