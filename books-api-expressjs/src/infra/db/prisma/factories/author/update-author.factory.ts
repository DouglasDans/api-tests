import { UpdateAuthor } from "@/use-cases/author/update-author";
import PrismaAuthorRepository from "../../repositories/author.repository";

export class PrismaUpdateAuthor {
  static create(): UpdateAuthor {
    const repository = new PrismaAuthorRepository();
    const service = new UpdateAuthor(repository);

    return service;
  }
}
