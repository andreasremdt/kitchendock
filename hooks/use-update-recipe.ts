import fetcher from "@/lib/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Recipe } from "@/types";
import { stringifyRecipe } from "@/lib/parser";

export default function useUpdateRecipe(recipeId: string) {
  const queryClient = useQueryClient();

  return useMutation(
    (changes: Partial<Recipe>) => fetcher("PATCH", `/api/recipes/${recipeId}`, stringifyRecipe(changes)),
    {
      async onMutate(changes: Partial<Recipe>) {
        await queryClient.cancelQueries({ queryKey: ["recipes", recipeId] });

        const previousRecipe = queryClient.getQueryData<Recipe>(["recipes", recipeId]);
        const updatedRecipe = { ...previousRecipe, ...changes } as Recipe;

        queryClient.setQueryData<Recipe>(["recipes", recipeId], (previous) => ({ ...previous, ...updatedRecipe }));

        return { updatedRecipe };
      },
      onError(_, __, context) {
        queryClient.setQueryData(["recipes", recipeId], context?.updatedRecipe);
      },
      onSettled() {
        queryClient.invalidateQueries({ queryKey: ["recipes", recipeId] });
      },
    }
  );
}
