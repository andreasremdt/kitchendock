import Head from "next/head";
import { Button, Icon, MenuBar } from "@/components";
import { Recipe } from "@/types";
import RecipeHeader from "./components/recipe-header";
import RecipeBar from "./components/recipe-bar";
import RecipeIngredients from "./components/recipe-ingredients";
import RecipeMedia from "./components/recipe-media";
import RecipeInstructions from "./components/recipe-instructions";
import RecipeFooter from "./components/recipe-footer";

type Props = {
  recipe?: Partial<Recipe>;
  onSave: () => void;
  onChange: (data: Partial<Recipe>) => void;
  status?: "loading" | "error" | "success";
};

export default function RecipeView({ recipe, onSave, onChange, status }: Props) {
  return (
    <>
      <Head>
        <title>{recipe?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar>
        <Button onClick={onSave}>
          <Icon name="save" /> Save
        </Button>
      </MenuBar>

      <main className="mb-24">
        <RecipeHeader recipe={recipe} onSave={onSave} loading={status === "loading"} />

        <RecipeBar />

        <RecipeIngredients ingredients={recipe?.ingredients} onChange={onChange} loading={status === "loading"} />

        <RecipeMedia recipe={recipe} loading={status === "loading"} />

        <RecipeInstructions instructions={recipe?.instructions} onChange={onChange} loading={status === "loading"} />

        <RecipeFooter onSave={onSave} />
      </main>
    </>
  );
}
