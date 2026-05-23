import { Router } from 'express';
import controller from '@/controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('login', controller.login);
authRouter.post('signup', controller.signup);
