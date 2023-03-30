import Skeleton from "@/components/skeleton";
import EmptyState from "@/components/empty-state";
import Button from "@/components/button";
import Typography from "@/components/typography";
import { Recipe } from "@/types";
import Image from "next/image";
import Icon from "@/components/icon";
import Card from "@/components/card";

type Props = {
  loading?: boolean;
  recipes?: Recipe[];
};

export default function RecipeList({ recipes, loading }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {new Array(4).fill(null).map((_, index) => (
          <Card key={index}>
            <Skeleton className="mb-2 aspect-video flex justify-center items-center">
              <Icon name="image" className="text-primary-200" width={56} height={56} />
            </Skeleton>
            <Skeleton className="h-6 mx-4 mb-2" />
            <Skeleton className="h-6 mx-8 mb-4" />
            <Skeleton className="h-4 mx-20 mb-4" />
          </Card>
        ))}
      </div>
    );
  }

  if (!recipes || recipes.length <= 0) {
    return (
      <EmptyState icon="list" text="You don't have any recipes, yet.">
        <Button href="/recipe/create">Create Your First Recipe</Button>
      </EmptyState>
    );
  }

  return (
    <ul className="grid grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Card as="a" href={`/recipe/${recipe.id}`}>
            {recipe.image && (
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={400}
                height={250}
                className="aspect-video object-cover"
              />
            )}
            <div className="p-4 flex flex-col justify-center flex-1">
              <Typography variant="h4" as="h2">
                {recipe.title}
              </Typography>
              {recipe.category && <Typography className="mt-2">{recipe.category}</Typography>}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
