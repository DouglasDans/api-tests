import { PrismaUpdateAuthor } from "@/infra/db/prisma/factories/author/update-author.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const updateAuthorSchema = z.object({
  id: z.number().min(1, "ID é obrigatório"),
  name: z.string().optional(),
  nationality: z.string().optional(),
  birthDate: z.string().optional(),
});

export default async function updateAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = updateAuthorSchema.parse(req.body);
    const updateAuthor = PrismaUpdateAuthor.create();

    res.json(await updateAuthor.execute(data));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
  return;
}
