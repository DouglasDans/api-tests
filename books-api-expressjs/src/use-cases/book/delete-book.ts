import IBookRepository from "@/core/repositories/book.repository.interface";

export class DeleteBook {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(id: number) {
    const book = await this.bookRepository.delete(id);
    return book;
  }
}
