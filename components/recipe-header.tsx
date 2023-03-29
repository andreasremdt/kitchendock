import { useState } from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Icon from "@/components/icon";
import { Recipe } from "@/types";

type Props = {
  recipe: Partial<Recipe>;
  editing: boolean;
};

type Selection = "title" | "description" | "category" | null;

export default function RecipeHeader({ recipe, editing }: Props) {
  const [selection, setSelection] = useState<Selection>(null);

  return (
    <header className="bg-banner py-32 border-b border-primary-300">
      <div className="bg-white border border-primary-300 max-w-4xl w-full px-16 pb-12 mx-auto text-center">
        {selection === "title" && editing ? (
          <div className="relative w-full max-w-lg mt-4 mb-8 mx-auto">
            <input
              className="border border-primary-300 h-16 px-4 font-sans outline-none  w-full text-2xl"
              defaultValue={recipe.title}
              autoFocus
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setSelection(null)}>
              <Icon name="save" width={28} height={28} />
            </Button>
          </div>
        ) : (
          <Typography variant="h1" as="h1" className="-translate-y-8 relative">
            {recipe.title}
            {editing && (
              <Button
                title="Edit"
                onClick={() => setSelection("title")}
                className="absolute -right-10 top-1/2 -translate-y-1/2"
              >
                <Icon name="edit" width={32} height={32} />
              </Button>
            )}
          </Typography>
        )}

        {selection === "category" && editing ? (
          <div className="relative w-full max-w-lg mb-4 mx-auto">
            <input
              className="border border-primary-300 h-10 px-2 outline-none w-full"
              defaultValue={recipe.category}
              autoFocus
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setSelection(null)}>
              <Icon name="save" />
            </Button>
          </div>
        ) : (
          <Typography variant="h4" className="mb-4 w-max mx-auto relative">
            {recipe.category || "Uncategorized"}
            {editing && (
              <Button
                title="Edit"
                onClick={() => setSelection("category")}
                className="absolute -right-10 top-1/2 -translate-y-1/2"
              >
                <Icon name="edit" />
              </Button>
            )}
          </Typography>
        )}

        {selection === "description" && editing ? (
          <div className="relative w-full max-w-lg mt-4 mx-auto">
            <input
              className="border border-primary-300 h-10 px-2 outline-none w-full"
              defaultValue={recipe.description}
              autoFocus
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setSelection(null)}>
              <Icon name="save" />
            </Button>
          </div>
        ) : (
          <Typography className="mb-4 w-max mx-auto relative">
            {recipe.description || "No description, yet..."}
            {editing && (
              <Button
                title="Edit"
                onClick={() => setSelection("description")}
                className="absolute -right-10 top-1/2 -translate-y-1/2"
              >
                <Icon name="edit" />
              </Button>
            )}
          </Typography>
        )}
      </div>
    </header>
  );
}
