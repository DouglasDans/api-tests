import { Publisher } from "@/core/entities/publisher.entity";
import { MockPublisherRepository } from "@/tests/mock-repositories/publisher.repository.mock";
import { faker } from "@faker-js/faker";
import { describe, it, expect } from "vitest";
import { CreatePublisher } from "./create-publisher";
import { MissingAttributesError } from "@/core/errors/missing-attributes-error";

describe("CreatePublisher", () => {
  const mockPublisherRepository = new MockPublisherRepository();
  const createPublisher = new CreatePublisher(mockPublisherRepository);

  it("salvar dados no repositório de forma correta", async () => {
    const requestPublisher = {
      name: faker.company.name(),
      cnpj: faker.string.numeric(14),
      country: faker.location.country(),
    };

    const expectedPublisher = new Publisher({
      ...requestPublisher,
      id: 1,
    });

    const result = await createPublisher.execute(requestPublisher);

    expect(mockPublisherRepository.create).toHaveBeenCalledTimes(1);
    expect(mockPublisherRepository.create).toHaveBeenCalledWith({
      ...requestPublisher,
    });
    expect(result).toEqual(expectedPublisher);
  });

  it("deve propagar erro de atributos em falta", async () => {
    const error = new MissingAttributesError();
    const requestPublisher = {
      name: "",
      cnpj: "",
      country: "",
    };

    await expect(createPublisher.execute(requestPublisher)).rejects.toThrow(
      error
    );
  });
});
