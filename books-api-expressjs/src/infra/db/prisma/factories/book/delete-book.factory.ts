import { DeleteBook } from "@/use-cases/book/delete-book";
import PrismaBookRepository from "../../repositories/book.repository";

export class PrismaDeleteBook {
  static create() {
    const bookRepository = new PrismaBookRepository();
    const deleteBook = new DeleteBook(bookRepository);
    return deleteBook;
  }
}
