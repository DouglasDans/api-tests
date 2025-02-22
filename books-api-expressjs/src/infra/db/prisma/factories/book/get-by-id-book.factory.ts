import { GetByIdBooks } from "@/use-cases/book/get-by-id-book";
import PrismaBookRepository from "../../repositories/book.repository";

export class PrismaGetByIdBook {
  static create() {
    const bookRepository = new PrismaBookRepository();
    const getByIdBook = new GetByIdBooks(bookRepository);
    return getByIdBook;
  }
}
