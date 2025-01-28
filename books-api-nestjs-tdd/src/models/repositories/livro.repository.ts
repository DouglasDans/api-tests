import { Livro } from '../entities/livro.entity';

export default interface AutorRepository {
  create(): Promise<Livro>;
  getAll(): Promise<Livro[]>;
  getById(id: number): Promise<Livro>;
  update(id: number): Promise<Livro>;
  delete(id: number): Promise<Livro>;
}
