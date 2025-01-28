import { Autor } from './autor.entity';

export class Livro {
  id: number;
  titulo: string;
  autorId: number;
  autor: Autor;
  dataPublicacao: Date;
}
