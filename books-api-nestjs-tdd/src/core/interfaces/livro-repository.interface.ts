import { Livro } from '../entities/livro.entity';

export default abstract class LivroRepository {
  abstract create(): Promise<Livro>;
  abstract getAll(): Promise<Livro[]>;
  abstract getById(id: number): Promise<Livro>;
  abstract update(id: number): Promise<Livro>;
  abstract delete(id: number): Promise<Livro>;
}
