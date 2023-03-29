import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { generateJWT, getCookie, hashPassword } from "@/lib/auth";
import { User } from "@prisma/client";

type Data = {
  user?: Pick<User, "email" | "name">;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    try {
      const exists = await prisma.user.findFirst({
        where: { email: req.body.email },
      });

      if (exists) {
        res.status(400).json({ error: `A user with the email ${req.body.email} already exists.` });
      }

      const user = await prisma.user.create({
        data: {
          email: req.body.email,
          password: await hashPassword(req.body.password),
          name: req.body.name,
        },
      });

      const token = generateJWT(user);

      return res
        .setHeader("Set-Cookie", getCookie(token))
        .status(201)
        .json({ user: { email: user.email, name: user.name } });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  }

  res.status(405).end();
}
