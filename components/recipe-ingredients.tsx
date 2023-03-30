import { useState } from "react";
import Typography from "@/components/typography";
import { Ingredients, Recipe } from "@/types";
import Editor from "@/components/editor";
import { parseIngredients } from "@/lib/parser";
import RecipeIngredientList from "./recipe-ingredient-list";

type Props = {
  ingredients?: Ingredients;
  locked?: boolean;
  loading?: boolean;
  onSave: (data: Partial<Recipe>) => void;
};

export default function RecipeIngredients({ ingredients, locked, loading, onSave }: Props) {
  const [editing, setEditing] = useState(false);

  return (
    <section className="container mx-auto py-12">
      <Typography as="h2" variant="h3" className="mb-12 flex gap-x-1 justify-center">
        Ingredients
      </Typography>

      {editing ? (
        <Editor
          placeholder={`100g tomatoes
3 big paprika
100ml water
...`}
          onCancel={() => setEditing(false)}
          onSave={(content) => {
            onSave({ ingredients: content });
            setEditing(false);
          }}
          value={ingredients}
        />
      ) : (
        <RecipeIngredientList
          loading={loading}
          locked={locked}
          onEdit={() => setEditing(true)}
          ingredients={parseIngredients(ingredients)}
        />
      )}
    </section>
  );
}
