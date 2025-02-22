import { PrismaUpdateBook } from "@/infra/db/prisma/factories/book/update-book.fatory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const updateBookSchema = z.object({
  id: z.number().min(1, "ID é obrigatório"),
  title: z.string().optional(),
  isbn: z.string().optional(),
  description: z.string().optional(),
  publicationDate: z.string().optional(),
  authorId: z.number().optional(),
  publisherId: z.number().optional(),
});

export default async function updateBookRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = updateBookSchema.parse(req.body);
    const updateBook = PrismaUpdateBook.create();

    const updatedBook = await updateBook.execute(data);
    res.json(updatedBook);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
