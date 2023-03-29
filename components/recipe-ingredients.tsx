import { useState } from "react";
import Typography from "@/components/typography";
import { Ingredients } from "@/types";
import Editor from "@/components/editor";
import Icon from "@/components/icon";
import Button from "@/components/button";
import EmptyState from "@/components/empty-state";
import { JSONContent } from "@tiptap/react";
import { parseIngredients } from "@/lib/parser";

type Props = {
  ingredients?: Ingredients;
  editing: boolean;
  onSave?: (content?: JSONContent) => void;
};

export default function RecipeIngredients({ ingredients, editing, onSave }: Props) {
  const [selection, setSelection] = useState(false);
  const parsedIngredients = parseIngredients(ingredients);

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
            onSave?.(content);
            setSelection(false);
          }}
          value={ingredients}
        />
      ) : parsedIngredients.length > 0 ? (
        <div className="flex mt-6 gap-8 flex-wrap">
          {parseIngredients(ingredients).map((group, index) => (
            <div key={group.content + index} className="flex-1 basis-1/4 flex-wrap">
              {group.content && (
                <Typography as="h3" variant="h5" className="mb-3">
                  {group.content}
                </Typography>
              )}

              <ul>
                {group.children.map((ingredient, index) => (
                  <li
                    className="py-2 border-b border-primary-300 last-of-type:border-b-0"
                    key={ingredient.content + index}
                  >
                    {ingredient.content}
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
