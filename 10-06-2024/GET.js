import { API_KEY } from "./keys.js";
let BASE_URL = "https://api.themoviedb.org/3/movie/";

// // Fetch Movies
// const fetchMovies = (endpoint, page) => {
//   fetch(`${BASE_URL}${endpoint}?page=${page}`, {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       results = response.results;
//       renderList(results, containerEl);
//     })
//     .catch((err) => console.error("Error:", err));
// };

export const GET = async (endpoint, page) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return data;
};
