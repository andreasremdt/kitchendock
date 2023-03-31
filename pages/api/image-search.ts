import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@/lib/auth";
import fetch from "node-fetch";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await getSession(req);

  if (!user) {
    return res.status(401).json({});
  }

  if (req.method === "GET") {
    try {
      const { query } = req.query;
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (response.ok) {
        res.status(200).json(json);
      } else {
        throw new Error(response.statusText);
      }
    } catch (ex) {
      console.log(ex);
      res.status(500).json({});
    }
  } else {
    res.status(405).json({});
  }
}
