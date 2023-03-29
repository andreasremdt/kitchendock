import { useState } from "react";
import { Instructions } from "@/types";
import Typography from "@/components/typography";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Editor from "@/components/editor";

type Props = {
  instructions: Instructions;
};

export default function RecipeInstructions({ instructions }: Props) {
  const [editing, setEditing] = useState(false);

  return (
    <section className="max-w-lg mx-auto my-12">
      <Typography as="h2" variant="h3" className="mb-6 flex gap-x-1">
        Instructions
        {!editing && (
          <Button title="Edit" onClick={() => setEditing(true)}>
            <Icon name="edit" width={24} height={24} />
          </Button>
        )}
      </Typography>

      {editing ? (
        <Editor
          onCancel={() => setEditing(false)}
          onSave={(content) => {
            console.log(content);
            setEditing(false);
          }}
        />
      ) : (
        <ol className="instructions-list">
          {instructions.map((instruction) => (
            <li key={instruction} className="mb-12 last-of-type:mb-0 flex gap-x-8">
              {instruction}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
