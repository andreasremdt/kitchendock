import { ComponentPropsWithoutRef } from "react";
import Card from "@/components/card";
import Icon from "@/components/icon";
import Skeleton from "@/components/skeleton";

type Props = {
  show?: number;
} & ComponentPropsWithoutRef<"div">;

export default function Loaders({ show = 1, children, ...props }: Props) {
  return <div {...props}>{new Array(show).fill(null).map(() => children)}</div>;
}

Loaders.RecipeCard = function RecipeCard() {
  return (
    <Card>
      <Skeleton className="mb-2 aspect-video flex justify-center items-center">
        <Icon name="image" className="text-primary-200" width={56} height={56} />
      </Skeleton>
      <Skeleton className="h-6 mx-4 mb-2" />
      <Skeleton className="h-6 mx-8 mb-4" />
      <Skeleton className="h-4 mx-20 mb-4" />
    </Card>
  );
};

Loaders.RecipeHeader = function RecipeHeader() {
  return (
    <Loaders className="h-96 border-b border-primary-300 bg-banner flex items-center justify-center">
      <Card className="max-w-4xl w-full mx-auto flex items-center">
        <Skeleton className="w-1/2 h-16 mt-6 mb-8" />
        <Skeleton className="w-32 h-8 mb-6" />
        <Skeleton className="w-3/4 h-6 mb-2" />
        <Skeleton className="w-2/4 h-6 mb-8" />
      </Card>
    </Loaders>
  );
};

Loaders.RecipeIngredients = function RecipeIngredients() {
  return (
    <Loaders className="mt-6 container mx-auto grid grid-cols-3 gap-8">
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
    </Loaders>
  );
};

Loaders.RecipeInstructions = function RecipeInstructions() {
  return (
    <Loaders className="max-w-lg mx-auto w-full">
      <Skeleton className="h-8 w-2/4 bg-primary-300 mb-4" />
      <Skeleton className="h-12 bg-primary-200 mb-4" />
      <Skeleton className="h-8 w-2/3 bg-primary-200 mb-4" />
      <Skeleton className="h-16 bg-primary-200" />
    </Loaders>
  );
};
