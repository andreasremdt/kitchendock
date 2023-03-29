import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Icon from "@/components/icon";
import recipes from "../../lib/data";
import Button from "@/components/button";
import RecipeBar from "@/components/recipe-bar";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";
import RecipeHeader from "@/components/recipe-header";

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
        <div className="bg-primary-50">
          <div className="container mx-auto py-2 flex">
            <Button href="/">
              <Icon name="chevronLeft" /> Go Back
            </Button>
            <Button className="ml-auto" onClick={() => setEditing(!editing)} selected={editing}>
              <Icon name={editing ? "check" : "fileEdit"} />
              {editing ? "Finish Editing" : "Enable Edit Mode"}
            </Button>
          </div>
        </div>

        <RecipeHeader editing={editing} recipe={recipe} />

        <RecipeBar editing={editing} />

        <RecipeIngredients editing={editing} ingredients={recipe.ingredients!} />

        {recipe.image && (
          <div className="container mx-auto">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={1024}
              height={768}
              className="aspect-video object-cover"
            />
          </div>
        )}

        <RecipeInstructions editing={editing} instructions={recipe.instructions!} />
      </main>
    </>
  );
}
