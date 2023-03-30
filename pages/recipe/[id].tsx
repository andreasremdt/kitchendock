import { useState } from "react";
import Head from "next/head";
import RecipeBar from "@/components/recipe-bar";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";
import RecipeHeader from "@/components/recipe-header";
import RecipeMedia from "@/components/recipe-media";
import MenuBar from "@/components/menu-bar";
import Button from "@/components/button";
import Icon from "@/components/icon";
import useRecipe from "@/hooks/use-recipe";
import { useRouter } from "next/router";
import { joinQueryParameters } from "@/lib/helpers";
import Loaders from "@/components/loaders";

export default function Recipe() {
  const router = useRouter();
  const { recipe, status } = useRecipe(joinQueryParameters(router.query.id));
  const [editing, setEditing] = useState(false);

  return (
    <>
      <Head>
        <title>{recipe?.title || "Loading..."}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar>
        <Button onClick={() => setEditing(!editing)} selected={editing}>
          <Icon name={editing ? "check" : "fileEdit"} />
          {editing ? "Finish Editing" : "Enable Edit Mode"}
        </Button>
      </MenuBar>

      <main>
        {status === "loading" || !recipe ? (
          <Loaders.RecipeHeader />
        ) : (
          <RecipeHeader editing={editing} recipe={recipe} />
        )}

        <RecipeBar editing={editing} />

        {status === "loading" || !recipe ? (
          <Loaders.RecipeIngredients />
        ) : (
          <RecipeIngredients editing={editing} ingredients={recipe.ingredients} />
        )}

        <RecipeMedia editing={editing} recipe={recipe} />

        {status === "loading" || !recipe ? (
          <Loaders.RecipeInstructions />
        ) : (
          <RecipeInstructions editing={editing} instructions={recipe.instructions} />
        )}
      </main>
    </>
  );
}
