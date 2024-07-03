import "./App.css";
import { Form } from "./components/Form/Form";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    query: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  function handleInput(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setFormObject((prevState) => ({ ...prevState, [inputName]: inputValue }));
  }

  function handleVisibility(e) {
    e.preventDefault();
    setIsVisible(true);
  }

  return (
    <>
      {!isVisible && (
        <Form
          onInput={handleInput}
          onHandleVisibility={handleVisibility}
          formObject={formObject}
        />
      )}
      {isVisible && <Modal data={formObject} />}
    </>
  );
}

export default App;
