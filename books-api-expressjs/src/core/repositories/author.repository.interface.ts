import { Author } from "../entities/author.entity";

export default interface IAuthorRepository {
  create(author: Omit<Author, "id">): Promise<Author>;
  getAll(): Promise<Author[]>;
  getById(id: number): Promise<Author | null>;
  update(author: Author): Promise<Author>;
  delete(id: number): Promise<Author>;
}
