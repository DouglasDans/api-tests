import { Livro } from './livro.entity';

export class Autor {
  id: number;
  nome: string;
  nacionalidade: string;
  dataNascimento: Date;
  livros: Livro[];
}
