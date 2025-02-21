import { Book } from "@/core/entities/book.entity";
import { faker } from "@faker-js/faker";

export default function makeFakeBooks(length: number) {
  let arr = [];

  while (arr.length < length) {
    arr.push(
      new Book({
        id: arr.length + 1,
        isbn: faker.string.numeric(13),
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        publicationDate: faker.date.past(),
        publisherId: faker.number.int({ min: 1, max: 10 }),
        authorId: faker.number.int({ min: 1, max: 10 }),
      })
    );
  }

  return arr;
}
