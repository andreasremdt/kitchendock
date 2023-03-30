import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import { SignJWT, jwtVerify } from "jose";
import { NextApiRequest } from "next";

const expiresInSeconds = 60 * 60 * 24 * 7;

export function hashPassword(password: string) {
  return bcrypt.hash(password, parseInt(process.env.ENCRYPTION_ROUNDS, 10));
}

export function comparePasswords(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateJWT(user: User) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiresInSeconds;
  const { id, email, name } = user;

  return new SignJWT({ id, email, name })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}

export async function getSession(req: NextApiRequest) {
  const cookie = req.cookies[process.env.COOKIE_NAME];

  if (!cookie) {
    return null;
  }

  const { payload } = await jwtVerify(cookie, new TextEncoder().encode(process.env.JWT_SECRET));

  return payload as Pick<User, "id" | "name" | "email">;
}

export function getCookie(token: string, remember: boolean) {
  return serialize(process.env.COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: remember ? expiresInSeconds : undefined,
    expires: remember ? new Date(expiresInSeconds * 1000) : undefined,
    sameSite: "strict",
  });
}

export function getInvalidatedCookie() {
  return serialize(process.env.COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "strict",
  });
}
