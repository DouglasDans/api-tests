import { PrismaUpdateAuthor } from "@/infra/db/prisma/factories/author/update-author.factory";
import { NextFunction, Request, Response } from "express";

export default async function updateAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const updateAuthor = PrismaUpdateAuthor.create();

    res.json(await updateAuthor.execute(data));
  } catch (error) {
    next(error);
  }
}
