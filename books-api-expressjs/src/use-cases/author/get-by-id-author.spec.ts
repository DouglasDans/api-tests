import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { describe, expect, it } from "vitest";
import { GetAuthorById } from "./get-by-id-author";
import { Author } from "@/core/entities/author.entity";

describe("GetAuthorById", () => {
  const mockAuthorRepository = new MockAuthorRepository();
  const getAuthorById = new GetAuthorById(mockAuthorRepository);

  it("deve retornar um objeto de Author de acordo com o ID", async () => {
    const author = await getAuthorById.execute(1);

    expect(author).toBeInstanceOf(Author);

    expect(author).toHaveProperty("id");
    expect(author).toHaveProperty("name");
    expect(author).toHaveProperty("nationality");
    expect(author).toHaveProperty("birthDate");
    expect(author).toHaveProperty("books");
  });

  it("deve retornar nulo de acordo com o ID", async () => {
    const author = await getAuthorById.execute(7);
    expect(author).toBeNull();
  });

  it("deve retornar nulo para IDs negativos", async () => {
    const author = await getAuthorById.execute(-24);
    expect(author).toBeNull();
  });
});
