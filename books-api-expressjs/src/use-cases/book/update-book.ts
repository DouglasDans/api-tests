import { Book } from "@/core/entities/book.entity";
import { NotFoundError } from "@/core/errors/not-found.error";
import IBookRepository from "@/core/repositories/book.repository.interface";

interface BookRequestUpdate {
  id: number;
  isbn?: string;
  title?: string;
  description?: string;
  publicationDate?: string;
  authorId?: number;
  publisherId?: number;
}

export class UpdateBook {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(bookRequest: BookRequestUpdate) {
    const findBook = await this.bookRepository.getById(bookRequest.id);

    const toUpdateBook = new Book({
      id: bookRequest.id,
      isbn: bookRequest.isbn || findBook.getIsbn(),
      title: bookRequest.title || findBook.getTitle(),
      description: bookRequest.description || findBook.getDescription(),
      publicationDate: bookRequest.publicationDate
        ? new Date(bookRequest.publicationDate)
        : findBook.getPublicationDate(),
      authorId: bookRequest.authorId || findBook.getAuthorId(),
      publisherId: bookRequest.publisherId || findBook.getPublisherId(),
    });

    const book = await this.bookRepository.update(toUpdateBook);
    return book;
  }
}
