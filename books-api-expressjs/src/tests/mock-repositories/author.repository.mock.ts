import { Author } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";
import { vi } from "vitest";
import makeFakeAuthors from "../utils/make-fake-authors";
import { NotFoundError } from "@/core/errors/not-found.error";

export class MockAuthorRepository implements IAuthorRepository {
  create = vi.fn(async (author: Author): Promise<Author> => {
    return new Author({
      id: 1,
      name: author.getName(),
      birthDate: author.getBirthDate(),
      nationality: author.getNationality(),
    });
  });

  getAll = vi.fn(async (): Promise<Author[]> => {
    return makeFakeAuthors(3);
  });

  getById = vi.fn(async (id: number): Promise<Author> => {
    const authorsList: Array<Author> = makeFakeAuthors(5);
    const author = authorsList.find((author) => author.getId() === id) || null;

    if (!author) {
      throw new NotFoundError("Author not found");
    }

    return author;
  });

  update = vi.fn(async (authorRequest: Author): Promise<Author> => {
    const authorsList: Array<Author> = makeFakeAuthors(5);
    const author =
      authorsList.find((author) => author.getId() === authorRequest.getId()) ||
      null;

    if (!author) {
      throw new NotFoundError("Author not found");
    }

    return new Author({
      id: author.getId(),
      name: authorRequest.getName() || author.getName(),
      nationality: authorRequest.getNationality() || author.getNationality(),
      birthDate:
        new Date(authorRequest.getBirthDate()) || author.getBirthDate(),
    });
  });

  delete = vi.fn(async (id: number) => {
    const authorsList: Array<Author> = makeFakeAuthors(5);
    const author = authorsList.find((author) => author.getId() === id) || null;

    if (!author) {
      throw new NotFoundError("Author not found");
    }

    return author;
  });
}
