import PrismaGetAllAuthors from "@/infra/db/prisma/factories/author/get-all-authors.factory";
import { NextFunction, Request, Response } from "express";

export default async function getAllAuthorsRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const getAllAuthors = PrismaGetAllAuthors.create();
  const authors = await getAllAuthors.execute().catch((error) => {
    next(error);
  });
  res.json(authors);
}
