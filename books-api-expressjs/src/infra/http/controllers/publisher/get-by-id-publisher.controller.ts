import { PrismaGetByIdPublisher } from "@/infra/db/prisma/factories/publisher/get-by-id-publisher.factory";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const getByIdPublisherSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
});

export default async function getByIdPublisherRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = getByIdPublisherSchema.parse(req.params);
    const getByIdPublisher = PrismaGetByIdPublisher.create();

    const publisher = await getByIdPublisher.execute(parseInt(id));
    res.json(publisher);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
