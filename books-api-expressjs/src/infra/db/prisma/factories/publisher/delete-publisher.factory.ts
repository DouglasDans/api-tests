import { DeletePublisher } from "@/use-cases/publisher/delete-publisher";
import PrismaPublisherRepository from "../../repositories/publisher.repository";

export class PrismaDeletePublisher {
  static create(): DeletePublisher {
    const repository = new PrismaPublisherRepository();
    const deletePublisher = new DeletePublisher(repository);

    return deletePublisher;
  }
}
