import { Author } from "src/core/entities/author.entity";
import {
  Prisma,
  Author as PrismaAuthor,
} from "../../../../../node_modules/.prisma/client/index";

export class PrismaAuthorMapper {
  static toPrisma(author: Omit<Author, "id">): Prisma.AuthorCreateInput {
    const prismaAuthor: Prisma.AuthorCreateInput = {
      name: author.getName(),
      nationality: author.getNationality(),
      birthDate: author.getBirthDate(),
    };
    return prismaAuthor;
  }

  static toDomain(prismaAuthor: PrismaAuthor): Author {
    const author: Author = new Author({
      id: prismaAuthor.id,
      name: prismaAuthor.name,
      birthDate: prismaAuthor.birthDate,
      nationality: prismaAuthor.nationality,
    });
    return author;
  }
}
