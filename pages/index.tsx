import Head from "next/head";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Icon from "@/components/icon";
import MenuBar from "@/components/menu-bar";
import useRecipes from "@/hooks/use-recipes";
import RecipeList from "@/components/recipe-list";

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

        <RecipeList recipes={recipes} loading={status === "loading"} />
      </main>
    </>
  );
}
