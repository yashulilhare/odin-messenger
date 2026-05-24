import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errorName: 'validation',
      errorsArray: errors.array(),
      message: 'Data provided for authentication were invalid.',
    });
  }

  next();
};

export default handleValidationErrors;
