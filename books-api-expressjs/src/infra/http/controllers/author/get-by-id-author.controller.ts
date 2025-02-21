import PrismaGetByIdAuthor from "@/infra/db/prisma/factories/author/get-by-id-author.factory";
import { NextFunction, Request, Response } from "express";

export default async function getByIdAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const getByIdAuthor = PrismaGetByIdAuthor.create();

    const authors = await getByIdAuthor.execute(parseInt(id));
    res.json(authors);
  } catch (error) {
    next(error);
  }
}
