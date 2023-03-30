import fetcher from "@/lib/fetcher";
import { Recipe as RawRecipe } from "@prisma/client";
import { Recipe } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useRecipe(id?: string) {
  const query = useQuery<RawRecipe>({
    queryKey: ["recipes", id],
    queryFn: () => fetcher("GET", `/api/recipes/${id}`),
    enabled: Boolean(id),
  });

  return {
    ...query,
    recipe: {
      ...query.data,
      instructions: JSON.parse(query.data?.instructions || "[]"),
      ingredients: JSON.parse(query.data?.ingredients || "[]"),
    } as Recipe,
  };
}
