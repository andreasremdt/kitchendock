import { isFloatingPoint, isDigit, isLetter, isWhitespace } from "./identify";
import { IngredientToken, IngredientTokenType } from "@/types";

export default function tokenize(input: string) {
  let cursor = 0;
  const tokens: IngredientToken[] = [];

  while (cursor < input.length) {
    const character = input[cursor];

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isDigit(character)) {
      let digit = character;

      while (isDigit(input[++cursor]) || isFloatingPoint(input[cursor])) {
        if (isFloatingPoint(input[cursor]) && !isDigit(input[cursor + 1])) {
          continue;
        }

        digit += input[cursor];
      }

      tokens.push({
        type: IngredientTokenType.Digit,
        value: digit,
      });

      continue;
    }

    if (isLetter(character)) {
      let symbol = character;

      while (isLetter(input[++cursor])) {
        symbol += input[cursor];
      }

      tokens.push({
        type: IngredientTokenType.Letter,
        value: symbol,
      });

      continue;
    }

    cursor++;
  }

  return tokens;
}
