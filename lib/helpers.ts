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

export function toBase64(file: Blob) {
  const reader = new FileReader();

  return new Promise<string>((resolve, reject) => {
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
