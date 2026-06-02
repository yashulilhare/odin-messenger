import { body } from 'express-validator';

export const validateLogin = [
  body('username').trim().notEmpty().withMessage('username cannot be empty'),
  body('password').trim().notEmpty().withMessage('password cannot be empty'),
];
