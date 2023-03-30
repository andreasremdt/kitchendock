import { useState } from "react";
import Head from "next/head";
import RecipeBar from "@/components/recipe-bar";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";
import RecipeHeader from "@/components/recipe-header";
import MenuBar from "@/components/menu-bar";
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

  function handleSave(changes: Partial<Recipe>) {
    setRecipe((prev) => ({ ...prev, ...changes }));
  }

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar>
        <Button onClick={() => mutate(recipe)}>
          <Icon name="save" /> Save
        </Button>
      </MenuBar>

      <main>
        <RecipeHeader recipe={recipe} onSave={handleSave} />

        <RecipeBar />

        <RecipeIngredients ingredients={recipe.ingredients} onSave={handleSave} />

        <RecipeMedia recipe={recipe} />

        <RecipeInstructions instructions={recipe.instructions} onSave={handleSave} />

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
