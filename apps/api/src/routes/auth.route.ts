import { Router } from 'express';
import controller from '@/controllers/auth.controller.js';
import { validateSignup } from '@/validations/signup.validate.js';
import handleValidationErrors from '@/middlewares/validate.middleware.js';
import { validateLogin } from '@/validations/validateLogin.js';

const authRouter = Router();

authRouter.post(
  '/login',
  validateLogin,
  handleValidationErrors,
  controller.login,
);

authRouter.post(
  '/signup',
  validateSignup,
  handleValidationErrors,
  controller.signup,
);

export default authRouter;
