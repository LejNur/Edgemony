import { labels } from "../../locales/staticText";
import { useState, useEffect } from "react";
import { getRecipeList } from "../../api/client";

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

  if (isLoading) return <p>Recipe list is loading ...</p>;

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
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  24/05/1995
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Web Developer
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Jane Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  04/11/1980
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Web Designer
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $100,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Gary Barlow
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  24/05/1995
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Singer
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $20,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
