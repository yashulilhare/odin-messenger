import type { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status | 500;

  res.status(statusCode).json({
    error: {
      message: err.message || 'An unexpected error occurred on the server.',
      stack: process.env.NODE_ENV === 'DEVELOPMENT' ? err.stack : undefined,
    },
  });
};

export default globalErrorHandler