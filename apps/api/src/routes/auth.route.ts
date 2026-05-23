import { Router } from 'express';
import controller from '@/controllers/auth.controller.js';
import { validateSignup } from '@/validations/signup.validate.js';
import handleValidationErrors from '@/middlewares/validate.middleware.js';

const authRouter = Router();

authRouter.post('login', controller.login);
authRouter.post(
  'signup',
  validateSignup,
  handleValidationErrors,
  controller.signup,
);
