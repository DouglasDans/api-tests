import { GetAllBooks } from "@/use-cases/book/get-all-book";
import PrismaBookRepository from "../../repositories/book.repository";

export class PrismaGetAllBooks {
  static create() {
    const bookRepository = new PrismaBookRepository();
    const getAllBooks = new GetAllBooks(bookRepository);
    return getAllBooks;
  }
}
