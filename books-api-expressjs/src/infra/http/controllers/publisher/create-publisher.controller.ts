import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { PrismaCreatePublisher } from "@/infra/db/prisma/factories/publisher/create-publisher.factory";

const createPublisherSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  cnpj: z.string().min(11, "CNPJ é obrigatório"),
  country: z.string().min(1, "Country é obrigatório"),
});

export default async function createPublisherRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const requestBody = createPublisherSchema.parse(req.body);

    const createPublisher = PrismaCreatePublisher.create();
    const publisher = await createPublisher.execute(requestBody);

    res.status(201).json(publisher);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
}
