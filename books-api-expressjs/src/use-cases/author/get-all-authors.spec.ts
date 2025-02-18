import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { describe, expect, expectTypeOf, it } from "vitest";
import { GetAllAuthors } from "./get-all-authors";

describe("GetAllAuthors", () => {
  it("deve retornar os autores cadastrados no sistema", async () => {
    const mockAuthorRepository = new MockAuthorRepository();
    const getAllAuthors = new GetAllAuthors(mockAuthorRepository);

    const result = await getAllAuthors.execute();

    expect(mockAuthorRepository.getAll).toBeCalledTimes(1);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
