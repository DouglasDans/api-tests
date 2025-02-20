import { DeleteAuthor } from "@/use-cases/author/delete-author";
import PrismaAuthorRepository from "../../repositories/author.repository";

export class PrismaDeleteAuthor {
  static create(): DeleteAuthor {
    const repository = new PrismaAuthorRepository();
    const service = new DeleteAuthor(repository);

    return service;
  }
}
