import IAuthorRepository from "@/core/repositories/author.repository.interface";

export class GetAuthorById {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(id: number) {
    const author = this.authorRepository.getById(id);
    return await author;
  }
}
