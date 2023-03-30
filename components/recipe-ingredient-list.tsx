import Skeleton from "@/components/skeleton";
import EmptyState from "@/components/empty-state";
import Button from "@/components/button";
import Typography from "@/components/typography";
import { ParsedIngredient } from "@/types";
import Icon from "@/components/icon";
import cx from "classnames";

type Props = {
  loading?: boolean;
  locked?: boolean;
  ingredients: ParsedIngredient[];
  onEdit: () => void;
};

export default function RecipeIngredientList({ ingredients, loading, locked, onEdit }: Props) {
  if (loading) {
    return (
      <div className="mt-6 container mx-auto grid grid-cols-3 gap-8">
        <div>
          <Skeleton className="h-8 bg-primary-300 mb-3" />
          <Skeleton className="h-6 bg-primary-200 mb-3 w-2/5" />
          <Skeleton className="h-6 bg-primary-200 mb-3" />
          <Skeleton className="h-6 bg-primary-200 mb-3 w-1/4" />
          <Skeleton className="h-6 bg-primary-200 mb-3 w-2/3" />
        </div>
        <div>
          <Skeleton className="h-8 bg-primary-300 mb-3" />
          <Skeleton className="h-6 bg-primary-200 mb-3 w-1/3" />
          <Skeleton className="h-6 bg-primary-200 mb-3" />
          <Skeleton className="h-6 bg-primary-200 mb-3 w-2/4" />
        </div>
      </div>
    );
  }

  if (ingredients.length <= 0) {
    return (
      <EmptyState
        icon="list"
        text="This recipe has no ingredients, yet. Start adding your ingredients now by clicking on the below button."
      >
        <Button onClick={onEdit}>Add Ingredients</Button>
      </EmptyState>
    );
  }

  return (
    <div
      className={cx("grid grid-cols-3 gap-8", { "relative group hover:scale-[1.02] transition-transform": !locked })}
    >
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

      {ingredients.map((group, index) => (
        <ul key={group.content + index}>
          {group.content && (
            <li>
              <Typography as="h3" variant="h5" className="mb-3">
                {group.content}
              </Typography>
            </li>
          )}

          {group.children.map((ingredient, index) => (
            <li className="py-2 border-b border-primary-300 last-of-type:border-b-0" key={ingredient.content + index}>
              {ingredient.content}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
