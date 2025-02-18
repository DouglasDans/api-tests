import { Book } from "../entities/book.entity";

export default interface IBookRepository {
  create(book: Omit<Book, "id">): Promise<Book>;
  getAll(): Promise<Book[]>;
  getById(id: number): Promise<Book | null>;
  update(book: Book): Promise<Book>;
  delete(id: number): Promise<Book>;
}
