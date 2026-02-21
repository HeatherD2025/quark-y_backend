
export const getNasa = async (queryParams = {}) => {
  const url = new URL("https://api.nasa.gov/planetary/apod");

  url.searchParams.set("api_key", process.env.NASA_API_KEY)

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  const response = await fetch(url);
  return response.json()
};