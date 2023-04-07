import { expect, test } from "vitest";

import { transform } from "./transform";
import { IngredientNodeType, IngredientTokenType } from "@/types";

test("should transform simple numbers to quantities", () => {
  const value = [
    [
      {
        type: IngredientTokenType.Digit,
        value: "20",
      },
      {
        type: IngredientTokenType.Digit,
        value: "1",
      },
      {
        type: IngredientTokenType.Digit,
        value: "0",
      },
    ],
  ];

  expect(transform(value)).toEqual([
    [
      {
        type: IngredientNodeType.Quantity,
        value: 20,
      },
      {
        type: IngredientNodeType.Quantity,
        value: 1,
      },
      {
        type: IngredientNodeType.Quantity,
        value: 0,
      },
    ],
  ]);
});

test("should transform simple floats to quantities", () => {
  const value = [
    [
      {
        type: IngredientTokenType.Digit,
        value: "20,23",
      },
      {
        type: IngredientTokenType.Digit,
        value: "1.1",
      },
      {
        type: IngredientTokenType.Digit,
        value: "234.23.33",
      },
    ],
  ];

  expect(transform(value)).toEqual([
    [
      {
        type: IngredientNodeType.Quantity,
        value: 20.23,
      },
      {
        type: IngredientNodeType.Quantity,
        value: 1.1,
      },
      {
        type: IngredientNodeType.Quantity,
        value: 234.23,
      },
    ],
  ]);
});

test("should transform units correctly", () => {
  const value = [
    [
      {
        type: IngredientTokenType.Letter,
        value: "mg",
      },
      {
        type: IngredientTokenType.Letter,
        value: "MG",
      },
      {
        type: IngredientTokenType.Letter,
        value: "Pounds",
      },
    ],
  ];

  expect(transform(value)).toEqual([
    [
      {
        type: IngredientNodeType.Unit,
        value: "milligram",
      },
      {
        type: IngredientNodeType.Unit,
        value: "milligram",
      },
      {
        type: IngredientNodeType.Unit,
        value: "pound",
      },
    ],
  ]);
});

test("should transform ingredients correctly", () => {
  const value = [
    [
      {
        type: IngredientTokenType.Letter,
        value: "salt",
      },
      {
        type: IngredientTokenType.Letter,
        value: "Peppers",
      },
      {
        type: IngredientTokenType.Letter,
        value: "mgs",
      },
    ],
  ];

  expect(transform(value)).toEqual([
    [
      {
        type: IngredientNodeType.Ingredient,
        value: "salt",
      },
      {
        type: IngredientNodeType.Ingredient,
        value: "Peppers",
      },
      {
        type: IngredientNodeType.Ingredient,
        value: "mgs",
      },
    ],
  ]);
});
