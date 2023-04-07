import Head from "next/head";
import { Container, Typography, MenuBar } from "@/components";
import { Recipe } from "@/types";
import RecipeList from "./components/recipe-list";
import CreateRecipeDropdown from "./components/create-recipe-dropdown";

type Props = {
  recipes: Recipe[] | undefined;
  status: "loading" | "error" | "success";
};

export default function HomeView({ recipes, status }: Props) {
  return (
    <>
      <Head>
        <title>My Recipes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />

      <Container as="main">
        <header className="text-center py-16">
          <Typography variant="h1" as="h1" className="mb-4">
            My Recipes
          </Typography>

          <CreateRecipeDropdown />
        </header>

        <RecipeList recipes={recipes} loading={status === "loading"} />
      </Container>
    </>
  );
}
