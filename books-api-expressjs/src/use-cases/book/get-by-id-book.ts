import IBookRepository from "@/core/repositories/book.repository.interface";

export class GetByIdBooks {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(id: number) {
    const book = await this.bookRepository.getById(id);
    return book;
  }
}
