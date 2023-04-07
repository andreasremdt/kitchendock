import cx from "classnames";
import { Node } from "@/types";
import { Icon, Skeleton, EmptyState, Button, Typography } from "@/components";

type Props = {
  loading?: boolean;
  locked?: boolean;
  instructions: Node[];
  onEdit: () => void;
};

export default function RecipeInstructionsList({ instructions, loading, locked, onEdit }: Props) {
  if (loading) {
    return (
      <div className="max-w-lg mx-auto w-full">
        <Skeleton className="h-8 w-2/4 bg-primary-300 mb-4" />
        <Skeleton className="h-12 bg-primary-200 mb-4" />
        <Skeleton className="h-8 w-2/3 bg-primary-200 mb-4" />
        <Skeleton className="h-16 bg-primary-200" />
      </div>
    );
  }

  if (instructions.length <= 0) {
    return (
      <EmptyState
        icon="list"
        text="This recipe has no instructions, yet. Start adding your instructions now by clicking on the below button."
      >
        <Button onClick={onEdit}>Add Instructions</Button>
      </EmptyState>
    );
  }

  return (
    <div className={cx({ "relative group hover:scale-[1.01] transition-transform": !locked })}>
      {!locked && (
        <button
          type="button"
          className="absolute opacity-0 transition-opacity group-hover:opacity-100 inset-0 bg-primary-200/50 border border-primary-300 w-full"
          onClick={onEdit}
        >
          <Icon
            name="edit"
            width={48}
            height={48}
            className="text-primary-600 p-2 border border-primary-300 bg-primary-50 absolute top-1 right-1"
          />
        </button>
      )}

      <ol className="instructions-list max-w-lg mx-auto">
        {instructions.map((instruction, index) => (
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
    </div>
  );
}
