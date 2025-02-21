import { Book } from "@/core/entities/book.entity";
import IBookRepository from "@/core/repositories/book.repository.interface";
import { vi } from "vitest";
import makeFakeBooks from "../utils/make-fake-books";
import { NotFoundError } from "@/core/errors/not-found.error";

export class MockBookRepository implements IBookRepository {
  create = vi.fn(async (book: Book): Promise<Book> => {
    return new Book({
      id: 1,
      isbn: book.getIsbn(),
      title: book.getTitle(),
      description: book.getDescription(),
      publicationDate: book.getPublicationDate(),
      publisherId: book.getPublisherId(),
      authorId: book.getAuthorId(),
    });
  });

  getAll = vi.fn(async (): Promise<Book[]> => {
    return makeFakeBooks(3);
  });

  getById = vi.fn(async (id: number): Promise<Book> => {
    const booksList: Array<Book> = makeFakeBooks(5);
    const book = booksList.find((book) => book.getId() === id) || null;

    if (!book) {
      throw new NotFoundError();
    }

    return book;
  });

  update = vi.fn(async (bookRequest: Book): Promise<Book> => {
    const booksList: Array<Book> = makeFakeBooks(5);
    const book =
      booksList.find((book) => book.getId() === bookRequest.getId()) || null;

    if (!book) {
      throw new NotFoundError();
    }

    return new Book({
      id: book.getId(),
      isbn: bookRequest.getIsbn(),
      title: bookRequest.getTitle(),
      description: bookRequest.getDescription(),
      publicationDate: bookRequest.getPublicationDate(),
      publisherId: bookRequest.getPublisherId(),
      authorId: bookRequest.getAuthorId(),
    });
  });

  delete = vi.fn(async (id: number) => {
    const booksList: Array<Book> = makeFakeBooks(5);
    const book = booksList.find((book) => book.getId() === id) || null;

    if (!book) {
      throw new NotFoundError();
    }

    return book;
  });
}
