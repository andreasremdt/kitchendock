import { useState } from "react";
import { Instructions } from "@/types";
import Typography from "@/components/typography";
import Icon from "@/components/icon";
import Button from "@/components/button";
import Editor from "@/components/editor";
import EmptyState from "@/components/empty-state";
import { JSONContent } from "@tiptap/react";
import cx from "classnames";
import { parseInstructions } from "@/lib/parser";

type Props = {
  instructions?: Instructions;
  editing: boolean;
  onSave?: (content?: JSONContent) => void;
};

export default function RecipeInstructions({ instructions, editing, onSave }: Props) {
  const [selection, setSelection] = useState(false);
  const parsedInstructions = parseInstructions(instructions);

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
            onSave?.(content);
            setSelection(false);
          }}
          value={instructions}
        />
      ) : parsedInstructions.length > 0 ? (
        <ol className="instructions-list">
          {parsedInstructions.map((instruction, index) => (
            <li
              key={instruction.content + index}
              className={cx("last-of-type:mb-0 flex gap-x-8", {
                "instruction mb-12": instruction.type !== "heading",
                "mb-6 pl-14": instruction.type === "heading",
              })}
            >
              {instruction.type === "heading" ? (
                <Typography as="h3" variant="h5">
                  {instruction.content}
                </Typography>
              ) : (
                instruction.content
              )}
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
