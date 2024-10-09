export const FetchFunction = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data;
};
