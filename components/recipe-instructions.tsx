import { useState } from "react";
import { Instructions, Recipe } from "@/types";
import { parseInstructions } from "@/lib/parser";
import RecipeInstructionsList from "@/components/recipe-instructions-list";
import { Container, Typography, Editor } from "@/components";

type Props = {
  instructions?: Instructions;
  locked?: boolean;
  loading?: boolean;
  onSave: (content: Partial<Recipe>) => void;
};

export default function RecipeInstructions({ instructions, locked, loading, onSave }: Props) {
  const [editing, setEditing] = useState(false);

  return (
    <Container as="section" className="my-12">
      <Typography as="h2" variant="h3" className="mb-12 flex gap-x-1 justify-center">
        Instructions
      </Typography>

      {editing ? (
        <Editor
          onCancel={() => setEditing(false)}
          placeholder="Wash and cut your vegetables into small pieces. You got it from here, just believe in yourself..."
          onSave={(content) => {
            onSave({ instructions: content });
            setEditing(false);
          }}
          value={instructions}
        />
      ) : (
        <RecipeInstructionsList
          loading={loading}
          locked={locked}
          onEdit={() => setEditing(true)}
          instructions={parseInstructions(instructions)}
        />
      )}
    </Container>
  );
}
