import { Request, Response } from "express";
import { PrismaCreateAuthor } from "src/infra/db/prisma/factories/create-author.factory";

export default async function createAuthorRoute(req: Request, res: Response) {
  const requestBody = req.body;
  const createAuthor = PrismaCreateAuthor.create();

  res.json(await createAuthor.execute(requestBody));
}
