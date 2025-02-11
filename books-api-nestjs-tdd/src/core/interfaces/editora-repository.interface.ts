import { Editora } from '../entities/editora.entity';

export default abstract class EditoraRepository {
  abstract create(): Promise<Editora>;
  abstract getAll(): Promise<Editora[]>;
  abstract getById(id: number): Promise<Editora>;
  abstract update(id: number): Promise<Editora>;
  abstract delete(id: number): Promise<Editora>;
}
