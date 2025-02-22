import { MockBookRepository } from "@/tests/mock-repositories/book.repository.mock";
import { describe, expect, it } from "vitest";
import { UpdateBook } from "./update-book";
import { faker } from "@faker-js/faker";
import { Book } from "@/core/entities/book.entity";
import { NotFoundError } from "@/core/errors/not-found.error";

describe("UpdateBook", () => {
  const repository = new MockBookRepository();
  const updateBook = new UpdateBook(repository);

  it("deve atualizar título do livro", async () => {
    const bookRequest = {
      id: 1,
      title: faker.commerce.productName(),
    };

    const updatedBook = await updateBook.execute(bookRequest);

    expect(updatedBook).toBeInstanceOf(Book);
    expect(updatedBook.getId()).toBe(bookRequest.id);
    expect(updatedBook.getTitle()).toBe(bookRequest.title);
  });

  it("deve atualizar descrição do livro", async () => {
    const bookRequest = {
      id: 1,
      description: faker.commerce.productDescription(),
    };

    const updatedBook = await updateBook.execute(bookRequest);

    expect(updatedBook).toBeInstanceOf(Book);
    expect(updatedBook.getId()).toBe(bookRequest.id);
    expect(updatedBook.getDescription()).toBe(bookRequest.description);
  });

  it("deve atualizar ISBN do livro", async () => {
    const bookRequest = {
      id: 1,
      isbn: faker.commerce.isbn(),
    };

    const updatedBook = await updateBook.execute(bookRequest);

    expect(updatedBook).toBeInstanceOf(Book);
    expect(updatedBook.getId()).toBe(bookRequest.id);
    expect(updatedBook.getIsbn()).toBe(bookRequest.isbn);
  });

  it("deve atualizar data de publicação do livro", async () => {
    const bookRequest = {
      id: 1,
      publicationDate: faker.date
        .between({
          from: "1900-01-01",
          to: "2023-12-31",
        })
        .toISOString(),
    };

    const updatedBook = await updateBook.execute(bookRequest);

    expect(updatedBook).toBeInstanceOf(Book);
    expect(updatedBook.getId()).toBe(bookRequest.id);
    expect(updatedBook.getPublicationDate().toISOString()).toBe(
      bookRequest.publicationDate
    );
  });

  it("deve retornar erro ao tentar atualizar livro inexistente", async () => {
    const bookRequest = {
      id: 999,
      title: faker.commerce.productName(),
    };

    await expect(updateBook.execute(bookRequest)).rejects.toThrow(
      NotFoundError
    );
  });

  it("deve verificar se o livro atualizado possui todas as propriedades", async () => {
    const bookRequest = {
      id: 1,
      title: faker.commerce.productName(),
    };

    const updatedBook = await updateBook.execute(bookRequest);

    expect(updatedBook).toHaveProperty("id");
    expect(updatedBook).toHaveProperty("isbn");
    expect(updatedBook).toHaveProperty("title");
    expect(updatedBook).toHaveProperty("description");
    expect(updatedBook).toHaveProperty("publicationDate");
    expect(updatedBook).toHaveProperty("authorId");
    expect(updatedBook).toHaveProperty("publisherId");
  });
});
