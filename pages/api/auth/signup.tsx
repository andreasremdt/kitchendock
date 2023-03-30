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
    const { email, password, remember, name } = req.body;
    try {
      const exists = await prisma.user.findFirst({
        where: { email },
      });

      if (exists) {
        res.status(400).json({ error: `A user with the email ${email} already exists.` });
      }

      const user = await prisma.user.create({
        data: {
          email,
          password: await hashPassword(password),
          name,
        },
      });

      const token = await generateJWT(user);

      return res
        .setHeader("Set-Cookie", getCookie(token, remember))
        .status(201)
        .json({ user: { email: user.email, name: user.name } });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  }

  res.status(405).end();
}
