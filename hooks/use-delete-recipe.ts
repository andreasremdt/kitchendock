import fetcher from "@/lib/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Recipe } from "@/types";
import Router from "next/router";

export default function useDeleteRecipe(recipeId: string) {
  const queryClient = useQueryClient();

  return useMutation(() => fetcher("DELETE", `/api/recipes/${recipeId}`), {
    async onMutate() {
      await queryClient.cancelQueries({ queryKey: ["recipes"] });

      const previousRecipes = queryClient.getQueryData<Recipe[]>(["recipes"]);

      queryClient.setQueryData<Recipe[]>(["recipes"], (previous) =>
        previous?.filter((recipe) => recipe.id !== recipeId)
      );

      return { previousRecipes };
    },
    onError(_, __, context) {
      queryClient.setQueryData(["recipes"], context?.previousRecipes);
    },
    onSuccess() {
      Router.push("/");
    },
  });
}
