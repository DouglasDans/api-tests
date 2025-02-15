import { Book } from "../entities/book.entity";

export default interface ILivroRepository {
  create(book: Omit<Book, "id">): Promise<Book>;
  getAll(): Promise<Book[]>;
  getById(id: number): Promise<Book>;
  update(book: Book): Promise<Book>;
  delete(id: number): Promise<Book>;
}
