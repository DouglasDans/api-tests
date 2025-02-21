import { Publisher } from "@/core/entities/publisher.entity";
import { faker } from "@faker-js/faker";

export default function makeFakePublishers(length: number) {
  let arr = [];

  while (arr.length < length) {
    arr.push(
      new Publisher({
        id: arr.length + 1,
        name: faker.company.name(),
        cnpj: faker.string.numeric(14),
        country: faker.location.country(),
      })
    );
  }

  return arr;
}
