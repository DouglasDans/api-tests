import { PrismaGetByIdBook } from "@/infra/db/prisma/factories/book/get-by-id-book.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const getByIdBookSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
});

export default async function getByIdBookRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = getByIdBookSchema.parse(req.params);
    const getByIdBook = PrismaGetByIdBook.create();

    const book = await getByIdBook.execute(parseInt(id));
    res.json(book);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
