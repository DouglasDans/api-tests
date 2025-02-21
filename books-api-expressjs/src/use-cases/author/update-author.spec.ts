import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { describe, expect, it } from "vitest";
import { UpdateAuthor } from "./update-author";
import { faker } from "@faker-js/faker";
import { Author } from "@/core/entities/author.entity";
import { NotFoundError } from "@/core/errors/not-found.error";

describe("UpdateAuthor", () => {
  const mockAuthorRepository = new MockAuthorRepository();
  const updateAuthor = new UpdateAuthor(mockAuthorRepository);

  it("deve atualizar nome do author", async () => {
    const authorRequest = {
      id: 2,
      name: faker.person.fullName(),
    };

    const updatedAuthor = await updateAuthor.execute(authorRequest);

    expect(updatedAuthor).toBeInstanceOf(Author);

    expect(updatedAuthor).toHaveProperty("id");
    expect(updatedAuthor).toHaveProperty("name");
    expect(updatedAuthor).toHaveProperty("nationality");
    expect(updatedAuthor).toHaveProperty("birthDate");
    expect(updatedAuthor).toHaveProperty("books");

    expect(updatedAuthor.getId()).toBe(authorRequest.id);
    expect(updatedAuthor.getName()).toBe(authorRequest.name);
  });

  it("deve atualizar nacionalidade do author", async () => {
    const authorRequest = {
      id: 2,
      nationality: faker.location.country(),
    };

    const updatedAuthor = await updateAuthor.execute(authorRequest);

    expect(updatedAuthor).toBeInstanceOf(Author);

    expect(updatedAuthor).toHaveProperty("id");
    expect(updatedAuthor).toHaveProperty("name");
    expect(updatedAuthor).toHaveProperty("nationality");
    expect(updatedAuthor).toHaveProperty("birthDate");
    expect(updatedAuthor).toHaveProperty("books");

    expect(updatedAuthor.getId()).toBe(authorRequest.id);
    expect(updatedAuthor.getNationality()).toBe(authorRequest.nationality);
  });

  it("deve atualizar data de nascimento do author", async () => {
    const authorRequest = {
      id: 3,
      birthDate: faker.date
        .between({
          from: "1970-01-01",
          to: "2005-01-01",
        })
        .toISOString(),
    };

    const updatedAuthor = await updateAuthor.execute(authorRequest);

    expect(updatedAuthor).toBeInstanceOf(Author);

    expect(updatedAuthor).toHaveProperty("id");
    expect(updatedAuthor).toHaveProperty("name");
    expect(updatedAuthor).toHaveProperty("nationality");
    expect(updatedAuthor).toHaveProperty("birthDate");
    expect(updatedAuthor).toHaveProperty("books");

    expect(updatedAuthor.getId()).toBe(authorRequest.id);
    expect(updatedAuthor.getBirthDate().toISOString()).toBe(
      authorRequest.birthDate
    );
  });

  it("deve retornar um erro de DatabaseDataNotFoundError em um id inexistente", async () => {
    const authorRequest = {
      id: 353,
      name: faker.person.fullName(),
      nationality: faker.location.country(),
      birthDate: faker.date
        .between({
          from: "1970-01-01",
          to: "2005-01-01",
        })
        .toISOString(),
    };

    await expect(updateAuthor.execute(authorRequest)).rejects.toThrow(
      NotFoundError
    );
  });
});
