import styles from "../Card/Card.module.css";
import divider from "../../assets/svg/divider.svg";
import dice from "../../assets/svg/dice.svg";
// import { advices } from "../../advice.js";
import { useEffect, useState } from "react";

function Card() {
  const [text, setText] = useState({
    id: null,
    advice: "",
  });

  const [isAnimating, setIsAnimating] = useState(null);

  // function handleClick() {
  //   const randomIndex = Math.floor(Math.random() * advices.length);
  //   const randomAdvice = advices[randomIndex];
  //   setText({ id: randomAdvice.id, advice: randomAdvice.advice });
  //   setIsAnimating(true);

  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 1000);
  // }

  function handleClick() {
    setIsAnimating(true);
    fetchData();
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }

  async function fetchData() {
    const res = await fetch("	https://api.adviceslip.com/advice");
    const resData = await res.json();
    const advice = resData.slip;
    setText({ id: advice.id, advice: advice.advice });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.card}>
      {text.id && <h1 className={styles.title}>Advice #{text.id}</h1>}
      <p className={styles.paragraph}>{text.advice}</p>
      <img src={divider} alt="pattern-divider" />
      <button className={styles.button} onClick={handleClick}>
        <img
          src={dice}
          alt="icon-dice"
          className={`${styles.icon} ${isAnimating ? styles.rotate : ""} `}
        />
      </button>
    </div>
  );
}

//Exercise result using state inside app.jsx
// function Card({ onHandleClick, advice }) {
//   return (
//     <div className={styles.card}>
//       {advice.id && <h1 className={styles.title}>advice # {advice.id}</h1>}
//       <p className={styles.paragraph}>{advice.advice}</p>
//       <img src={divider} alt="pattern-divider" />
//       <button className={styles.button} onClick={() => onHandleClick()}>
//         <img src={dice} alt="icon-dice" className={styles.icon} />
//       </button>
//     </div>
//   );
// }

export { Card };
