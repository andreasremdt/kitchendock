import { Recipe } from "@/types";
import InlineEditable from "@/components/inline-editable";
import Card from "@/components/card";
import Skeleton from "@/components/skeleton";
import Container from "@/components/container";

type Props = {
  recipe?: Partial<Recipe>;
  locked?: boolean;
  loading?: boolean;
  onSave: (data: Partial<Recipe>) => void;
};

export default function RecipeHeader({ recipe = {}, locked, loading, onSave }: Props) {
  return (
    <header className="bg-banner h-[450px] border-b border-primary-300 flex items-center">
      <Container as={Card} className="pb-8">
        {loading ? (
          <>
            <Skeleton className="w-1/2 h-16 mt-6 mb-8 mx-auto" />
            <Skeleton className="w-32 h-8 mb-6 mx-auto" />
            <Skeleton className="w-3/4 h-6 mb-2 mx-auto" />
            <Skeleton className="w-2/4 h-6 mb-8 mx-auto" />
          </>
        ) : (
          <>
            <InlineEditable
              disabled={locked}
              variant="h1"
              as="h1"
              className="-translate-y-8"
              onSave={(title) => onSave({ title })}
            >
              {recipe.title}
            </InlineEditable>

            <InlineEditable disabled={locked} variant="h4" className="mb-4" onSave={(category) => onSave({ category })}>
              {recipe.category || (locked ? "" : "Select a category...")}
            </InlineEditable>

            <InlineEditable disabled={locked} onSave={(description) => onSave({ description })}>
              {recipe.description || (locked ? "" : "Write a description...")}
            </InlineEditable>
          </>
        )}
      </Container>
    </header>
  );
}
