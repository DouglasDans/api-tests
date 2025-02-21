import { MockPublisherRepository } from "@/tests/mock-repositories/publisher.repository.mock";
import { describe, expect, it } from "vitest";
import { UpdatePublisher } from "./update-publisher";
import { faker } from "@faker-js/faker";
import { Publisher } from "@/core/entities/publisher.entity";
import { NotFoundError } from "@/core/errors/not-found.error";

describe("UpdatePublisher", () => {
  const mockPublisherRepository = new MockPublisherRepository();
  const updatePublisher = new UpdatePublisher(mockPublisherRepository);

  it("deve atualizar nome da editora", async () => {
    const publisherRequest = {
      id: 2,
      name: faker.company.name(),
    };

    const updatedPublisher = await updatePublisher.execute(publisherRequest);

    expect(updatedPublisher).toBeInstanceOf(Publisher);
    expect(updatedPublisher).toHaveProperty("id");
    expect(updatedPublisher).toHaveProperty("name");
    expect(updatedPublisher).toHaveProperty("cnpj");
    expect(updatedPublisher).toHaveProperty("country");
    expect(updatedPublisher).toHaveProperty("books");

    expect(updatedPublisher.getId()).toBe(publisherRequest.id);
    expect(updatedPublisher.getName()).toBe(publisherRequest.name);
  });

  it("deve atualizar CNPJ da editora", async () => {
    const publisherRequest = {
      id: 2,
      cnpj: faker.string.numeric(14),
    };

    const updatedPublisher = await updatePublisher.execute(publisherRequest);

    expect(updatedPublisher).toBeInstanceOf(Publisher);
    expect(updatedPublisher).toHaveProperty("id");
    expect(updatedPublisher).toHaveProperty("name");
    expect(updatedPublisher).toHaveProperty("cnpj");
    expect(updatedPublisher).toHaveProperty("country");
    expect(updatedPublisher).toHaveProperty("books");

    expect(updatedPublisher.getId()).toBe(publisherRequest.id);
    expect(updatedPublisher.getCnpj()).toBe(publisherRequest.cnpj);
  });

  it("deve atualizar país da editora", async () => {
    const publisherRequest = {
      id: 2,
      country: faker.location.country(),
    };

    const updatedPublisher = await updatePublisher.execute(publisherRequest);

    expect(updatedPublisher).toBeInstanceOf(Publisher);
    expect(updatedPublisher).toHaveProperty("id");
    expect(updatedPublisher).toHaveProperty("name");
    expect(updatedPublisher).toHaveProperty("cnpj");
    expect(updatedPublisher).toHaveProperty("country");
    expect(updatedPublisher).toHaveProperty("books");

    expect(updatedPublisher.getId()).toBe(publisherRequest.id);
    expect(updatedPublisher.getCountry()).toBe(publisherRequest.country);
  });

  it("deve retornar um erro de NotFoundError em um id inexistente", async () => {
    const publisherRequest = {
      id: 353,
      name: faker.company.name(),
      cnpj: faker.string.numeric(14),
      country: faker.location.country(),
    };

    const publisher = updatePublisher.execute(publisherRequest);

    expect(publisher).rejects.toThrow(NotFoundError);
    expect(publisher).rejects.toThrowError("Publisher not found");
  });
});
