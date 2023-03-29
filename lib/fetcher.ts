export default async function fetcher(method: string, url: string, body?: any) {
  const response = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
