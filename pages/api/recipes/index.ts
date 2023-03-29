import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Recipe } from "@prisma/client";

type Data = {
  data?: Recipe | Recipe[];
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const { title, video, description, image, ingredients, category, instructions, rating, difficulty, timeNeeded } =
      req.body;
    try {
      const recipe = await prisma.recipe.create({
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
          userId: "1",
        },
      });

      if (!recipe) {
        throw new Error("Something went wrong while trying to create the recipe.");
      }

      res.status(201).json({ data: recipe });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  } else if (req.method === "GET") {
    try {
      const recipes = await prisma.recipe.findMany({
        where: {
          trashed: false,
        },
      });

      res.json({ data: recipes });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  }

  res.status(405).end();
}
