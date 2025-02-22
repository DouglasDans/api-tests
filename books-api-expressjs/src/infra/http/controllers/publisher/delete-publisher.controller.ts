import { PrismaDeletePublisher } from "@/infra/db/prisma/factories/publisher/delete-publisher.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const deletePublisherSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
});

export default async function deletePublisherRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = deletePublisherSchema.parse(req.params);
    const deletePublisher = PrismaDeletePublisher.create();

    const deletedPublisher = await deletePublisher.execute(parseInt(id));
    res.json(deletedPublisher);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
