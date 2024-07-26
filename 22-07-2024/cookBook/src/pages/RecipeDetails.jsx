import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../api/client";
import { useEffect, useState } from "react";
import Skeleton from "../Components/Loading/Skeleton";
import Error from "../Components/Error/Error";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });

  async function getDetails(id) {
    try {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    } catch (error) {
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDetails(id);
  }, []);

  if (isError.isError) return <Error message={isError.message} />;

  if (isLoading) return <Skeleton />;

  return (
    <div className="relative isolate overflow-hidden bg-creamyWhite px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <div className=" flex flex-col gap-2 mb-6">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-rusticBrown sm:text-4xl">
                  {recipe.name}
                </h1>
                <p className="text-base font-semibold leading-7 text-warmSpice ">
                  {recipe.category.join(" ")}
                </p>
              </div>
              <div className=" flex flex-col gap-2 mt-6">
                <ul>
                  <h3 className="font-bold text-warmSpice">Ingredients</h3>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li className="text-rusticBrown" key={index}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <h3 className="font-bold  text-warmSpice">Instructions</h3>
                <p className="text-xl leading-8 text-rusticBrown">
                  {recipe.instructions.join(" ")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img alt="" src={recipe.images.large} className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
// className =
//   "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden";
