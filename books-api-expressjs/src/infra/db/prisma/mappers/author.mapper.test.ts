import { describe, it } from "vitest";
import { faker } from "@faker-js/faker";

describe("PrismaAuthorMapper", () => {
  describe("toPrisma()", () => {
    it("deve retornar o objeto corretamente", () => {
      const author = new Author({
        name: faker.person.fullName(),
        nationality,
        birthDate: new Date(birthDate),
      });
    });
  });
});
