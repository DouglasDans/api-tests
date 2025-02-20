import HttpError from "./http-error-response";

export class NotFoundError extends HttpError {
  constructor() {
    super({
      statusCode: 404,
      name: "NotFoundError",
      message: "Os dados requisitados ao banco não foram encontrados",
    });
  }
}
