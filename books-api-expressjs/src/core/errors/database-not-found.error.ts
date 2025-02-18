export class DatabaseDataNotFoundError extends Error {
  constructor() {
    super("Nenhum dado foi encontrado no banco de dados");
  }
}
