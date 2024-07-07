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
  }

  function onClear() {
    setFormObject({
      amount: "",
      years: "",
      rate: "",
      mortgageType: "",
    });
    setIsVisible(false);
  }

  return (
    <>
      <div className="mainCard">
        <Calculator
          onInput={handleInput}
          onHandleSubmit={onSubmit}
          onHandleClear={onClear}
          formObject={formObject}
        />
        <Output isVisible={isVisible} formObject={formObject} />
      </div>
    </>
  );
}

export default App;
