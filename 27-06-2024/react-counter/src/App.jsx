import { useState } from "react";
import { Button } from "./components/Button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function buttonClick(value) {
    if (value === "+") {
      setCount(count + 1);
    } else if (value === "-") {
      if (count === 0) return;
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="number">{count}</div>
        <div className="btn-container">
          <Button label={"-"} onButtonClick={buttonClick} />
          <Button label={"Reset"} onButtonClick={buttonClick} />
          <Button label={"+"} onButtonClick={buttonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
