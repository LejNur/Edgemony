import { Link } from "react-router-dom";

function Recipe({ recipe, onDelete }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-rusticBrown">
        <img
          src={recipe.images.small}
          alt={`thumbnail image of a ${recipe.name}`}
          className="w-20 aspect-video object-cover"
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-rusticBrown">
        {recipe.name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-rusticBrown">
        {recipe.category.join(", ")}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-rusticBrown">
        {recipe.cooktime}
      </td>
      <td>
        <Link
          to={`/recipe/${recipe.id}`}
          className=" rounded bg-warmSpice px-4 py-2 text-sm font-medium text-creamyWhite hover:outline outline-warmSpice hover:bg-transparent hover:transition ease-in-out hover:text-warmSpice"
        >
          Details
        </Link>
      </td>
      <td>
        <Link
          to={`/edit/${recipe.id}`}
          className="rounded bg-goldenYellow px-4 py-2 text-sm font-medium text-creamyWhite hover:outline outline-goldenYellow hover:bg-transparent hover:transition ease-in-out hover:text-goldenYellow"
        >
          Edit
        </Link>
      </td>
      <td>
        <button
          className="rounded bg-tomatoRed px-4 py-2 text-sm font-medium text-creamyWhite hover:outline outline-tomatoRed hover:bg-transparent hover:transition ease-in-out hover:text-tomatoRed"
          onClick={() => onDelete(recipe.id)}
        >
          Delete Recipe
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
