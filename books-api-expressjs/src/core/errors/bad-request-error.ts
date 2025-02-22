import HttpError from "./http-error-response";

export class BadRequestError extends HttpError {
  constructor(errorMessage?: string) {
    super({
      statusCode: 500,
      name: "BadRequestError",
      message: errorMessage || "Request is invalid",
    });
  }
}
