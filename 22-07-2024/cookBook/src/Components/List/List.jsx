import { labels } from "../../locales/staticText";
import { useState, useEffect } from "react";
import { getRecipeList } from "../../api/client";
import Recipe from "../Recipe/Recipe";
import Animation from "../Loading/Animation";

function List() {
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getRecipe() {
    try {
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

  useEffect(() => {
    console.log(recipeList);
  }, [recipeList]);

  if (isLoading) return <Animation />;

  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <h1 className="py-2">{labels.recipeList}</h1>
        <div className="overflow-x-auto py-8">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labels.recipeId}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labels.recipeTitle}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labels.recipeCategory}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labels.recipeCookTime}
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recipeList.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
