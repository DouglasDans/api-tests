import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { PrismaCreateBook } from "@/infra/db/prisma/factories/book/create-book.factory";

const createBookSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  isbn: z.string().min(1, "ISBN é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  publicationDate: z.string().min(1, "Data de publicação é obrigatória"),
  authorId: z.number().optional(),
  publisherId: z.number().optional(),
  author: z
    .object({
      name: z.string().min(1, "Nome do autor é obrigatório"),
      birthDate: z.string().min(1, "Data de nascimento do autor é obrigatória"),
      nationality: z.string().min(1, "Nacionalidade do autor é obrigatória"),
    })
    .optional(),
  publisher: z
    .object({
      name: z.string().min(1, "Nome da editora é obrigatório"),
      cnpj: z.string().min(1, "CNPJ da editora é obrigatório"),
      country: z.string().min(1, "País da editora é obrigatório"),
    })
    .optional(),
});

export default async function createBookRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const requestBody = createBookSchema.parse(req.body);

    const createBook = PrismaCreateBook.create();
    const book = await createBook.execute(requestBody);

    res.status(201).json(book);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
