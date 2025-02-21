import { UpdatePublisher } from "@/use-cases/publisher/update-publisher";
import PrismaPublisherRepository from "../../repositories/publisher.repository";

export class PrismaUpdatePublisher {
  static create(): UpdatePublisher {
    const repository = new PrismaPublisherRepository();
    const updatePublisher = new UpdatePublisher(repository);

    return updatePublisher;
  }
}
