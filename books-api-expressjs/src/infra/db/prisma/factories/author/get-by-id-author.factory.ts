import { GetAuthorById } from "@/use-cases/author/get-by-id-author";
import PrismaAuthorRepository from "../../repositories/author.repository";

export default class PrismaGetByIdAuthor {
  static create() {
    const repository = new PrismaAuthorRepository();
    const service = new GetAuthorById(repository);

    return service;
  }
}
