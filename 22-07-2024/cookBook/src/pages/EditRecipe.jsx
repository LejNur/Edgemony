import { useParams } from "react-router-dom";
import Form from "../Components/Form/Form";
import { useEffect, useState } from "react";
// import { getRecipeDetails } from "../api/client";
import Animation from "../Components/Loading/Animation";

function EditRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function initializeRecipe() {
      setIsLoading(true);
      const data = await getRecipeDetails(id);
      setRecipe(data);
      setIsLoading(false);
    }
    initializeRecipe();
  }, []);

  console.log(recipe);

  if (isLoading) return <Animation />;
  return <Form value={recipe} />;
}

export default EditRecipe;
