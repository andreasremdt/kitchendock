import { IngredientToken, IngredientTokenType, IngredientNodeType, IngredientNode } from "@/types";
import getUnit from "./extract";

function handleLetter(transformed: IngredientNode[], token: IngredientToken) {
  const unit = getUnit(token.value);

  if (unit) {
    transformed.push({
      type: IngredientNodeType.Unit,
      value: unit,
    });
  } else {
    const existingValue = transformed.find((entry) => entry.type === IngredientNodeType.Ingredient);

    if (existingValue) {
      existingValue.value += ` ${token.value}`;
    } else {
      transformed.push({
        type: IngredientNodeType.Ingredient,
        value: token.value,
      });
    }
  }
}

function handleDigit(transformed: IngredientNode[], token: IngredientToken) {
  let value: number;

  if (Number.isInteger(token.value)) {
    value = parseInt(token.value, 10);
  } else {
    value = parseFloat(token.value.replaceAll(/,/g, "."));
  }

  transformed.push({
    type: IngredientNodeType.Quantity,
    value,
  });
}

export default function transform(input: IngredientToken[]) {
  const transformed: IngredientNode[] = [];

  for (const token of input) {
    if (token.type === IngredientTokenType.Letter) {
      handleLetter(transformed, token);
    }

    if (token.type === IngredientTokenType.Digit) {
      handleDigit(transformed, token);
    }
  }

  return transformed;
}
