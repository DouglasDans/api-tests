import { CreateAuthor } from "@/use-cases/author/create-author";
import PrismaAuthorRepository from "../../repositories/author.repository";

export class PrismaCreateAuthor {
  static create(): CreateAuthor {
    const repository = new PrismaAuthorRepository();
    const createAuthor = new CreateAuthor(repository);

    return createAuthor;
  }
}
