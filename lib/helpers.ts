export function joinQueryParameters(params?: string | string[]) {
  if (Array.isArray(params)) {
    return params.join("");
  }

  return params;
}
