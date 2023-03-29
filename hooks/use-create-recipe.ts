import fetcher from "@/lib/fetcher";
import Router from "next/router";
import { useMutation } from "@tanstack/react-query";
import { Recipe } from "@/types";

export default function useCreateRecipe() {
  return useMutation((data: Omit<Recipe, "id">) => fetcher("POST", "/api/recipes", data), {
    onSuccess(data: Recipe) {
      if (data.id) {
        Router.push(`/recipe/${data.id}`);
      }
    },
  });
}
