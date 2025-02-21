import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { PrismaCreateAuthor } from "@/infra/db/prisma/factories/author/create-author.factory";

const createAuthorSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  nationality: z.string().min(1, "Nacionalidade é obrigatória"),
  birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
});

export default async function createAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const requestBody = createAuthorSchema.parse(req.body);

    const createAuthor = PrismaCreateAuthor.create();
    const author = await createAuthor.execute(requestBody);

    res.status(201).json(author);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
