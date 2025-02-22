import HttpError from "./http-error-response";

export class BadRequestError extends HttpError {
  constructor(errorMessage?: string) {
    super({
      statusCode: 400,
      name: "BadRequestError",
      message: errorMessage || "Request is invalid",
    });
  }
}
