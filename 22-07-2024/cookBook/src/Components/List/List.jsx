import { labels } from "../../locales/staticText";
import { useState, useEffect } from "react";
import { deleteRecipe, getRecipeList } from "../../api/client";
import Recipe from "../Recipe/Recipe";
import Animation from "../Loading/Animation";
import Filter from "../Filter/Filter";
import { toast } from "react-toastify";

function List() {
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");

  async function getRecipe() {
    try {
      setIsLoading(true);
      const data = await getRecipeList();
      setRecipeList(data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  async function handleDelete(id) {
    try {
      const res = await deleteRecipe(id);
      toast.success("Recipe deleted successfully!");
      console.log(res);
      setIsLoading(true);
      const filteredList = recipeList.filter((recipe) => recipe.id !== id);
      setRecipeList(filteredList);
      setIsLoading(false);
    } catch (error) {
      toast.error(`${error}`);
      console.log(error);
    }
  }

  if (isLoading) return <Animation />;

  return (
    <>
      <div className="flex justify-center bg-creamyWhite">
        <div className="w-4/5">
          <Filter
            filter={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <div className="overflow-x-auto py-8">
            <table className="min-w-full h-screen divide-y-2 divide-warmSpice text-sm ">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-bold  text-rusticBrown text-base"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold  text-rusticBrown text-base">
                    {labels.recipeTitle}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold  text-rusticBrown text-base">
                    {labels.recipeCategory}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-bold  text-rusticBrown text-base">
                    {labels.recipeCookTime}
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recipeList
                  .filter((recipe) =>
                    recipe?.name?.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((recipe) => (
                    <Recipe
                      key={recipe.id}
                      recipe={recipe}
                      onDelete={handleDelete}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
