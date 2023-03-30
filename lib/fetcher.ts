export default async function fetcher(method: string, url: string, body?: JSON | string) {
  const response = await fetch(url, {
    method,
    ...(body && { body: typeof body === "object" ? JSON.stringify(body) : body }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json = await response.json();

  return json.data || json;
}
