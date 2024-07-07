import "./App.css";
import { useState } from "react";
import iconCheck from "../src/icons/iconCheck.svg";

function App() {
  const [range, setRange] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function handleRange(e) {
    setRange(e.target.value);
    e.target.style.setProperty("--range-value", value);
  }

  const rangeValues = {
    0: {
      views: "10K",
      per_month: isChecked ? 8 * 0.75 : 8,
    },
    1: {
      views: "50K",
      per_month: isChecked ? 12 * 0.75 : 12,
    },
    2: {
      views: "100K",
      per_month: isChecked ? 16 * 0.75 : 16,
    },
    3: {
      views: "500K",
      per_month: isChecked ? 24 * 0.75 : 24,
    },
    4: {
      views: "1M",
      per_month: isChecked ? 36 * 0.75 : 36,
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
          <span className="calcResult">
            {rangeValues[range].per_month.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            <span>/month</span>
          </span>

          <div>
            <label htmlFor="range">
              <input
                type="range"
                min="0"
                max="4"
                value={range}
                // step="1"
                onInput={(e) => handleRange(e)}
                style={{
                  "--range-value": range,
                  "--range-max": "4",
                }}
              />
            </label>
          </div>
        </div>

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
          <span className="discountSpan">25%</span>
        </div>

        <div className="cta">
          <div className="iconsBox">
            <div>
              <img src={iconCheck} alt="" />
              <span>Ulimited websites</span>
            </div>
            <div>
              <img src={iconCheck} alt="icon-check" />
              <span>100% data ownership</span>
            </div>
            <div>
              <img src={iconCheck} alt="icon-check" />
              <span>Email reports</span>
            </div>
          </div>
          <div>
            <button className="ctaButton">Start my trial</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
