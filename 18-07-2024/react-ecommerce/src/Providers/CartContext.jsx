import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeItem(id) {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
