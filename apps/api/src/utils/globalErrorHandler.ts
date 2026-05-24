import type { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status | 500;

  res.status(statusCode).json({
    message: err.message || 'An unexpected error occurred on the server.',
    cause: err.cause || undefined,
    errorName: 'global',
    stack: process.env.NODE_ENV === 'DEVELOPMENT' ? err.stack : undefined,
    name: err.name || undefined,
  });
};

export default globalErrorHandler;
