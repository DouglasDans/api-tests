import { GetAllPublisher } from "@/use-cases/publisher/get-all-publisher";
import PrismaPublisherRepository from "../../repositories/publisher.repository";

export class PrismaGetAllPublisher {
  static create(): GetAllPublisher {
    const repository = new PrismaPublisherRepository();
    const getAllPublisher = new GetAllPublisher(repository);

    return getAllPublisher;
  }
}
