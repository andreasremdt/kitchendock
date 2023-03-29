import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { comparePasswords, generateJWT, getCookie } from "@/lib/auth";
import { User } from "@prisma/client";

type Data = {
  user?: Pick<User, "email" | "name">;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    try {
      const user = await prisma.user.findFirst({
        where: { email: req.body.email },
      });

      if (!user) {
        return res.status(401).json({ error: "Email or password are invalid." });
      }

      if (!(await comparePasswords(req.body.password, user.password))) {
        return res.status(401).json({ error: "Email or password are invalid." });
      }

      const token = generateJWT(user);

      res.setHeader("Set-Cookie", getCookie(token)).json({ user: { email: user.email, name: user.name } });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  }

  res.status(405).end();
}
