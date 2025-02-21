import { Publisher } from "@/core/entities/publisher.entity";
import IPublisherRepository from "@/core/repositories/publisher.repository.interface";

export class DeletePublisher {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(id: number): Promise<Publisher> {
    return await this.publisherRepository.delete(id);
  }
}
