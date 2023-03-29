import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export function hashPassword(password: string) {
  return bcrypt.hash(password, parseInt(process.env.ENCRYPTION_ROUNDS, 10));
}

export function comparePasswords(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateJWT(user: User) {
  const { id, email, name } = user;

  return jwt.sign({ id, email, name }, process.env.JWT_SECRET);
}

export function getCookie(token: string) {
  return serialize(process.env.COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
