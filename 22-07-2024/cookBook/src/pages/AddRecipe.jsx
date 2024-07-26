import { useNavigate } from "react-router-dom";
import { addRecipe } from "../api/client";
import Form from "../Components/Form/Form";
import { toast } from "react-toastify";

function AddRecipe() {
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    const newFormData = {
      ...formData,
      category: [formData.category],
    };
    try {
      const res = await addRecipe(newFormData);

      toast.success(`${newFormData.name} added to list!`);
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2 className="font-bold text-center text-3xl">Add new recipe!</h2>
      <Form onSubmit={handleSubmit} />
    </>
  );
}

export default AddRecipe;
