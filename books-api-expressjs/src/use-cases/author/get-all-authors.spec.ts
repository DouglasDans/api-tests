import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { describe, expect, expectTypeOf, it } from "vitest";
import { GetAllAuthors } from "./get-all-authors";
import { Author } from "@/core/entities/author.entity";

describe("GetAllAuthors", () => {
  const mockAuthorRepository = new MockAuthorRepository();
  const getAllAuthors = new GetAllAuthors(mockAuthorRepository);
  it("deve retornar os autores cadastrados no sistema", async () => {
    const result = await getAllAuthors.execute();

    expect(mockAuthorRepository.getAll).toBeCalledTimes(1);
    expect(result.length).toBeGreaterThanOrEqual(0);
    expect(result[0]).toBeInstanceOf(Author);
  });
});
