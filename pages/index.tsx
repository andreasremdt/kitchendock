import useRecipes from "@/hooks/use-recipes";
import HomeView from "@/views/home";

export default function Home() {
  const { recipes, status } = useRecipes();

  return <HomeView recipes={recipes} status={status} />;
}
