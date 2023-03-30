import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Recipe } from "@prisma/client";
import { getSession } from "@/lib/auth";

type Data = {
  data?: Recipe | Recipe[];
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const user = await getSession(req);

  if (!user) {
    return res.status(401).json({});
  }

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
          user: {
            connect: {
              id: user.id,
            },
          },
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
          AND: {
            userId: user.id,
            trashed: false,
          },
        },
      });

      res.json({ data: recipes });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  } else {
    res.status(405).json({});
  }
}
