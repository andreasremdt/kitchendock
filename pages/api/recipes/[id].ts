import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Recipe } from "@prisma/client";

type Data = {
  data?: Recipe | Recipe[];
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    try {
      const recipe = await prisma.recipe.findFirst({
        where: {
          id: req.query.id as string,
        },
      });

      if (!recipe) {
        return res.status(404).end();
      }

      res.json({ data: recipe });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  } else if (req.method === "PATCH") {
    const { title, video, description, image, ingredients, category, instructions, rating, difficulty, timeNeeded } =
      req.body;

    try {
      const exists = await prisma.recipe.findUnique({
        where: {
          id: req.query.id as string,
        },
      });

      if (!exists) {
        return res.status(404).end();
      }

      const recipe = await prisma.recipe.update({
        where: {
          id: req.query.id as string,
        },
        data: {
          title,
          description,
          image,
          video,
          ingredients,
          instructions,
          category,
          rating,
          difficulty,
          timeNeeded,
        },
      });

      res.json({ data: recipe });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  } else if (req.method === "DELETE") {
    try {
      const exists = await prisma.recipe.findUnique({
        where: {
          id: req.query.id as string,
        },
      });

      if (!exists) {
        return res.status(404).end();
      }

      const recipe = await prisma.recipe.delete({
        where: {
          id: req.query.id as string,
        },
      });

      res.json({ data: recipe });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  }

  res.status(405);
}
