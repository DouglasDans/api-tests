import { PrismaDeleteAuthor } from "@/infra/db/prisma/factories/author/delete-author.factory";
import { NextFunction, Request, Response } from "express";

export default async function deleteAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const deleteAuthor = PrismaDeleteAuthor.create();

    const deletedAuthor = await deleteAuthor.execute(parseInt(id));
    res.json(deletedAuthor);
  } catch (error) {
    next(error);
  }
}
