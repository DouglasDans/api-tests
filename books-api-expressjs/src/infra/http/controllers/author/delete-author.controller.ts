import { PrismaDeleteAuthor } from "@/infra/db/prisma/factories/author/delete-author.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const deleteAuthorSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
});

export default async function deleteAuthorRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = deleteAuthorSchema.parse(req.params);
    const deleteAuthor = PrismaDeleteAuthor.create();

    const deletedAuthor = await deleteAuthor.execute(parseInt(id));
    res.json(deletedAuthor);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
