import { useState } from "react";
import Head from "next/head";
import RecipeBar from "@/components/recipe-bar";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";
import RecipeHeader from "@/components/recipe-header";
import RecipeMenuBar from "@/components/recipe-menu-bar";
import RecipeMedia from "@/components/recipe-media";
import { Recipe } from "@/types";
import Button from "@/components/button";
import Icon from "@/components/icon";
import useCreateRecipe from "@/hooks/use-create-recipe";

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
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RecipeMenuBar onSave={() => mutate(recipe)} />

        <RecipeHeader editing recipe={recipe} onSave={(data) => setRecipe((prev) => ({ ...prev, ...data }))} />

        <RecipeBar editing />

        <RecipeIngredients
          editing
          ingredients={recipe.ingredients}
          onSave={(ingredients) => setRecipe((prev) => ({ ...prev, ingredients }))}
        />

        <RecipeMedia editing recipe={recipe} />

        <RecipeInstructions
          editing
          instructions={recipe.instructions}
          onSave={(instructions) => setRecipe((prev) => ({ ...prev, instructions }))}
        />

        <footer className="flex container mx-auto justify-center gap-x-2 mb-16">
          <Button href="/">
            <Icon name="cancel" /> Cancel
          </Button>
          <Button variant="solid">
            <Icon name="save" /> Save
          </Button>
        </footer>
      </main>
    </>
  );
}
