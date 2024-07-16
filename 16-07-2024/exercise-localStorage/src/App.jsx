import { useState, useEffect } from "react";
import { API_KEY } from "./keys.js";

import "./App.css";

function App() {
  const [fact, setFact] = useState(null);
  const [favFacts, setFavFacts] = useState(
    JSON.parse(localStorage.getItem("randomFacts")) || []
  );

  async function getRandomFact() {
    const results = await fetch("https://api.api-ninjas.com/v1/facts", {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    const data = await results.json();
    setFact(data[0].fact);
  }

  useEffect(() => {
    getRandomFact();
  }, []);

  useEffect(() => {
    toLocalStorage();
  }, [favFacts]);

  function handleClick() {
    setFavFacts((prevFacts) => [...prevFacts, fact]);
  }

  function toLocalStorage() {
    localStorage.setItem("randomFacts", JSON.stringify(favFacts));
  }

  return (
    <>
      <h2>Here is your random fact of the day:</h2>
      <h1>{fact}</h1>
      <button onClick={getRandomFact}>Generate another random fact</button>
      <button onClick={handleClick}>Save Fact</button>

      <h3>Favorite Facts</h3>
      <ul>
        {favFacts.map((favFact, index) => (
          <li key={index}>{favFact}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
