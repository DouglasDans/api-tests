import { Author, IAutor } from "@/core/entities/author.entity";
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

    if (!findAuthor) {
      throw new NotFoundError();
    }

    const toUpdateAuthor = new Author({
      id: findAuthor.id,
      name: formattedAuthor.name || findAuthor.name,
      nationality: formattedAuthor.nationality || findAuthor.nationality,
      birthDate: formattedAuthor.birthDate || findAuthor.birthDate,
    });

    const authorUpdated = await this.authorRepository.update(toUpdateAuthor);

    return authorUpdated;
  }
}
