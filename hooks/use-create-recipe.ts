import fetcher from "@/lib/fetcher";
import Router from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Recipe } from "@/types";
import { stringifyRecipe } from "@/lib/parser";

export default function useCreateRecipe() {
  const queryClient = useQueryClient();

  return useMutation((data: Omit<Recipe, "id">) => fetcher("POST", "/api/recipes", stringifyRecipe(data)), {
    async onMutate(recipe: Omit<Recipe, "id">) {
      await queryClient.cancelQueries({ queryKey: ["recipes"] });

      const previousRecipes = queryClient.getQueryData<Recipe[]>(["recipes"]);
      const newRecipe = { id: "temp", ...recipe } as Recipe;

      queryClient.setQueryData<Recipe[]>(["recipes"], (previous) => [...previous!, newRecipe]);

      return { previousRecipes };
    },
    onError(_, __, context) {
      queryClient.setQueryData(["recipes"], context?.previousRecipes);
    },
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },
    onSuccess(data: Recipe) {
      if (data.id) {
        Router.push(`/recipe/${data.id}`);
      }
    },
  });
}
