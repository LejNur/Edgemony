import { useState } from "react";

import { Modal } from "./components/Modal/Modal";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const isLuckyNumber = number === 7;

  function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    setNumber(randomNumber);
  }

  return (
    <>
      <div className="container">
        <h1>Click below to find out you lucky number</h1>
        <button onClick={randomNumber} className="random-btn">
          Click
        </button>
        <p>{number}</p>
        {isLuckyNumber && <Modal />}
      </div>
    </>
  );
}

export default App;
