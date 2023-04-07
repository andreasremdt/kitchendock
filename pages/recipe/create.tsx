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
import Container from "@/components/container";

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

      <MenuBar>
        <Button onClick={() => mutate(recipe)}>
          <Icon name="save" /> Save
        </Button>
      </MenuBar>

      <main>
        <RecipeHeader recipe={recipe} onSave={(changes) => setRecipe((prev) => ({ ...prev, ...changes }))} />

        <RecipeBar />

        <RecipeIngredients
          ingredients={recipe.ingredients}
          onSave={(changes) => setRecipe((prev) => ({ ...prev, ...changes }))}
        />

        <RecipeMedia recipe={recipe} />

        <RecipeInstructions
          instructions={recipe.instructions}
          onSave={(changes) => setRecipe((prev) => ({ ...prev, ...changes }))}
        />

        <Container as="footer" className="flex justify-center gap-x-2 mb-16">
          <Button href="/">
            <Icon name="cancel" /> Cancel
          </Button>
          <Button variant="solid">
            <Icon name="save" /> Save
          </Button>
        </Container>
      </main>
    </>
  );
}
