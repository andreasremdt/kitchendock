import { useState, KeyboardEvent } from "react";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Icon from "@/components/icon";
import Input from "@/components/input";
import { Recipe } from "@/types";

type Props = {
  recipe: Pick<Recipe, "title" | "category" | "description">;
  editing: boolean;
  onSave?: (data: Partial<Recipe>) => void;
};

type Selection = "title" | "description" | "category" | null;

export default function RecipeHeader({ recipe, editing, onSave }: Props) {
  const [selection, setSelection] = useState<Selection>(null);
  const [title, setTitle] = useState(() => recipe.title);
  const [description, setDescription] = useState(() => recipe.description);
  const [category, setCategory] = useState(() => recipe.category);

  function handleSave() {
    onSave?.({ title, description, category });
    setSelection(null);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSave();
    }

    if (event.key === "Escape") {
      setSelection(null);

      if (title !== recipe.title) setTitle(recipe.title);
      if (description !== recipe.description) setDescription(recipe.description);
      if (category !== recipe.category) setCategory(recipe.category);
    }
  }

  return (
    <header className="bg-banner py-32 border-b border-primary-300">
      <div className="bg-white border border-primary-300 max-w-4xl w-full px-16 pb-12 mx-auto text-center">
        {selection === "title" && editing ? (
          <div className="relative w-full max-w-lg mt-4 mb-8 mx-auto">
            <Input
              variant="big"
              value={title}
              onChange={(event) => setTitle(event.currentTarget.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2" onClick={handleSave}>
              <Icon name="save" width={28} height={28} />
            </Button>
          </div>
        ) : (
          <Typography variant="h1" as="h1" className="-translate-y-8 relative">
            {title}
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
            <Input
              className="border border-primary-300 h-10 px-2 outline-none w-full"
              value={category}
              autoFocus
              onChange={(event) => setCategory(event.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2" onClick={handleSave}>
              <Icon name="save" />
            </Button>
          </div>
        ) : (
          <Typography variant="h4" className="mb-4 w-max mx-auto relative">
            {category || "Uncategorized"}
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
            <Input
              className="border border-primary-300 h-10 px-2 outline-none w-full"
              value={description}
              autoFocus
              onChange={(event) => setDescription(event.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2" onClick={handleSave}>
              <Icon name="save" />
            </Button>
          </div>
        ) : (
          <Typography className="mb-4 w-max mx-auto relative">
            {description || "No description, yet..."}
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
