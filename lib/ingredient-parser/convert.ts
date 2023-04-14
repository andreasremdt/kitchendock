import { Ingredient, Preferences } from "@/types";

export default function convert(ingredient: Ingredient, preferences: Preferences) {
  if (ingredient.quantity) {
    ingredient.quantity = ingredient.quantity * preferences.serves;
  }

  return ingredient;
}
