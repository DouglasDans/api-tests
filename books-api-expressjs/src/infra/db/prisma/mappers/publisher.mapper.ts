import { Publisher } from "@/core/entities/publisher.entity";
import {
  Prisma,
  Publisher as PrismaPublisher,
} from "../../../../../node_modules/.prisma/client/index";

export class PrismaPublisherMapper {
  static toPrisma(
    publisher: Omit<Publisher, "id">
  ): Prisma.PublisherCreateInput {
    const prismaPublisher: Prisma.PublisherCreateInput = {
      name: publisher.getName(),
      cnpj: publisher.getCnpj(),
      country: publisher.getCountry(),
    };
    return prismaPublisher;
  }

  static toDomain(prismaPublisher: PrismaPublisher): Publisher {
    const publisher: Publisher = new Publisher({
      id: prismaPublisher.id,
      name: prismaPublisher.name,
      cnpj: prismaPublisher.cnpj,
      country: prismaPublisher.country,
    });
    return publisher;
  }
}
