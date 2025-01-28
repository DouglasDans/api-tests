import { Autor } from '../entities/autor.entity';

export default interface AutorRepository {
  create(): Promise<Autor>;
  getAll(): Promise<Autor[]>;
  getById(id: number): Promise<Autor>;
  update(id: number): Promise<Autor>;
  delete(id: number): Promise<Autor>;
}
