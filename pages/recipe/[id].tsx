import useRecipe from "@/hooks/use-recipe";
import { useRouter } from "next/router";
import { joinQueryParameters } from "@/lib/helpers";
import useUpdateRecipe from "@/hooks/use-update-recipe";
import RecipeView from "@/views/recipe";

export default function ViewRecipe() {
  const router = useRouter();
  const { recipe, status, onChange } = useRecipe(joinQueryParameters(router.query.id) as string);
  const { mutate } = useUpdateRecipe(joinQueryParameters(router.query.id) as string);

  return <RecipeView recipe={recipe} status={status} onChange={onChange} onSave={() => mutate(recipe!)} />;
}
