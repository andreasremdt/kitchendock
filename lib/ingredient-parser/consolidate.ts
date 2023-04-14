import { Ingredient, IngredientNode, IngredientNodeType } from "@/types";

export default function consolidate(nodes: IngredientNode[]) {
  const ingredient: Ingredient = {
    content: "",
  };

  let cursor = 0;

  while (cursor < nodes.length) {
    const node = nodes[cursor];

    if (node.type === IngredientNodeType.Quantity) {
      const next = nodes[cursor + 1];

      if (!next) {
        ingredient.content += node.value;
      } else if (next.type === IngredientNodeType.Unit) {
        ingredient.quantity = node.value;
        ingredient.unit = next.value as string;
        cursor += 2;

        continue;
      } else if (next.type === IngredientNodeType.Ingredient) {
        ingredient.quantity = node.value;
      }
    }

    if (node.type === IngredientNodeType.Unit && !ingredient.unit) {
      ingredient.unit = node.value;
    }

    if (node.type === IngredientNodeType.Ingredient && !ingredient.content) {
      ingredient.content = node.value;
    }

    cursor++;
  }

  return ingredient;
}
