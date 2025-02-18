import { Author } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";
import { vi } from "vitest";
import makeFakeAuthors from "../utils/make-fake-authors";

export class MockAuthorRepository implements IAuthorRepository {
  create = vi.fn(async (author: Author): Promise<Author> => {
    return new Author({ ...author, id: 1 });
  });
  getAll = vi.fn(async (): Promise<Author[]> => {
    return makeFakeAuthors(3);
  });
  getById = vi.fn(async (id: number): Promise<Author | null> => {
    const authors: Array<Author> = makeFakeAuthors(5);
    return authors.find((author) => author.id === id) || null;
  });
  update = vi.fn();
  delete = vi.fn();
}
