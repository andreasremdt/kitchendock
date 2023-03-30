import fetcher from "@/lib/fetcher";
import Router from "next/router";
import { useMutation } from "@tanstack/react-query";
import { Recipe } from "@/types";
import { stringifyRecipe } from "@/lib/parser";

export default function useCreateRecipe() {
  return useMutation((data: Omit<Recipe, "id">) => fetcher("POST", "/api/recipes", stringifyRecipe(data)), {
    onSuccess(data: Recipe) {
      if (data.id) {
        Router.push(`/recipe/${data.id}`);
      }
    },
  });
}
