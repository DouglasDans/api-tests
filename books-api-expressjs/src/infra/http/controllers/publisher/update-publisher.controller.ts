import { PrismaUpdatePublisher } from "@/infra/db/prisma/factories/publisher/update-publisher.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const updatePublisherSchema = z.object({
  id: z.number().min(1, "ID é obrigatório"),
  name: z.string().optional(),
  cnpj: z.string().optional(),
  country: z.string().optional(),
});

export default async function updatePublisherRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = updatePublisherSchema.parse(req.body);
    const updatePublisher = PrismaUpdatePublisher.create();

    res.json(await updatePublisher.execute(data));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
