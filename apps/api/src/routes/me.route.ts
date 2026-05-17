import { Router } from 'express';
import controller from '@/controllers/me.controller.js';

const me = Router();

me.get('/', controller.meGet);

export default me;
