import 'dotenv/config';

export const getNasa = async (query = {}) => {
  const url = new URL("https://api.nasa.gov/planetary/apod");

  url.searchParams.set("api_key", process.env.NASA_API_KEY)

  Object.entries(query).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Nasa API request failed.")
  }
  
  return response.json()
};