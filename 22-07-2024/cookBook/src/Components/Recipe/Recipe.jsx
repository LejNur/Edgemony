import { Link } from "react-router-dom";

function Recipe({ recipe, onDelete }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <img
          src={recipe.images.small}
          alt={`thumbnail image of a ${recipe.name}`}
          className="w-20 aspect-video object-cover"
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {recipe.name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {recipe.category.join(", ")}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {recipe.cooktime}
      </td>
      <td>
        <Link
          to={`/recipe/${recipe.id}`}
          className=" rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Details
        </Link>
      </td>
      <td>
        <Link
          to={`/edit/${recipe.id}`}
          className=" rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Edit
        </Link>
      </td>
      <td>
        <button onClick={() => onDelete(recipe.id)}>Delete Recipe</button>
      </td>
    </tr>
  );
}

export default Recipe;
