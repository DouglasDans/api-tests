import PrismaGetByIdAuthor from "@/infra/db/prisma/factories/author/get-by-id-author.factory";
import { Request, Response } from "express";

export default async function getByIdAuthorRoute(req: Request, res: Response) {
  const { id } = req.params;
  const getAllAuthors = PrismaGetByIdAuthor.create();
  const authors = await getAllAuthors.execute(parseInt(id));
  res.json(authors);
}
