import type { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const meGet: RequestHandler = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access. No user credentials found.',
    });
  }

  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) {
    throw new Error('No ACCESS_TOKEN_SECRET found.');
  }
  try {
    const user = jwt.verify(token, secret);
    if (user) {
      return res.json({ success: true, user });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(403)
      .json({ success: false, message: 'Invalid or expired token.' });
  }
};

export default { meGet };
