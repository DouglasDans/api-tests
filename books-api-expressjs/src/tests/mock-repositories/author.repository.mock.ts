import { Author } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";
import { vi } from "vitest";

export class MockAuthorRepository implements IAuthorRepository {
  create = vi.fn(async (author: Author): Promise<Author> => {
    return new Author({ ...author, id: 1 });
  });
  getAll = vi.fn();
  getById = vi.fn();
  update = vi.fn();
  delete = vi.fn();
}
