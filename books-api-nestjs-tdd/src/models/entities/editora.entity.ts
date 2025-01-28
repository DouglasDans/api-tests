import { Livro } from './livro.entity';

export class Editora {
  id: number;
  nome: string;
  livros: Livro[];
}
