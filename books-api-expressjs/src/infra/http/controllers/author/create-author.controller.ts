import { NextFunction, Request, Response } from "express";
import { PrismaCreateAuthor } from "@/infra/db/prisma/factories/author/create-author.factory";

export default async function createAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requestBody = req.body;
  const createAuthor = PrismaCreateAuthor.create();

  res.status(201);
  res.json(
    await createAuthor.execute(requestBody).catch((error) => {
      next(error);
    })
  );
}
