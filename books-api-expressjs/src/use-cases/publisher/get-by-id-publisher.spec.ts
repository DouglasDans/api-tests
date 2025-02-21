import { MockPublisherRepository } from "@/tests/mock-repositories/publisher.repository.mock";
import { describe, expect, it } from "vitest";
import { GetByIdPublisher } from "./get-by-id-publisher";
import { NotFoundError } from "@/core/errors/not-found.error";

describe("GetPublisherById", () => {
  const mockPublisherRepository = new MockPublisherRepository();
  const getPublisherById = new GetByIdPublisher(mockPublisherRepository);

  it("deve retornar um objeto de Publisher de acordo com o ID", async () => {
    const publisher = await getPublisherById.execute(1);

    expect(publisher).toBeInstanceOf(Object);
    expect(publisher).toHaveProperty("id");
    expect(publisher).toHaveProperty("name");
    expect(publisher).toHaveProperty("cnpj");
    expect(publisher).toHaveProperty("country");
  });

  it("deve retornar erro de acordo com o ID inexistente", async () => {
    const publisher = getPublisherById.execute(7);
    expect(publisher).rejects.toThrow(NotFoundError);
    expect(publisher).rejects.toThrowError("Publisher not found");
  });

  it("deve retornar erro para IDs negativos", async () => {
    const publisher = getPublisherById.execute(-24);
    expect(publisher).rejects.toThrow(NotFoundError);
    expect(publisher).rejects.toThrowError("Publisher not found");
  });
});
