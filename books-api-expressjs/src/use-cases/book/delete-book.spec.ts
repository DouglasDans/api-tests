import { MockBookRepository } from "@/tests/mock-repositories/book.repository.mock";
import { describe, expect, it } from "vitest";
import { DeleteBook } from "./delete-book";
import { Book } from "@/core/entities/book.entity";

describe("DeleteBook", () => {
  const repository = new MockBookRepository();
  const deleteBook = new DeleteBook(repository);

  it("deve retornar um livro deletado", async () => {
    const result = await deleteBook.execute(1);

    expect(repository.delete).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(Book);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("isbn");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("publicationDate");
    expect(result).toHaveProperty("authorId");
    expect(result).toHaveProperty("publisherId");
  });

  it("deve retornar um erro de DatabaseDataNotFoundError em um id inexistente", async () => {
    const deletedBook = deleteBook.execute(234);

    await expect(deletedBook).rejects.toThrow("Book not found");
  });
});
