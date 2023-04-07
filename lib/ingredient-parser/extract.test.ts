import { expect, test } from "vitest";

import getUnit from "./extract";

test("should extract units from strings", () => {
  expect(getUnit("MG")).toEqual("milligram");
  expect(getUnit("bunches")).toEqual("bunch");
  expect(getUnit("g")).toEqual("gram");
  expect(getUnit("tsp")).toEqual("teaspoon");
  expect(getUnit("L")).toEqual("liter");
  expect(getUnit("medium")).toEqual("medium");
});

test("should return false if no match was found", () => {
  expect(getUnit("mgs")).toEqual(false);
  expect(getUnit("")).toEqual(false);
  expect(getUnit("SOMETHING")).toEqual(false);
});
