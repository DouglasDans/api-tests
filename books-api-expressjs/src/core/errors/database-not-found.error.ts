export class DatabaseDataNotFound extends Error {
  constructor() {
    super("Nenhum dado foi encontrado no banco de dados");
  }
}
