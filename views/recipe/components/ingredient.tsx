import usePreferences from "@/hooks/use-preferences";
import parse from "@/lib/ingredient-parser";

type Props = {
  value: string;
};

export default function Ingredient({ value }: Props) {
  const { preferences } = usePreferences();
  const ingredient = parse(value, preferences);

  return (
    <li className="py-2 border-b border-primary-300 last-of-type:border-b-0">
      {ingredient.quantity && <span className="font-bold">{ingredient.quantity}</span>}{" "}
      {ingredient.unit && <span className="font-bold">{ingredient.unit}</span>} <span>{ingredient.content}</span>
    </li>
  );
}
