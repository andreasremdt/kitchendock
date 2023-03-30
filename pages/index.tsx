import Head from "next/head";
import Image from "next/image";
import Typography from "@/components/typography";
import Card from "@/components/card";
import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Icon from "@/components/icon";
import MenuBar from "@/components/menu-bar";
import ErrorState from "@/components/error-state";
import useRecipes from "@/hooks/use-recipes";
import EmptyState from "@/components/empty-state";
import Loaders from "@/components/loaders";

export default function Home() {
  const { recipes, status } = useRecipes();

  return (
    <>
      <Head>
        <title>My Recipes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />

      <main className="container mx-auto">
        <header className="text-center py-16">
          <Typography variant="h1" as="h1" className="mb-4">
            My Recipes
          </Typography>

          <div className="flex items-center gap-x-px justify-center">
            <Button variant="solid" href="/recipe/create">
              Create New Recipe
            </Button>
            <Dropdown>
              <Dropdown.Button as={Button} title="Options" variant="solid">
                <Icon name="chevronDown" />
              </Dropdown.Button>
              <Dropdown.Items className="right-0">
                <Dropdown.Item>
                  {({ active }) => (
                    <Button className="py-2 px-4" selected={active} href="/recipe/create">
                      <Icon name="draft" width={16} height={16} /> Create From Scratch
                    </Button>
                  )}
                </Dropdown.Item>
                <Dropdown.Item>
                  {({ active }) => (
                    <Button className="py-2 px-4" selected={active} href="/recipe/create">
                      <Icon name="globe" width={16} height={16} /> Import From Website
                    </Button>
                  )}
                </Dropdown.Item>
                <Dropdown.Item>
                  {({ active }) => (
                    <Button className="py-2 px-4" selected={active} href="/recipe/create">
                      <Icon name="image" width={16} height={16} /> Import From Photo
                    </Button>
                  )}
                </Dropdown.Item>
              </Dropdown.Items>
            </Dropdown>
          </div>
        </header>

        {status === "loading" ? (
          <Loaders className="grid grid-cols-4 gap-4" show={4}>
            <Loaders.RecipeCard />
          </Loaders>
        ) : status === "error" ? (
          <ErrorState onClick={() => location.reload()}>
            Yikes! Something went wrong trying to get your recipes. Please try again later.
          </ErrorState>
        ) : !recipes || recipes?.length === 0 ? (
          <EmptyState icon="list" text="You don't have any recipes, yet.">
            <Button href="/recipe/create">Create Your First Recipe</Button>
          </EmptyState>
        ) : (
          <ul className="grid grid-cols-4 gap-4">
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <Card as="a" href={`/recipe/${recipe.id}`}>
                  {recipe.image && (
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={400}
                      height={250}
                      className="aspect-video object-cover"
                    />
                  )}
                  <div className="p-4 flex flex-col justify-center flex-1">
                    <Typography variant="h4" as="h2">
                      {recipe.title}
                    </Typography>
                    {recipe.category && <Typography className="mt-2">{recipe.category}</Typography>}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
