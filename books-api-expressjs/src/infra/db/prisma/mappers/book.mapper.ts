import { Book } from "@/core/entities/book.entity";
import {
  Prisma,
  Book as PrismaBook,
} from "../../../../../node_modules/.prisma/client/index";

export class PrismaBookMapper {
  static toPrisma(book: Omit<Book, "id">): Prisma.BookCreateInput {
    const prismaBook: Prisma.BookCreateInput = {
      author: { connect: { id: book.getAuthorId() } },
      publisher: { connect: { id: book.getPublisherId() } },
      title: book.getTitle(),
      description: book.getDescription(),
      isbn: book.getIsbn(),
      publicationDate: book.getPublicationDate(),
    };
    return prismaBook;
  }

  static toUpdatePrisma(book: Omit<Book, "id">): Prisma.BookUpdateInput {
    const prismaBook: Prisma.BookUpdateInput = {
      title: book.getTitle(),
      description: book.getDescription(),
      isbn: book.getIsbn(),
      publicationDate: book.getPublicationDate(),
    };
    return prismaBook;
  }

  static toDomain(prismaAuthor: PrismaBook): Book {
    const book: Book = new Book({
      id: prismaAuthor.id,
      title: prismaAuthor.title,
      description: prismaAuthor.description,
      isbn: prismaAuthor.isbn,
      publicationDate: prismaAuthor.publicationDate,
      publisherId: prismaAuthor.publisherId,
      authorId: prismaAuthor.authorId,
    });
    return book;
  }
}
