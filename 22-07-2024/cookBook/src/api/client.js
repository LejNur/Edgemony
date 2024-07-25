// const data = [
//   {
//     id: "1",
//     title: "Spaghetti",
//     category: "Main Course",
//     time: "20min",
//   },
//   {
//     id: "2",
//     title: "Pancakes",
//     category: "Breakfast",
//     time: "2-3min",
//   },
// ];
import axios from "axios";
const BASE_URL = "http://localhost:5000/recipes";

export async function getRecipeList() {
  const res = await axios.get(BASE_URL);
  return res.data;
}

export async function getRecipeDetails(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
}

export async function addRecipe(body) {
  const res = await axios.post(BASE_URL, body);
  return res.data;
}
// export const addRecipe = (body) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         ...body,
//         id: self.crypto.randomUUID(),
//       });
//     }, 1000);
//   });
// };

// export const editRecipe = (body) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         ...body,
//       });
//     }, 1000);
//   });
// };
