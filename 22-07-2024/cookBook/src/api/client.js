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
// export function getRecipeList() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(() => {
//         return data;
//       });
//     }, 2000);
//   });
// }

// export function getRecipeDetails(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // reject({ message: "This is a error message!" });
//       resolve(() => {
//         return data.find((item) => item.id === id);
//       });
//     }, 2000);
//   });
// }

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
