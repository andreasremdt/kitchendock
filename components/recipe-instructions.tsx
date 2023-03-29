import { useState } from "react";
import { Instructions } from "@/types";
import Typography from "@/components/typography";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Editor from "@/components/editor";
import EmptyState from "@/components/empty-state";

type Props = {
  instructions: Instructions;
  editing: boolean;
};

export default function RecipeInstructions({ instructions, editing }: Props) {
  const [selection, setSelection] = useState(false);

  return (
    <section className="max-w-lg mx-auto my-12">
      <Typography as="h2" variant="h3" className="mb-6 flex gap-x-1">
        Instructions
        {editing && !selection && (
          <Button title="Edit" onClick={() => setSelection(true)}>
            <Icon name="edit" width={24} height={24} />
          </Button>
        )}
      </Typography>

      {selection && editing ? (
        <Editor
          onCancel={() => setSelection(false)}
          placeholder="Wash and cut your vegetables into small pieces. You got it from here, just believe in yourself..."
          onSave={(content) => {
            console.log(content);
            setSelection(false);
          }}
        />
      ) : instructions.length > 0 ? (
        <ol className="instructions-list">
          {instructions.map((instruction) => (
            <li key={instruction} className="mb-12 last-of-type:mb-0 flex gap-x-8">
              {instruction}
            </li>
          ))}
        </ol>
      ) : (
        <EmptyState
          icon="list"
          text="This recipe has no instructions, yet. Start adding your instructions now by clicking on the below button."
        >
          <Button onClick={() => setSelection(true)}>Add Instructions</Button>
        </EmptyState>
      )}
    </section>
  );
}
