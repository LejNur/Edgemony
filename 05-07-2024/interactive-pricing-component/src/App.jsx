import "./App.css";
import { useState } from "react";
import iconCheck from "../src/icons/iconCheck.svg";

function App() {
  const [range, setRange] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function handleRange(e) {
    setRange(e.target.value);
  }

  function calculateDiscount() {}

  const rangeValues = {
    0: {
      views: "10K",
      per_month: 8,
    },
    1: {
      views: "50K",
      per_month: 12,
    },
    2: {
      views: "100K",
      per_month: 16,
    },
    3: {
      views: "500K",
      per_month: 24,
    },
    4: {
      views: "1M",
      per_month: 36,
    },
  };

  return (
    <>
      <div className="titleWrapper">
        <h1>Simple, traffic based pricing</h1>
        <h2>Sign-up for our 30-day trial. No credit card required.</h2>
      </div>

      <div className="mainCard">
        <div className="displayResults">
          <p>{rangeValues[range].views} PAGEVIEWS</p>
          <span>
            ${rangeValues[range].per_month} <span>/month</span>
          </span>
        </div>

        <label htmlFor="range">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            onInput={(e) => handleRange(e)}
          />
        </label>
        <br />

        <div className="billingContainer">
          <p>Monthy Billing</p>
          <label className="switch">
            <input
              type="checkbox"
              value={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className="slider round"></span>
          </label>
          <p>Yearly Billing</p>
          <span>25% discount</span>
        </div>
        <hr />

        <div className="cta">
          <div className="iconsBox">
            <div>
              <img src={iconCheck} alt="" />
              <span>Ulimited websites</span>
            </div>
            <div>
              <img src={iconCheck} alt="" />
              <span>100% data ownership</span>
            </div>
            <div>
              <img src={iconCheck} alt="" />
              <span>Email reports</span>
            </div>
          </div>
          <div>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
