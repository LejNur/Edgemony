import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form/Form";
import { useEffect, useState } from "react";
import { editRecipe, getRecipeDetails } from "../api/client";
import Animation from "../Components/Loading/Animation";
import { toast } from "react-toastify";

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
      toast.success(`${body.name} successfully edited!`);
      navigate("/");
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  if (isLoading) return <Animation />;
  return (
    <>
      <h2 className="font-bold text-center text-3xl">Edit a recipe!</h2>
      <Form value={recipe} onSubmit={handleEditRecipe} />;
    </>
  );
}

export default EditRecipe;
