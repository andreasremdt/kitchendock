import { expect, test } from "vitest";

import { isLetter, isWhitespace, isDigit, isDot, isComma, isFloatingPoint } from "./identify";

test("should recognize letters", () => {
  expect(isLetter("a")).toEqual(true);
  expect(isLetter("Z")).toEqual(true);
  expect(isLetter("1")).toEqual(false);
  expect(isLetter("$")).toEqual(false);
  expect(isLetter("")).toEqual(false);
  expect(isLetter()).toEqual(false);
});

test("should recognize whitespace", () => {
  expect(isWhitespace(" ")).toEqual(true);
  expect(isWhitespace("Z")).toEqual(false);
  expect(isWhitespace("")).toEqual(false);
  expect(isWhitespace()).toEqual(false);
});

test("should recognize digits", () => {
  expect(isDigit("1")).toEqual(true);
  expect(isDigit("a")).toEqual(false);
  expect(isDigit("")).toEqual(false);
  expect(isDigit()).toEqual(false);
});

test("should recognize dots", () => {
  expect(isDot(".")).toEqual(true);
  expect(isDot("a")).toEqual(false);
  expect(isDot("5")).toEqual(false);
  expect(isDot()).toEqual(false);
});

test("should recognize commas", () => {
  expect(isComma(",")).toEqual(true);
  expect(isComma("a")).toEqual(false);
  expect(isComma("5")).toEqual(false);
  expect(isComma()).toEqual(false);
});

test("should recognize commas or dots", () => {
  expect(isFloatingPoint(",")).toEqual(true);
  expect(isFloatingPoint(".")).toEqual(true);
  expect(isFloatingPoint("a")).toEqual(false);
  expect(isFloatingPoint("5")).toEqual(false);
  expect(isFloatingPoint()).toEqual(false);
});
