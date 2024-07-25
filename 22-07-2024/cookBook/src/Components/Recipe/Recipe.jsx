import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{recipe.id}</td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {recipe.name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {recipe.category.join(", ")}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {recipe.cooktime}
      </td>
      <td className="flex gap-2">
        <Link
          to={`/recipe/${recipe.id}`}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Details
        </Link>
        <Link
          to={`/edit/${recipe.id}`}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}

export default Recipe;
