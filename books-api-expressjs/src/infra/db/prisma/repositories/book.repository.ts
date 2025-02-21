import { Book } from "@/core/entities/book.entity";
import IBookRepository from "@/core/repositories/book.repository.interface";
import { PrismaClient } from "@/../node_modules/.prisma/client/index";
import { PrismaBookMapper } from "../mappers/book.mapper";
import { NotFoundError } from "@/core/errors/not-found.error";

export default class PrismaBookRepository implements IBookRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(book: Omit<Book, "id">): Promise<Book> {
    try {
      const prismaBook = await this.prisma.book.create({
        data: PrismaBookMapper.toPrisma(book),
      });
      return PrismaBookMapper.toDomain(prismaBook);
    } catch (error: any) {
      throw new NotFoundError();
    }
  }

  async getAll(): Promise<Book[]> {
    try {
      const books = await this.prisma.book.findMany({
        include: {
          author: true,
          publisher: true,
        },
      });
      return books.map((book) => PrismaBookMapper.toDomain(book));
    } catch (error: any) {
      throw new NotFoundError();
    }
  }

  async getById(id: number): Promise<Book> {
    try {
      const book = await this.prisma.book.findFirst({
        where: { id },
        include: {
          author: true,
          publisher: true,
        },
      });

      if (book === null) {
        throw new Error();
      }

      return PrismaBookMapper.toDomain(book);
    } catch (error: any) {
      throw new NotFoundError();
    }
  }

  async update(book: Book): Promise<Book> {
    try {
      const updatedBook = await this.prisma.book.update({
        where: { id: book.getId() },
        data: PrismaBookMapper.toPrisma(book),
      });

      return PrismaBookMapper.toDomain(updatedBook);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  async delete(id: number): Promise<Book> {
    try {
      const deletedBook = await this.prisma.book.delete({
        where: { id },
      });

      return PrismaBookMapper.toDomain(deletedBook);
    } catch (error) {
      throw new NotFoundError();
    }
  }
}
