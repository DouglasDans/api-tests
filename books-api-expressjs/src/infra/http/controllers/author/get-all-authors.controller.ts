import PrismaGetAllAuthors from "@/infra/db/prisma/factories/author/get-all-authors.factory";
import { Request, Response } from "express";

export default async function getAllAuthorsRoute(req: Request, res: Response) {
  const getAllAuthors = PrismaGetAllAuthors.create();
  const authors = await getAllAuthors.execute();
  res.json(authors);
}
