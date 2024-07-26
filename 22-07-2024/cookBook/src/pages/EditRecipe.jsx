import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form/Form";
import { useEffect, useState } from "react";
import { editRecipe, getRecipeDetails } from "../api/client";
import Animation from "../Components/Loading/Animation";

function EditRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function initializeRecipe() {
      setIsLoading(true);
      const data = await getRecipeDetails(id);
      setRecipe(data);
      setIsLoading(false);
    }
    initializeRecipe();
  }, []);

  // console.log(recipe);

  async function handleEditRecipe(body) {
    try {
      const res = await editRecipe({ id, ...body });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) return <Animation />;
  return <Form value={recipe} onSubmit={handleEditRecipe} />;
}

export default EditRecipe;
