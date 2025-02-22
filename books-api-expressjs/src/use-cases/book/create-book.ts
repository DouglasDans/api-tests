import { Book } from "@/core/entities/book.entity";
import { BadRequestError } from "@/core/errors/bad-request-error";
import IBookRepository from "@/core/repositories/book.repository.interface";
import { CreateAuthor } from "../author/create-author";
import { CreatePublisher } from "../publisher/create-publisher";
import { GetAuthorById } from "../author/get-by-id-author";
import { GetByIdPublisher } from "../publisher/get-by-id-publisher";
import { Author } from "@/core/entities/author.entity";
import { Publisher } from "@/core/entities/publisher.entity";

export class CreateBook {
  constructor(
    private readonly bookRepository: IBookRepository,
    private readonly createAuthor: CreateAuthor,
    private readonly getByIdAuthor: GetAuthorById,
    private readonly getByIdPublisher: GetByIdPublisher,
    private readonly createPublisher: CreatePublisher
  ) {}

  async execute(bookRequest: BookRequest) {
    let author: Author | null = null;
    let publisher: Publisher | null = null;

    if (bookRequest.publisherId) {
      publisher = await this.getByIdPublisher
        .execute(bookRequest.publisherId)
        .catch(() => null);
    }
    if (bookRequest.authorId) {
      author = await this.getByIdAuthor
        .execute(bookRequest.authorId)
        .catch(() => null);
    }
    if (bookRequest.author) {
      author = await this.createAuthor
        .execute(bookRequest.author)
        .catch(() => null);
    }
    if (bookRequest.publisher) {
      publisher = await this.createPublisher
        .execute(bookRequest.publisher)
        .catch(() => null);
    }

    if (!author) {
      throw new BadRequestError("Author ID or Author data must be provided");
    }
    if (!publisher) {
      throw new BadRequestError(
        "Publisher ID or Publisher data must be provided"
      );
    }

    const formattedBook = new Book({
      isbn: bookRequest.isbn,
      title: bookRequest.title,
      description: bookRequest.description,
      publicationDate: new Date(bookRequest.publicationDate),
      authorId: author.getId() as number,
      publisherId: publisher.getId() as number,
    });

    const book = await this.bookRepository.create(formattedBook);
    return book;
  }
}
