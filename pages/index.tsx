import Head from "next/head";

import recipes from "../lib/data";
import Typography from "@/components/typography";
import Card from "@/components/card";
import Button from "@/components/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Recipes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <header className="text-center py-16">
          <Typography variant="h1" as="h1" className="mb-4">
            My Recipes
          </Typography>
          <Button variant="solid" href="/recipe/create">
            Create New Recipe
          </Button>
        </header>

        <ul className="grid grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Card {...recipe} href={`/recipe/${recipe.id}`} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
