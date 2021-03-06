import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();
export const jwtToken = {
  createToken({ id, email }) {
    return jwt.sign({ id, email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' });
  },
  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' });
  },
};

export const hashPassword = (password) => bcrypt.hashSync(password, 10);
export const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);
