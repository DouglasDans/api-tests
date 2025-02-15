import { Author } from "src/core/entities/author.entity";
import IAuthorRepository from "src/core/repositories/author.repository.interface";

interface AuthorRequest {
  name: string;
  nationality: string;
  birthDate: string;
}

export class CreateAuthor {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute({
    name,
    nationality,
    birthDate,
  }: AuthorRequest): Promise<Author> {
    const author = new Author({
      name,
      nationality,
      birthDate: new Date(birthDate),
    });

    return this.authorRepository.create(author);
  }
}
