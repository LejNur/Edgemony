import { API_KEY } from "./keys.js";
let BASE_URL = "https://api.themoviedb.org/3/";

export const GET = async (endpoint, page = 1, query = "") => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?page=${page}&include_adult=false&${query}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

    const data = await response.json();

    return data;
};
