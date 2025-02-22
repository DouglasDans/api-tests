import { Publisher } from "@/core/entities/publisher.entity";
import { MissingAttributesError } from "@/core/errors/missing-attributes-error";
import IPublisherRepository from "@/core/repositories/publisher.repository.interface";

export class CreatePublisher {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute({ name, cnpj, country }: PublisherRequest): Promise<Publisher> {
    if (!name || !cnpj || !country) {
      throw new MissingAttributesError();
    }

    const publisher = new Publisher({
      name,
      cnpj,
      country,
    });

    return this.publisherRepository.create(publisher);
  }
}
