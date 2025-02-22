import { describe, expect, it } from "vitest";
import { faker } from "@faker-js/faker";
import { MockBookRepository } from "@/tests/mock-repositories/book.repository.mock";
import { CreateBook } from "./create-book";
import { CreateAuthor } from "../author/create-author";
import { CreatePublisher } from "../publisher/create-publisher";
import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { MockPublisherRepository } from "@/tests/mock-repositories/publisher.repository.mock";
import { Book } from "@/core/entities/book.entity";
import { GetAuthorById } from "../author/get-by-id-author";
import { GetByIdPublisher } from "../publisher/get-by-id-publisher";

describe("CreateBook", () => {
  const mockBookRepository = new MockBookRepository();
  const mockAuthorRepository = new MockAuthorRepository();
  const mockPublisherRepository = new MockPublisherRepository();

  const createAuthor = new CreateAuthor(mockAuthorRepository);
  const createPublisher = new CreatePublisher(mockPublisherRepository);
  const getAuthorById = new GetAuthorById(mockAuthorRepository);
  const getByIdPublisher = new GetByIdPublisher(mockPublisherRepository);
  const createBook = new CreateBook(
    mockBookRepository,
    createAuthor,
    getAuthorById,
    getByIdPublisher,
    createPublisher
  );

  const fakerDate = faker.date.between({
    from: "1970-01-01",
    to: "2005-01-01",
  });

  const requestAuthor = {
    name: faker.person.fullName(),
    nationality: faker.location.country(),
    birthDate: fakerDate.toISOString(),
  };

  const requestPublisher = {
    name: faker.company.name(),
    cnpj: faker.string.numeric(14),
    country: faker.location.country(),
  };

  it("deve criar um livro corretamente", async () => {
    const requestBook = {
      isbn: faker.helpers.replaceSymbols("#############"),
      title: faker.lorem.words(3),
      description: faker.lorem.paragraph(),
      publicationDate: faker.date.past().toISOString(),
      publisher: requestPublisher,
      author: requestAuthor,
    };

    const result = await createBook.execute(requestBook);

    expect(mockBookRepository.create).toHaveBeenCalledTimes(1);
    expect(mockAuthorRepository.create).toHaveBeenCalledTimes(1);
    expect(mockPublisherRepository.create).toHaveBeenCalledTimes(1);

    expect(result).toBeInstanceOf(Book);
    expect(result).toHaveProperty("id");
    expect(result.getIsbn()).toBe(requestBook.isbn);
    expect(result.getTitle()).toBe(requestBook.title);
    expect(result.getDescription()).toBe(requestBook.description);
    expect(result.getPublicationDate()).toBeInstanceOf(Date);
    expect(result).toHaveProperty("authorId");
    expect(result).toHaveProperty("publisherId");
  });

  it("deve lançar erro se não houver author", async () => {
    const requestBook = {
      isbn: faker.helpers.replaceSymbols("#############"),
      title: faker.lorem.words(3),
      description: faker.lorem.paragraph(),
      publicationDate: faker.date.past().toISOString(),
      publisher: {
        name: "",
        cnpj: "",
        country: "",
      },
      author: requestAuthor,
    };

    const result = createBook.execute(requestBook);

    await expect(result).rejects.toThrowError(
      "Publisher ID or Publisher data must be provided"
    );
  });

  it("deve lançar erro se não houver Author", async () => {
    const requestBook = {
      isbn: faker.helpers.replaceSymbols("#############"),
      title: faker.lorem.words(3),
      description: faker.lorem.paragraph(),
      publicationDate: faker.date.past().toISOString(),
      publisher: requestPublisher,
      author: { name: "", nationality: "", birthDate: "" },
    };

    const result = createBook.execute(requestBook);

    await expect(result).rejects.toThrowError(
      "Author ID or Author data must be provided"
    );
  });
});
