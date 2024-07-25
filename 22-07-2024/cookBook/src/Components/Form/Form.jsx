import { useState } from "react";
import { labels } from "../../locales/staticText";
import Animation from "../Loading/Animation";

function Form({ value, onSubmit }) {
  const initialState = {
    title: value?.title || "",
    category: value?.category || "",
    time: value?.time || "",
    ingredients: value?.ingredients || "",
    instructions: value?.instructions || "",
    images: value?.images || "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(initialState);

  const titleValidation = !form.title.length;
  const categoryValidation = !form.category.length;
  const timeValidation = !form.time.length;
  const ingredientsValidation = !form.ingredients.length;
  const instructionsValidation = !form.instructions.length;
  const imagesValidation = !form.images.length;

  const formValidation =
    titleValidation ||
    categoryValidation ||
    timeValidation ||
    ingredientsValidation ||
    instructionsValidation ||
    imagesValidation;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  if (isLoading) return <Animation />;
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{labels.formTitle}</h2>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            await onSubmit(form);
            setIsLoading(false);
            setForm(initialState);
          }}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label>{labels.formLabelTitle}</label>

            <div className="relative">
              <input
                value={form.title}
                name="title"
                type="text"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                onChange={handleInput}
              />
            </div>
          </div>

          <div>
            <label>{labels.formLabelCategory}</label>

            <div className="relative">
              <input
                value={form.category}
                name="category"
                type="text"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <label>{labels.formLabelCooktime}</label>

            <div className="relative">
              <input
                value={form.time}
                name="time"
                type="text"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                onChange={handleInput}
              />
            </div>
          </div>

          <div>
            <label>{labels.formLabelIngredients}</label>

            <div className="relative">
              <input
                value={form.ingredients}
                name="ingredients"
                type="text"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                onChange={handleInput}
              />
            </div>
          </div>

          <div>
            <label>{labels.formLabelInstructions}</label>

            <div className="relative">
              <textarea
                value={form.instructions}
                name="instructions"
                rows="10"
                cols="33"
                className="w-full resize-none rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                onChange={handleInput}
              ></textarea>
            </div>
          </div>

          <div>
            <label>{labels.formLabelImages}</label>

            <div className="relative">
              <input
                value={form.images}
                name="images"
                type="text"
                className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
                onChange={handleInput}
              />
            </div>
          </div>

          <button
            disabled={formValidation}
            type="submit"
            className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
          >
            {labels.formSubmitButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;