import { useNavigate } from "react-router-dom";
// import { addRecipe } from "../api/client";
import Form from "../Components/Form/Form";

function AddRecipe() {
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    try {
      const res = await addRecipe(formData);
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return <Form onSubmit={handleSubmit} />;
}

export default AddRecipe;
