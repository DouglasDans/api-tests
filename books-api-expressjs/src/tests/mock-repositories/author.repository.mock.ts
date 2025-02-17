import { Author } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";
import { vi } from "vitest";
import { faker } from "@faker-js/faker";

export class MockAuthorRepository implements IAuthorRepository {
  create = vi.fn(async (author: Author): Promise<Author> => {
    return new Author({ ...author, id: 1 });
  });
  getAll = vi.fn(async (): Promise<Author[]> => {
    return makeFakeAuthors(3);
  });
  getById = vi.fn();
  update = vi.fn();
  delete = vi.fn();
}

function makeFakeAuthors(length: number) {
  let arr = [];

  while (arr.length < length) {
    arr.push(
      new Author({
        id: arr.length + 1,
        name: faker.person.fullName(),
        nationality: faker.location.country(),
        birthDate: faker.date.between({
          from: "1970-01-01",
          to: "2005-01-01",
        }),
      })
    );
  }

  return arr;
}
