import { CreateAutorDto } from '../../application/dto/autor.dto';
import { Autor } from '../entities/autor.entity';

export default abstract class AutorRepository {
  abstract create(autorDto: CreateAutorDto): Promise<Autor>;
  abstract getAll(): Promise<Autor[]>;
  abstract getById(id: number): Promise<Autor>;
  abstract update(id: number): Promise<Autor>;
  abstract delete(id: number): Promise<Autor>;
}
