import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import { matchedData } from 'express-validator';
import type {
  SignUpData,
  LoginData,
} from '@shared/src/types/auth-data-types.js';
import bcrypt from 'bcryptjs';
import userDB from '@/repositories/user.repository.js';
import jwt from 'jsonwebtoken';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

const SECRET = process.env.ACCESS_TOKEN_SECRET;

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: LoginData = matchedData(req);

  try {
    const user = await userDB.findUser({ username });

    if (!user) {
      return res.status(401).json({
        errorName: 'auth',
        message: "username doesn't exists",
      });
    }

    const passMatched = await bcrypt.compare(password, user.password);

    if (!passMatched) {
      return res.status(401).json({
        errorName: 'auth',
        message: 'Invalid password',
      });
    }

    if (!SECRET) {
      throw new Error('Missing ACCESS_TOKEN_SECRET variable');
    }

    jwt.sign(
      { id: user.id, username: user.username },
      SECRET,
      {
        expiresIn: '10d',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
              name: err.name,
              message: 'Your session has expired, please log in again.',
              errorName: 'auth',
            });
          }

          return res.status(401).json({
            name: err.name,
            message: err.message,
            stack: err.stack,
            errorName: 'auth',
          });
        }

        res
          .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
          })
          .json({
            message: 'User found',
            user: {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              profileUrl: user.profileUrl,
              about: user.about,
              isGuest: user.isGuest,
            },
          });
      },
    );
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: err.message,
        name: err.name,
        errorName: 'other-server-error',
        cause: err.cause,
      });
    }

    res.status(500).json({
      message: 'Something went wrong on the server',
      errorName: 'other-server-error',
      error: err,
    });
    next(err);
  }
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, username, password }: SignUpData =
    matchedData(req);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userDB.createUser({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });

    if (!SECRET) {
      throw new Error('Missing ACCESS_TOKEN_SECRET variable');
    }

    jwt.sign(
      { id: user.id, username: user.username },
      SECRET,
      { expiresIn: '10d' },
      (err, token) => {
        if (err) {
          console.log(err);
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
              name: err.name,
              message: 'Your session has expired, please log in again.',
              errorName: 'auth',
            });
          }

          return res.status(401).json({
            name: err.name,
            message: err.message,
            stack: err.stack,
            errorName: 'auth',
          });
        }

        // todo: send more initial information on  signup so there will not be  need to login again.

        res
          .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
          })
          .json({
            message: 'User created successfully.',
            user: {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              profileUrl: user.profileUrl,
              about: user.about,
              isGuest: user.isGuest,
            },
          });
      },
    );
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code == 'P2002') {
      return res.status(401).json({
        message: 'username already exists.',
        errorName: 'auth',
      });
    }

    if (err instanceof Error) {
      return res.status(500).json({
        message: err.message,
        name: err.name,
        errorName: 'other-server-error',
        cause: err.cause,
      });
    }

    res.status(500).json({
      message: 'Something went wrong on the server',
      errorName: 'other-server-error',
      error: err,
    });
    next(err);
  }
};

export default { login, signup };
