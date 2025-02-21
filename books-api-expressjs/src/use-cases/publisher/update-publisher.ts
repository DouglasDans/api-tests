import { Publisher } from "@/core/entities/publisher.entity";
import IPublisherRepository from "@/core/repositories/publisher.repository.interface";

interface IPublisherRequest {
  id: number;
  name?: string;
  cnpj?: string;
  country?: string;
}

export class UpdatePublisher {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherRequest: IPublisherRequest): Promise<Publisher> {
    const findPublisher = await this.publisherRepository.getById(
      publisherRequest.id
    );

    const toUpdatePublisher = new Publisher({
      id: findPublisher.getId(),
      name: publisherRequest.name || findPublisher.getName(),
      cnpj: publisherRequest.cnpj || findPublisher.getCnpj(),
      country: publisherRequest.country || findPublisher.getCountry(),
    });

    const publisherUpdated = await this.publisherRepository.update(
      toUpdatePublisher
    );

    return publisherUpdated;
  }
}
