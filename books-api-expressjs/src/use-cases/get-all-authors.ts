import IAuthorRepository from "@/core/repositories/author.repository.interface";

export class GetAllAuthors {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute() {
    const authors = this.authorRepository.getAll();
    return await authors;
  }
}
