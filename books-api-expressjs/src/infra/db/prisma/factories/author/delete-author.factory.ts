export class PrismaDeleteAuthor {
  static create(): DeleteA {
    const repository = new PrismaAuthorRepository();
    const createAuthor = new CreateAuthor(repository);

    return createAuthor;
  }
}
