import { PrismaGetAllBooks } from "@/infra/db/prisma/factories/book/get-all-book.factory";
import { NextFunction, Request, Response } from "express";

export default async function getAllBooksRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const getAllBooks = PrismaGetAllBooks.create();
    const books = await getAllBooks.execute();
    res.json(books);
  } catch (error) {
    next(error);
  }
}
