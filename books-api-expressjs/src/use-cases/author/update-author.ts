import { Author } from "@/core/entities/author.entity";
import { NotFoundError } from "@/core/errors/not-found.error";
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

    const findAuthor = await this.authorRepository.getById(authorRequest.id);

    const toUpdateAuthor = new Author({
      id: findAuthor.getId(),
      name: formattedAuthor.name || findAuthor.getName(),
      nationality: formattedAuthor.nationality || findAuthor.getNationality(),
      birthDate: formattedAuthor.birthDate || findAuthor.getBirthDate(),
    });

    const authorUpdated = await this.authorRepository.update(toUpdateAuthor);

    return authorUpdated;
  }
}
