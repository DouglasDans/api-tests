import { PrismaDeleteAuthor } from "@/infra/db/prisma/factories/author/delete-author.factory";
import { Request, Response } from "express";

export default async function deleteAuthorRoute(req: Request, res: Response) {
  const { id } = req.params;
  const deleteAuthor = PrismaDeleteAuthor.create();

  res.json(deleteAuthor.execute(parseInt(id)));
}
