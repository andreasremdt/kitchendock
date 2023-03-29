import Head from "next/head";
import Image from "next/image";
import Icon from "@/components/icon";
import recipes from "../../lib/data";
import Typography from "@/components/typography";
import Button from "@/components/button";
import RecipeBar from "@/components/recipe-bar";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";

export default function Recipe() {
  const recipe = recipes[1];

  return (
    <>
      <Head>
        <title>Millionaires Shortbread</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-primary-50">
          <div className="container mx-auto py-2">
            <Button href="/">
              <Icon name="chevronLeft" /> Go Back
            </Button>
          </div>
        </div>
        <header className="banner py-32 border-y border-primary-300">
          <div className="bg-white border border-primary-300 max-w-4xl px-16 pb-12 w-max mx-auto text-center">
            <Typography variant="h1" as="h1" className="-translate-y-8">
              {recipe.title}
            </Typography>
            {recipe.category && (
              <Typography variant="h4" className="mb-4">
                {recipe.category}
              </Typography>
            )}
            {recipe.description && <Typography>{recipe.description}</Typography>}
          </div>
        </header>

        <RecipeBar />

        <RecipeIngredients ingredients={recipe.ingredients!} />

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

        <RecipeInstructions instructions={recipe.instructions!} />
      </main>
    </>
  );
}
