import tokenize from "./tokenize";
import transform from "./transform";

export default function parse(input: string) {
  return transform(tokenize(input));
}
