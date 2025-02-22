import { CreateBook } from "@/use-cases/book/create-book";
import PrismaBookRepository from "../../repositories/book.repository";
import PrismaAuthorRepository from "../../repositories/author.repository";
import PrismaPublisherRepository from "../../repositories/publisher.repository";
import { CreateAuthor } from "@/use-cases/author/create-author";
import { CreatePublisher } from "@/use-cases/publisher/create-publisher";
import { GetAuthorById } from "../../../../../use-cases/author/get-by-id-author";
import { GetByIdPublisher } from "../../../../../use-cases/publisher/get-by-id-publisher";

export class PrismaCreateBook {
  static create(): CreateBook {
    const bookRepository = new PrismaBookRepository();
    const authorRepository = new PrismaAuthorRepository();
    const publisherRepository = new PrismaPublisherRepository();

    const createAuthor = new CreateAuthor(authorRepository);
    const getAuthorById = new GetAuthorById(authorRepository);
    const getByIdPublisher = new GetByIdPublisher(publisherRepository);
    const createPublisher = new CreatePublisher(publisherRepository);
    const createBook = new CreateBook(
      bookRepository,
      createAuthor,
      getAuthorById,
      getByIdPublisher,
      createPublisher
    );

    return createBook;
  }
}
