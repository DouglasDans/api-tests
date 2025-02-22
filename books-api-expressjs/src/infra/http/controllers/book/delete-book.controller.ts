import { PrismaDeleteBook } from "@/infra/db/prisma/factories/book/delete-book.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const deleteBookSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
});

export default async function deleteBookRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = deleteBookSchema.parse(req.params);
    const deleteBook = PrismaDeleteBook.create();

    const deletedBook = await deleteBook.execute(parseInt(id));
    res.json(deletedBook);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
