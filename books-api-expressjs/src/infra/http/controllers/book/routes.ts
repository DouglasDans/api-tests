import getAllBooksRoute from "./get-all-books.controller";
import createBookRoute from "./create-book.controller";
import deleteBookRoute from "./delete-book.controller";
import getByIdBookRoute from "./get-by-id-book.controller";
import updateBookRoute from "./update-book.controller";
import { Router } from "express";

const bookRoutes = Router();

bookRoutes.get("/book", getAllBooksRoute);
bookRoutes.get("/book/:id", getByIdBookRoute);
bookRoutes.post("/book", createBookRoute);
bookRoutes.patch("/book", updateBookRoute);
bookRoutes.delete("/book/:id", deleteBookRoute);

export default bookRoutes;
