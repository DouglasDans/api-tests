import { CreateAutorDto, UpdateAutorDto } from '../dto/autor.dto';
import { Autor } from '../entities/autor.entity';

export default abstract class AutorRepository {
  abstract create(autorDto: CreateAutorDto): Promise<Autor>;
  abstract getAll(): Promise<Autor[]>;
  abstract getById(id: number): Promise<Autor | null>;
  abstract update(id: number, autorDto: UpdateAutorDto): Promise<Autor>;
  abstract delete(id: number): Promise<Autor>;
}
