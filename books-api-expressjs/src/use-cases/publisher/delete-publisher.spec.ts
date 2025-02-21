import { MockPublisherRepository } from "@/tests/mock-repositories/publisher.repository.mock";
import { describe, expect, it } from "vitest";
import { DeletePublisher } from "./delete-publisher";
import { Publisher } from "@/core/entities/publisher.entity";
import { NotFoundError } from "@/core/errors/not-found.error";

describe("DeletePublisher", () => {
  const repository = new MockPublisherRepository();
  const deletePublisher = new DeletePublisher(repository);

  it("deve deletar a editora com sucesso", async () => {
    const deletedPublisher = await deletePublisher.execute(2);

    expect(deletedPublisher).toBeInstanceOf(Publisher);

    expect(deletedPublisher).toHaveProperty("id");
    expect(deletedPublisher).toHaveProperty("name");
    expect(deletedPublisher).toHaveProperty("cnpj");
    expect(deletedPublisher).toHaveProperty("country");
  });

  it("deve retornar um erro de DatabaseDataNotFoundError em um id inexistente", async () => {
    const deletedPublisher = deletePublisher.execute(234);

    await expect(deletedPublisher).rejects.toThrow(NotFoundError);
  });
});
