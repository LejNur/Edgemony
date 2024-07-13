import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { Output } from "./components/Output/Output";
import { useState } from "react";

function App() {
  const [formObject, setFormObject] = useState({
    amount: "",
    years: "",
    rate: "",
    mortgageType: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");

  function handleInput(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setFormObject((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsVisible(true);
    if (
      formObject.amount === "" ||
      formObject.years === "" ||
      formObject.rate === "" ||
      formObject.mortgageType === ""
    ) {
      console.log("error");
      setError("This field is required");
    }
  }

  function onClear() {
    setFormObject({
      amount: "",
      years: "",
      rate: "",
      mortgageType: "",
    });
    setIsVisible(false);
    setError("");
  }

  return (
    <>
      <div className="mainCard">
        <Calculator
          onInput={handleInput}
          onHandleSubmit={onSubmit}
          onHandleClear={onClear}
          formObject={formObject}
          error={error}
        />
        <Output isVisible={isVisible} formObject={formObject} />
      </div>
    </>
  );
}

export default App;
