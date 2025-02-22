import { PrismaGetAllPublisher } from "@/infra/db/prisma/factories/publisher/get-all-publisher.factory";
import { NextFunction, Request, Response } from "express";

export default async function getAllPublishersRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const getAllPublishers = PrismaGetAllPublisher.create();
    const publishers = await getAllPublishers.execute();
    res.json(publishers);
  } catch (error) {
    next(error);
  }
}
