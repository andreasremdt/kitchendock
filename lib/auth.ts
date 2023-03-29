import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import { SignJWT } from "jose";

export function hashPassword(password: string) {
  return bcrypt.hash(password, parseInt(process.env.ENCRYPTION_ROUNDS, 10));
}

export function comparePasswords(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateJWT(user: User) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60;
  const { id, email, name } = user;

  return new SignJWT({ id, email, name })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}

export function getCookie(token: string) {
  return serialize(process.env.COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
