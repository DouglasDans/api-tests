import { Author, IAutor } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";

interface AuthorRequest {
  id: number;
  name?: string;
  nationality?: string;
  birthDate?: string;
}

export class UpdateAuthor {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(authorRequest: AuthorRequest) {
    const formattedAuthor = {
      id: authorRequest.id,
      name: authorRequest.name || undefined,
      nationality: authorRequest.nationality || undefined,
      birthDate: authorRequest.birthDate
        ? new Date(authorRequest.birthDate)
        : undefined,
    };

    const authorUpdated = this.authorRepository.update(formattedAuthor);

    return authorUpdated;
  }
}
