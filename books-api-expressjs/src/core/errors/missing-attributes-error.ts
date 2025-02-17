export class MissingAttributesError extends Error {
  constructor() {
    super("Alguns atributos obrigatórios não foram informados");
  }
}
