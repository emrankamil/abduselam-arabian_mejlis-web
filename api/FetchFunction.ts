export const FetchFunction = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint, {
    // cache: "no-store",
    next: { revalidate: 7200 },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data;
};
