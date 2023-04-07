const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const DIGIT = /^[0-9]+$/;

export function isLetter(character?: string) {
  if (!character) return false;

  return LETTER.test(character);
}

export function isWhitespace(character?: string) {
  if (!character) return false;

  return WHITESPACE.test(character);
}

export function isDigit(character?: string) {
  if (!character) return false;

  return DIGIT.test(character);
}

export function isDot(character?: string) {
  if (!character) return false;

  return character === ".";
}

export function isComma(character?: string) {
  if (!character) return false;

  return character === ",";
}

export function isFloatingPoint(character?: string) {
  if (!character) return false;

  return isComma(character) || isDot(character);
}
