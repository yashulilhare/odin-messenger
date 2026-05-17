import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import me from '@/routes/me.route.js';
import corsConfig from '@/config/cors.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const frontend = process.env.FRONTEND_URL;

if (!frontend) throw new Error('No environment variable set for FRONTEND_URL');

app.use(cors({ ...corsConfig, origin: frontend }));
app.use('/me', me);

export default app;
