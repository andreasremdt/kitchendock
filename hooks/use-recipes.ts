import fetcher from "@/lib/fetcher";
import { Recipe } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useRecipes() {
  const query = useQuery<Recipe[]>({ queryKey: ["recipes"], queryFn: () => fetcher("GET", "/api/recipes") });

  return {
    ...query,
    recipes: query.data,
  };
}
