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

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState<Omit<Recipe, "id">>({
    title: "Untitled Recipe",
    description: "",
    category: "",
    image: undefined,
    ingredients: [],
    instructions: [],
  });

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RecipeMenuBar onSave={() => {}} />

        <RecipeHeader editing recipe={recipe} />

        <RecipeBar editing />

        <RecipeIngredients editing ingredients={recipe.ingredients!} />

        <RecipeMedia editing recipe={recipe} />

        <RecipeInstructions editing instructions={recipe.instructions!} />

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