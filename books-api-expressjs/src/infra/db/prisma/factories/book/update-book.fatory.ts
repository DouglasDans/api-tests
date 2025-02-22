import { UpdateBook } from "@/use-cases/book/update-book";
import PrismaBookRepository from "../../repositories/book.repository";

export class PrismaUpdateBook {
  static create() {
    const repository = new PrismaBookRepository();
    const service = new UpdateBook(repository);

    return service;
  }
}
