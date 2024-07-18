import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Errorpage from "./Pages/Errorpage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const [cart, setCart] = useState([]);

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} onRemoveItem={removeItem} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails setCart={setCart} />}
        />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
