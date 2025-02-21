import { GetByIdPublisher } from "@/use-cases/publisher/get-by-id-publisher";
import PrismaPublisherRepository from "../../repositories/publisher.repository";

export class PrismaGetByIdPublisher {
  static create(): GetByIdPublisher {
    const repository = new PrismaPublisherRepository();
    const getByIdPublisher = new GetByIdPublisher(repository);

    return getByIdPublisher;
  }
}
