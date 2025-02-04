import { Editora } from '../entities/editora.entity';

export default interface EditoraRepository {
  create(): Promise<Editora>;
  getAll(): Promise<Editora[]>;
  getById(id: number): Promise<Editora>;
  update(id: number): Promise<Editora>;
  delete(id: number): Promise<Editora>;
}
