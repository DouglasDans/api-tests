import { Author } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";
import { vi } from "vitest";
import makeFakeAuthors from "../utils/make-fake-authors";
import { DatabaseDataNotFoundError } from "@/core/errors/database-not-found.error";

export class MockAuthorRepository implements IAuthorRepository {
  create = vi.fn(async (author: Author): Promise<Author> => {
    return new Author({ ...author, id: 1 });
  });
  getAll = vi.fn(async (): Promise<Author[]> => {
    return makeFakeAuthors(3);
  });
  getById = vi.fn(async (id: number): Promise<Author | null> => {
    const authorsList: Array<Author> = makeFakeAuthors(5);
    return authorsList.find((author) => author.id === id) || null;
  });
  update = vi.fn(async (authorRequest: Author): Promise<Author> => {
    const authorsList: Array<Author> = makeFakeAuthors(5);
    const author =
      authorsList.find((author) => author.id === authorRequest.id) || null;

    if (!author) {
      throw new DatabaseDataNotFoundError();
    }

    return new Author({
      id: author.id,
      name: authorRequest.name || author.name,
      nationality: authorRequest.nationality || author.nationality,
      birthDate: new Date(authorRequest.birthDate) || author.birthDate,
    });
  });
  delete = vi.fn(async (id: number) => {
    const authorsList: Array<Author> = makeFakeAuthors(5);
    const author = authorsList.find((author) => author.id === id) || null;

    if (!author) {
      throw new DatabaseDataNotFoundError();
    }

    return author;
  });
}
