import { Author } from "@/core/entities/author.entity";
import IAuthorRepository from "@/core/repositories/author.repository.interface";
import { PrismaClient } from "@/../node_modules/.prisma/client/index";
import { PrismaAuthorMapper } from "../mappers/author.mapper";
import { DatabaseDataNotFound } from "@/core/errors/database-not-found.error";

export default class PrismaAuthorRepository implements IAuthorRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(author: Omit<Author, "id">): Promise<Author> {
    try {
      const prismaAuthor = await this.prisma.author.create({
        data: PrismaAuthorMapper.toPrisma(author),
      });
      return PrismaAuthorMapper.toDomain(prismaAuthor);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }
  async getAll(): Promise<Author[]> {
    try {
      const authors = await this.prisma.author.findMany();
      const mappedAuthors = authors.map((author) => {
        return PrismaAuthorMapper.toDomain(author);
      });

      return mappedAuthors;
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }
  getById(id: number): Promise<Author | null> {
    throw new Error("Method not implemented.");
  }
  update(author: Author): Promise<Author> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<Author> {
    throw new Error("Method not implemented.");
  }
}
