import { useState } from "react";
import { Ingredients, Recipe } from "@/types";
import { parseIngredients } from "@/lib/parser";
import RecipeIngredientList from "@/components/recipe-ingredient-list";
import { Container, Editor, Typography } from "@/components";

type Props = {
  ingredients?: Ingredients;
  locked?: boolean;
  loading?: boolean;
  onSave: (data: Partial<Recipe>) => void;
};

export default function RecipeIngredients({ ingredients, locked, loading, onSave }: Props) {
  const [editing, setEditing] = useState(false);

  return (
    <Container as="section" className="py-12">
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
    </Container>
  );
}
