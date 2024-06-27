import { Keyboard } from "./components/Keyboard/Keyboard";
import { Display } from "./components/Display/Display";
import { Button } from "./components/Button/Button";
import { useState } from "react";

import "./App.css";

const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "X",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "Reset",
  0,
  ".",
  "=",
];

function App() {
  const [value, setValue] = useState(10);

  function handleClick(value) {
    setValue(value);
  }

  return (
    <>
      <div className="wrapper">
        <Display value={value} />
        <Keyboard>
          {buttons.map((button, index) => (
            <Button key={index} value={button} onButtonClick={handleClick} />
          ))}
        </Keyboard>
      </div>
    </>
  );
}

export default App;
