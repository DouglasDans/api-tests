import { Book } from "@/core/entities/book.entity";
import { BadRequestError } from "@/core/errors/bad-request-error";
import IBookRepository from "@/core/repositories/book.repository.interface";
import { CreateAuthor } from "../author/create-author";
import { CreatePublisher } from "../publisher/create-publisher";

export class CreateBook {
  constructor(
    private readonly bookRepository: IBookRepository,
    private readonly createAuthor: CreateAuthor,
    private readonly createPublisher: CreatePublisher
  ) {}

  async execute(bookRequest: BookRequest) {
    const author = await this.createAuthor.execute(bookRequest.author);
    const publisher = await this.createPublisher.execute(bookRequest.publisher);

    const formattedBook = new Book({
      isbn: bookRequest.isbn,
      title: bookRequest.title,
      description: bookRequest.description,
      publicationDate: bookRequest.publicationDate,
      authorId: author.getId() as number,
      publisherId: publisher.getId() as number,
    });

    const book = await this.bookRepository.create(formattedBook);
    return book;
  }
}
