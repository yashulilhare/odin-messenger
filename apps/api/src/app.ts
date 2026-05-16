import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const frontend = process.env.FRONTEND_URL;

if (!frontend) throw new Error('No environment variable set for FRONTEND_URL');

app.use(
  cors({
    origin: frontend,
  }),
);
app.use('/me', (req, res) => {
  res.json('got to the /me');
});

app.use('/', (req, res) => {
  res.json('server is running');
});

export default app;
