import { GetAllAuthors } from "@/use-cases/get-all-authors";
import PrismaAuthorRepository from "../repositories/author.repository";

export default class PrismaGetAllAuthors {
  static create() {
    const repository = new PrismaAuthorRepository();
    const authors = new GetAllAuthors(repository);

    return authors;
  }
}
