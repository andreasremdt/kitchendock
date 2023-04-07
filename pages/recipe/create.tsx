import useCreateRecipe from "@/hooks/use-create-recipe";
import { Recipe } from "@/types";
import RecipeView from "@/views/recipe";
import { useState } from "react";

export default function CreateRecipe() {
  const { mutate } = useCreateRecipe();
  const [recipe, setRecipe] = useState<Omit<Recipe, "id">>(() => ({
    title: "Untitled Recipe",
    description: "",
    category: "",
    image: undefined,
    ingredients: undefined,
    instructions: undefined,
  }));

  return (
    <RecipeView
      recipe={recipe}
      onChange={(changes) => setRecipe((prev) => ({ ...prev, ...changes }))}
      onSave={() => mutate(recipe)}
    />
  );
}
