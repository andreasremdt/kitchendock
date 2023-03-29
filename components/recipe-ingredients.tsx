import { useState } from "react";
import Typography from "@/components/typography";
import { Ingredients } from "@/types";
import Editor from "@/components/editor";
import Icon from "@/components/icon";
import Button from "@/components/button";
import EmptyState from "@/components/empty-state";

type Props = {
  ingredients: Ingredients;
  editing: boolean;
};

export default function RecipeIngredients({ ingredients, editing }: Props) {
  const [selection, setSelection] = useState(false);

  return (
    <section className="container mx-auto py-12">
      <Typography as="h2" variant="h3" className="mb-6 flex gap-x-1">
        Ingredients
        {editing && !selection && (
          <Button title="Edit" onClick={() => setSelection(true)}>
            <Icon name="edit" width={24} height={24} />
          </Button>
        )}
      </Typography>
      {selection && editing ? (
        <Editor
          placeholder={`100g tomatoes
3 big paprika
100ml water
...`}
          onCancel={() => setSelection(false)}
          onSave={(content) => {
            console.log(content);
            setSelection(false);
          }}
        />
      ) : ingredients.length > 0 ? (
        <div className="flex mt-6 gap-x-8 flex-wrap">
          {ingredients.map((group) => (
            <div key={group.title} className="flex-1">
              {group.title && (
                <Typography as="h3" variant="h5" className="mb-3">
                  {group.title}
                </Typography>
              )}

              <ul>
                {group.children.map((ingredient) => (
                  <li className="py-2 border-b border-primary-300 last-of-type:border-b-0" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon="list"
          text="This recipe has no ingredients, yet. Start adding your ingredients now by clicking on the below button."
        >
          <Button onClick={() => setSelection(true)}>Add Ingredients</Button>
        </EmptyState>
      )}
    </section>
  );
}
