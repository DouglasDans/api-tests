interface IHttpError {
  statusCode: number;
  name: string;
  message: string;
  details?: string;
}

export default class HttpError extends Error {
  statusCode: number;
  name: string;
  details?: string;

  constructor({ statusCode, name, message }: IHttpError) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}
