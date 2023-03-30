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
import { Recipe } from "@/types";

export default function ViewRecipe() {
  const router = useRouter();
  const { recipe, status } = useRecipe(joinQueryParameters(router.query.id));
  const [locked, setLocked] = useState(true);

  function handleSave(changes: Partial<Recipe>) {
    console.log(changes);
  }

  return (
    <>
      <Head>
        <title>{recipe?.title || "Loading..."}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar>
        <Button onClick={() => setLocked(!locked)} selected={!locked}>
          <Icon name={locked ? "fileEdit" : "check"} />
          {locked ? "Enable Edit Mode" : "Finish Editing"}
        </Button>
      </MenuBar>

      <main>
        <RecipeHeader locked={locked} onSave={handleSave} loading={status === "loading"} recipe={recipe} />

        <RecipeBar locked={locked} />

        <RecipeIngredients
          locked={locked}
          loading={status === "loading"}
          onSave={handleSave}
          ingredients={recipe.ingredients}
        />

        <RecipeMedia loading={status === "loading"} locked={locked} recipe={recipe} />

        <RecipeInstructions
          loading={status === "loading"}
          onSave={handleSave}
          locked={locked}
          instructions={recipe.instructions}
        />
      </main>
    </>
  );
}
