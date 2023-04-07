import fetcher from "@/lib/fetcher";
import { Recipe as RawRecipe } from "@prisma/client";
import { Recipe } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { parseRecipe } from "@/lib/parser";

export default function useRecipe(recipeId?: string) {
  const queryClient = useQueryClient();

  const query = useQuery<RawRecipe>({
    queryKey: ["recipes", recipeId],
    queryFn: () => fetcher("GET", `/api/recipes/${recipeId}`),
    enabled: Boolean(recipeId),
  });

  function handleChange(changes: Partial<Recipe> = {}) {
    queryClient.setQueryData<Recipe>(["recipes", recipeId], (previous) => ({ ...(previous as Recipe), ...changes }));
  }

  return {
    ...query,
    onChange: handleChange,
    recipe: parseRecipe(query.data),
  };
}
