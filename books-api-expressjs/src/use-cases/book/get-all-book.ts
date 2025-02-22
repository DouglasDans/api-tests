import IBookRepository from "@/core/repositories/book.repository.interface";

export class GetAllBooks {
  constructor(private readonly bookRepository: IBookRepository) {}
  async execute() {
    const books = await this.bookRepository.getAll();
    return books;
  }
}
