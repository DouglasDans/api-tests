import { Author } from "@/core/entities/author.entity";
import { faker } from "@faker-js/faker";

export default function makeFakeAuthors(length: number) {
  let arr = [];

  while (arr.length < length) {
    arr.push(
      new Author({
        id: arr.length + 1,
        name: faker.person.fullName(),
        nationality: faker.location.country(),
        birthDate: faker.date.between({
          from: "1970-01-01",
          to: "2005-01-01",
        }),
      })
    );
  }

  return arr;
}
