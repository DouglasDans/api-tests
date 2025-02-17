import { Author } from "@/core/entities/author.entity";
import { MissingAttributesError } from "@/core/errors/missing-attributes-error";
import IAuthorRepository from "@/core/repositories/author.repository.interface";

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
    if (!name || !nationality || !birthDate) {
      throw new MissingAttributesError();
    }

    const author = new Author({
      name,
      nationality,
      birthDate: new Date(birthDate),
    });

    return this.authorRepository.create(author);
  }
}
