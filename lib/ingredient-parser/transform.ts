import { IngredientToken, IngredientTokenType, IngredientNodeType, IngredientNode } from "@/types";
import getUnit from "./extract";

export default function transform(input: IngredientToken[]) {
  const transformed: IngredientNode[] = [];

  for (const token of input) {
    if (token.type === IngredientTokenType.Letter) {
      const unit = getUnit(token.value);

      if (unit) {
        transformed.push({
          type: IngredientNodeType.Unit,
          value: unit,
        });
      } else {
        transformed.push({
          type: IngredientNodeType.Ingredient,
          value: token.value,
        });
      }
    }

    if (token.type === IngredientTokenType.Digit) {
      if (Number.isInteger(token.value)) {
        transformed.push({
          type: IngredientNodeType.Quantity,
          value: parseInt(token.value, 10),
        });
      } else {
        transformed.push({
          type: IngredientNodeType.Quantity,
          value: parseFloat(token.value.replaceAll(/,/g, ".")),
        });
      }
    }
  }

  return transformed;
}
