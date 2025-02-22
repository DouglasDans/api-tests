import { MockBookRepository } from "@/tests/mock-repositories/book.repository.mock";
import { describe, expect, it } from "vitest";
import { GetAllBooks } from "./get-all-book";
import { Book } from "@/core/entities/book.entity";

describe("GetAllBook", () => {
  const repository = new MockBookRepository();
  const getAllBook = new GetAllBooks(repository);
  it("deve retornar todos os livros", async () => {
    const result = await getAllBook.execute();

    expect(repository.getAll).toBeCalledTimes(1);
    expect(result.length).toBeGreaterThanOrEqual(0);
    expect(result[0]).toBeInstanceOf(Book);
  });
});
