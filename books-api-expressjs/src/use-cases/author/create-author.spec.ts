import { describe, expect, it, vi } from "vitest";
import { faker } from "@faker-js/faker";
import { CreateAuthor } from "./create-author";
import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { Author } from "@/core/entities/author.entity";
import { MissingAttributesError } from "@/core/errors/missing-attributes-error";

describe("CreateAuthor", () => {
  const mockAuthorRepository = new MockAuthorRepository();
  const createAuthor = new CreateAuthor(mockAuthorRepository);

  it("deve converter a string de data para Date e salvar no repositório", async () => {
    const fakerDate = faker.date.between({
      from: "1970-01-01",
      to: "2005-01-01",
    });

    const requestAuthor = {
      name: faker.person.fullName(),
      nationality: faker.location.country(),
      birthDate: fakerDate.toISOString(),
    };

    const expectedAuthor = new Author({
      ...requestAuthor,
      id: 1,
      birthDate: fakerDate,
    });

    const result = await createAuthor.execute(requestAuthor);

    expect(mockAuthorRepository.create).toHaveBeenCalledTimes(1);
    expect(mockAuthorRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({
        name: requestAuthor.name,
        nationality: requestAuthor.nationality,
        birthDate: fakerDate,
      })
    );
    expect(result).toEqual(expectedAuthor);
  });

  it("deve propagar erro de atributos em falta", async () => {
    const error = new MissingAttributesError();

    await expect(
      createAuthor.execute({
        name: "",
        nationality: "",
        birthDate: "",
      })
    ).rejects.toThrow(error);
  });
});
