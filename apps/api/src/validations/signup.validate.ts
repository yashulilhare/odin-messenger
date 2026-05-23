import { body } from 'express-validator';

export const validateSignup = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First Name cannot be empty.')
    .escape(),
  body('lastName').trim().escape(),
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username cannot be empty')
    .isLength({ min: 3, max: 20 })
    .withMessage('username should be between 2 and 20 characters.'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isStrongPassword({
      minLength: 5,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      'Invalid password. Password must more than 5 in length and should contain at least 1 letter, 1 number, 1 symbol!',
    ),
];
