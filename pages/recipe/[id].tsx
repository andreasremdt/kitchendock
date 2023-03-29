import { useState } from "react";
import Head from "next/head";
import recipes from "../../lib/data";
import RecipeBar from "@/components/recipe-bar";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";
import RecipeHeader from "@/components/recipe-header";
import RecipeMenuBar from "@/components/recipe-menu-bar";
import RecipeMedia from "@/components/recipe-media";

export default function Recipe() {
  const recipe = recipes[1];
  const [editing, setEditing] = useState(false);

  return (
    <>
      <Head>
        <title>{recipe.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RecipeMenuBar editing={editing} onEdit={() => setEditing(!editing)} />

        <RecipeHeader editing={editing} recipe={recipe} />

        <RecipeBar editing={editing} />

        <RecipeIngredients editing={editing} ingredients={recipe.ingredients!} />

        <RecipeMedia editing={editing} recipe={recipe} />

        <RecipeInstructions editing={editing} instructions={recipe.instructions!} />
      </main>
    </>
  );
}
