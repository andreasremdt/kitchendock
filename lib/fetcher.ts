export default async function fetcher(method: string, url: string, body?: JSON | string | object) {
  const response = await fetch(url, {
    method,
    ...(body && { body: typeof body === "object" ? JSON.stringify(body) : body }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.error || "Something went wrong, please try again later.");
  }

  return json.data || json;
}
