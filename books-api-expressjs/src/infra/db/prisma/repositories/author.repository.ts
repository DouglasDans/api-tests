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
  async getById(id: number): Promise<Author | null> {
    try {
      const author = await this.prisma.author.findFirst({
        where: { id },
      });

      if (author === null) {
        return null;
      }

      return PrismaAuthorMapper.toDomain(author);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }
  async update(author: Author): Promise<Author> {
    try {
      const updatedAuthor = await this.prisma.author.update({
        where: { id: author.id },
        data: PrismaAuthorMapper.toPrisma(author),
      });

      return PrismaAuthorMapper.toDomain(updatedAuthor);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }
  async delete(id: number): Promise<Author> {
    try {
      const deletedAuthor = await this.prisma.author.delete({
        where: { id },
      });

      return PrismaAuthorMapper.toDomain(deletedAuthor);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }
}
