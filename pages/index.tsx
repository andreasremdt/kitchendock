import Head from "next/head";
import recipes from "../lib/data";
import Typography from "@/components/typography";
import Card from "@/components/card";
import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Icon from "@/components/icon";
import MenuBar from "@/components/menu-bar";

export default function Home() {
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
