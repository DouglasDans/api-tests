import { MockBookRepository } from "@/tests/mock-repositories/book.repository.mock";
import { describe, expect, it } from "vitest";
import { GetByIdBooks } from "./get-by-id-book";
import { Book } from "@/core/entities/book.entity";

describe("GetByIdBook", () => {
  const repository = new MockBookRepository();
  const getByIdBook = new GetByIdBooks(repository);
  it("deve retornar um livro pelo id", async () => {
    const result = await getByIdBook.execute(1);

    expect(result).toBeInstanceOf(Book);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("isbn");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("publicationDate");
    expect(result).toHaveProperty("authorId");
    expect(result).toHaveProperty("publisherId");

    expect(repository.getById).toBeCalledTimes(1);
  });
});
