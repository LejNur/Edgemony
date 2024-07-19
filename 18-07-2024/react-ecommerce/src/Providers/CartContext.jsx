import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product) {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
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
