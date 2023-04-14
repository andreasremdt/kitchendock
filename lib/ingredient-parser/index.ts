import { Preferences } from "@/types";
import consolidate from "./consolidate";
import tokenize from "./tokenize";
import transform from "./transform";
import convert from "./convert";

export default function parse(input: string, preferences: Preferences) {
  return convert(consolidate(transform(tokenize(input))), preferences);
}
