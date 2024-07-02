import "./App.css";
import { Card } from "./components/Card/Card";
// import { advices } from "./advice";
// import { useState } from "react";

function App() {
  return (
    <>
      <Card />
    </>
  );
}

//Another solution to this exercise
// function App() {
//   const [index, setIndex] = useState(null);

//   function handleClick() {
//     const randomIndex = Math.floor(Math.random() * advices.length);
//     setIndex(randomIndex);
//   }

//   const selectedAdvice = advices.at(index);

//   return (
//     <>
//       <Card
//         onHandleClick={handleClick}
//         advice={
//           index
//             ? selectedAdvice
//             : {
//                 id: null,
//                 advice: "Click button to discover your advice of the day",
//               }
//         }
//       />
//     </>
//   );
// }

export default App;
