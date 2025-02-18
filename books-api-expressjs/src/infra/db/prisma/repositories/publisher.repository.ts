import { Publisher } from "@/core/entities/publisher.entity";
import IPublisherRepository from "@/core/repositories/publisher.repository.interface";
import { PrismaClient } from "@/../node_modules/.prisma/client/index";
import { DatabaseDataNotFound } from "@/core/errors/database-not-found.error";
import { PrismaPublisherMapper } from "../mappers/publisher.mapper";

export default class PrismaPublisherRepository implements IPublisherRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(publisher: Omit<Publisher, "id">): Promise<Publisher> {
    try {
      const prismaPublisher = await this.prisma.publisher.create({
        data: PrismaPublisherMapper.toPrisma(publisher),
      });
      return PrismaPublisherMapper.toDomain(prismaPublisher);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }

  async getAll(): Promise<Publisher[]> {
    try {
      const publishers = await this.prisma.publisher.findMany();
      const mappedPublishers = publishers.map((publisher) => {
        return PrismaPublisherMapper.toDomain(publisher);
      });

      return mappedPublishers;
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }

  async getById(id: number): Promise<Publisher | null> {
    try {
      const publisher = await this.prisma.publisher.findFirst({
        where: { id },
      });

      if (publisher === null) {
        return null;
      }

      return PrismaPublisherMapper.toDomain(publisher);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }

  async update(publisher: Publisher): Promise<Publisher> {
    try {
      const updatedPublisher = await this.prisma.publisher.update({
        where: { id: publisher.id },
        data: PrismaPublisherMapper.toPrisma(publisher),
      });

      return PrismaPublisherMapper.toDomain(updatedPublisher);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }

  async delete(id: number): Promise<Publisher> {
    try {
      const deletedPublisher = await this.prisma.publisher.delete({
        where: { id },
      });

      return PrismaPublisherMapper.toDomain(deletedPublisher);
    } catch (error) {
      throw new DatabaseDataNotFound();
    }
  }
}
