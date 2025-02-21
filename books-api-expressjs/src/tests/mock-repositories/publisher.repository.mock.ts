import { Publisher } from "@/core/entities/publisher.entity";
import IPublisherRepository from "@/core/repositories/publisher.repository.interface";
import { vi } from "vitest";
import makeFakePublishers from "../utils/make-fake-publishers";
import { NotFoundError } from "@/core/errors/not-found.error";

export class MockPublisherRepository implements IPublisherRepository {
  create = vi.fn(async (publisher: Publisher): Promise<Publisher> => {
    return new Publisher({
      id: 1,
      name: publisher.getName(),
      cnpj: publisher.getCnpj(),
      country: publisher.getCountry(),
    });
  });

  getAll = vi.fn(async (): Promise<Publisher[]> => {
    return makeFakePublishers(3);
  });

  getById = vi.fn(async (id: number): Promise<Publisher> => {
    const publishersList: Array<Publisher> = makeFakePublishers(5);
    const publisher =
      publishersList.find((publisher) => publisher.getId() === id) || null;

    if (!publisher) {
      throw new NotFoundError();
    }

    return publisher;
  });

  update = vi.fn(async (publisherRequest: Publisher): Promise<Publisher> => {
    const publishersList: Array<Publisher> = makeFakePublishers(5);
    const publisher =
      publishersList.find(
        (publisher) => publisher.getId() === publisherRequest.getId()
      ) || null;

    if (!publisher) {
      throw new NotFoundError();
    }

    return new Publisher({
      id: publisher.getId(),
      name: publisherRequest.getName(),
      cnpj: publisherRequest.getCnpj(),
      country: publisherRequest.getCountry(),
    });
  });

  delete = vi.fn(async (id: number) => {
    const publishersList: Array<Publisher> = makeFakePublishers(5);
    const publisher =
      publishersList.find((publisher) => publisher.getId() === id) || null;

    if (!publisher) {
      throw new NotFoundError();
    }

    return publisher;
  });
}
