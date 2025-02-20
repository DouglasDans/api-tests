import HttpError from "@/core/errors/http-error-response";
import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: HttpError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err instanceof HttpError ? err.statusCode : 500;

  console.error(err.stack);

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || "Erro interno do servidor",
    error: err.name || "InternalError",
  });
}
