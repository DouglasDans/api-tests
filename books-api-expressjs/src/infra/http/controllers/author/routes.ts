import { Router } from "express";
import createAuthorRoute from "./post-create-author.controller";

const authorRoutes = Router();

authorRoutes.post("/author", createAuthorRoute);

export default authorRoutes;
