import { MockAuthorRepository } from "@/tests/mock-repositories/author.repository.mock";
import { describe, expect, it } from "vitest";
import { DeleteAuthor } from "./delete-author";
import { Author } from "@/core/entities/author.entity";
import { NotFoundError } from "@/core/errors/not-found.error";

describe("DeleteAuthor", () => {
  const repository = new MockAuthorRepository();
  const deleteAuthor = new DeleteAuthor(repository);

  it("deve deletar o author com sucesso", async () => {
    const deletedAuthor = await deleteAuthor.execute(2);

    expect(deletedAuthor).toBeInstanceOf(Author);

    expect(deletedAuthor).toHaveProperty("id");
    expect(deletedAuthor).toHaveProperty("name");
    expect(deletedAuthor).toHaveProperty("nationality");
    expect(deletedAuthor).toHaveProperty("birthDate");
    expect(deletedAuthor).toHaveProperty("books");
  });

  it("deve retornar um erro de DatabaseDataNotFoundError em um id inexistente", async () => {
    const deletedAuthor = deleteAuthor.execute(234);

    await expect(deletedAuthor).rejects.toThrow(NotFoundError);
  });
});
