import IAuthorRepository from "@/core/repositories/author.repository.interface";

export class DeleteAuthor {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(id: number) {
    const deletedAuthor = this.authorRepository.delete(id);
    return deletedAuthor;
  }
}
