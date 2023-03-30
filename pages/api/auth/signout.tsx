import { NextApiRequest, NextApiResponse } from "next";
import { getInvalidatedCookie } from "@/lib/auth";
import { User } from "@prisma/client";

type Data = {
  user?: Pick<User, "email" | "name">;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    try {
      res.setHeader("Set-Cookie", getInvalidatedCookie()).json({});
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  } else {
    res.status(405).json({});
  }
}
