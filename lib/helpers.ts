export function joinQueryParameters(params?: string | string[]) {
  if (Array.isArray(params)) {
    return params.join("");
  }

  return params;
}

export function optionalParse(data: string | object): object {
  if (typeof data === "string") {
    return JSON.parse(data);
  }

  return data;
}
