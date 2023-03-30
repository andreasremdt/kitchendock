import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Recipe } from "@prisma/client";
import { getSession } from "@/lib/auth";
import { joinQueryParameters } from "@/lib/helpers";

type Data = {
  data?: Recipe | Recipe[];
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const user = await getSession(req);
  const recipeId = joinQueryParameters(req.query.id);

  if (!user || !recipeId) {
    return res.status(401).json({});
  }

  if (req.method === "GET") {
    try {
      const recipe = await prisma.recipe.findFirst({
        where: {
          id: recipeId,
          userId: user.id,
        },
      });

      if (!recipe) {
        return res.status(404).json({});
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
          id_userId: {
            id: recipeId,
            userId: user.id,
          },
        },
      });

      if (!exists) {
        return res.status(404).json({});
      }

      const recipe = await prisma.recipe.update({
        where: {
          id_userId: {
            id: recipeId,
            userId: user.id,
          },
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
          id: recipeId,
          id_userId: {
            id: recipeId,
            userId: user.id,
          },
        },
      });

      if (!exists) {
        return res.status(404).json({});
      }

      const recipe = await prisma.recipe.delete({
        where: {
          id_userId: {
            id: recipeId,
            userId: user.id,
          },
        },
      });

      res.json({ data: recipe });
    } catch (ex) {
      res.status(500).json({ error: (ex as Error).message });
    }
  } else {
    res.status(405).json({});
  }
}
