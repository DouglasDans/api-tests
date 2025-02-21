import HttpError from "./http-error-response";

export class NotFoundError extends HttpError {
  constructor(errorMessage?: string) {
    super({
      statusCode: 404,
      name: "NotFoundError",
      message: errorMessage || "Resource not found",
    });
  }
}
