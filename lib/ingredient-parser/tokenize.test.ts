import { expect, test } from "vitest";

import { tokenize } from "./tokenize";
import { IngredientTokenType } from "@/types";

test("should return an array", () => {
  expect(Array.isArray(tokenize(""))).toEqual(true);
});

test("should tokenize single digits", () => {
  expect(tokenize("1")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "1",
      },
    ],
  ]);
});

test("should tokenize double digits", () => {
  expect(tokenize("23")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "23",
      },
    ],
  ]);
});

test("should tokenize floats", () => {
  expect(tokenize("3.5")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "3.5",
      },
    ],
  ]);
  expect(tokenize("3,5")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "3,5",
      },
    ],
  ]);
});

test("should ignore trailing or leading dots and commas", () => {
  expect(tokenize("3.")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "3",
      },
    ],
  ]);
  expect(tokenize(".3.5.")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "3.5",
      },
    ],
  ]);
});

test("should tokenize multiple digits", () => {
  expect(tokenize("23 4 14.3")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "23",
      },
      {
        type: IngredientTokenType.Digit,
        value: "4",
      },
      {
        type: IngredientTokenType.Digit,
        value: "14.3",
      },
    ],
  ]);
});

test("should tokenize single letters", () => {
  expect(tokenize("a")).toEqual([
    [
      {
        type: IngredientTokenType.Letter,
        value: "a",
      },
    ],
  ]);
  expect(tokenize("A")).toEqual([
    [
      {
        type: IngredientTokenType.Letter,
        value: "A",
      },
    ],
  ]);
});

test("should tokenize single words", () => {
  expect(tokenize("example")).toEqual([
    [
      {
        type: IngredientTokenType.Letter,
        value: "example",
      },
    ],
  ]);
  expect(tokenize("Example")).toEqual([
    [
      {
        type: IngredientTokenType.Letter,
        value: "Example",
      },
    ],
  ]);
});

test("should tokenize multiple words", () => {
  expect(tokenize("This is a sentence")).toEqual([
    [
      {
        type: IngredientTokenType.Letter,
        value: "This",
      },
      {
        type: IngredientTokenType.Letter,
        value: "is",
      },
      {
        type: IngredientTokenType.Letter,
        value: "a",
      },
      {
        type: IngredientTokenType.Letter,
        value: "sentence",
      },
    ],
  ]);
});

test("should tokenize words and digits", () => {
  expect(tokenize("20mg water")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "20",
      },
      {
        type: IngredientTokenType.Letter,
        value: "mg",
      },
      {
        type: IngredientTokenType.Letter,
        value: "water",
      },
    ],
  ]);
});

test("should create an array for each new line", () => {
  const instructions = `20mg water
1 tablespoon salt`;

  expect(tokenize(instructions)).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "20",
      },
      {
        type: IngredientTokenType.Letter,
        value: "mg",
      },
      {
        type: IngredientTokenType.Letter,
        value: "water",
      },
    ],
    [
      {
        type: IngredientTokenType.Digit,
        value: "1",
      },
      {
        type: IngredientTokenType.Letter,
        value: "tablespoon",
      },
      {
        type: IngredientTokenType.Letter,
        value: "salt",
      },
    ],
  ]);
});

test("should ignore whitespace", () => {
  const instructions = `
    
    20mg       water
    1 tablespoon      salt
    `;

  expect(tokenize(instructions).length).toEqual(2);
  expect(tokenize(instructions)).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "20",
      },
      {
        type: IngredientTokenType.Letter,
        value: "mg",
      },
      {
        type: IngredientTokenType.Letter,
        value: "water",
      },
    ],
    [
      {
        type: IngredientTokenType.Digit,
        value: "1",
      },
      {
        type: IngredientTokenType.Letter,
        value: "tablespoon",
      },
      {
        type: IngredientTokenType.Letter,
        value: "salt",
      },
    ],
  ]);
});

test("should ignore special characters", () => {
  expect(tokenize("20 mg$ water.")).toEqual([
    [
      {
        type: IngredientTokenType.Digit,
        value: "20",
      },
      {
        type: IngredientTokenType.Letter,
        value: "mg",
      },
      {
        type: IngredientTokenType.Letter,
        value: "water",
      },
    ],
  ]);
});
