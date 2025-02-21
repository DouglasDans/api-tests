import { Publisher } from "@/core/entities/publisher.entity";
import IPublisherRepository from "@/core/repositories/publisher.repository.interface";

export class GetAllPublisher {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(): Promise<Publisher[]> {
    return await this.publisherRepository.getAll();
  }
}
