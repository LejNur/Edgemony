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
  const formattedBody = {
    ...body,
    ingredients: body.ingredients.split(","),
    instructions: body.instructions.split("."),
  };
  const res = await axios.post(BASE_URL, formattedBody);
  return res.data;
}

export async function editRecipe(body) {
  const { id, ...data } = body;
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
}

export async function deleteRecipe(id) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
}
