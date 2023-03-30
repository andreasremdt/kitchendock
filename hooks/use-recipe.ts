import fetcher from "@/lib/fetcher";
import { Recipe as RawRecipe } from "@prisma/client";
import { Recipe } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useRecipe(recipeId?: string) {
  const query = useQuery<RawRecipe>({
    queryKey: ["recipes", recipeId],
    queryFn: () => fetcher("GET", `/api/recipes/${recipeId}`),
    enabled: Boolean(recipeId),
  });

  return {
    ...query,
    recipe: {
      ...query.data,
      instructions: JSON.parse(query.data?.instructions || "[]"),
      ingredients: JSON.parse(query.data?.ingredients || "[]"),
    } as Recipe,
  };
}
