import { CreatePublisher } from "@/use-cases/publisher/create-publisher";
import PrismaPublisherRepository from "../../repositories/publisher.repository";

export class PrismaCreatePublisher {
  static create(): CreatePublisher {
    const repository = new PrismaPublisherRepository();
    const createPublisher = new CreatePublisher(repository);

    return createPublisher;
  }
}
