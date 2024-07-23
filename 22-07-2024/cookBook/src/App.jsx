import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
