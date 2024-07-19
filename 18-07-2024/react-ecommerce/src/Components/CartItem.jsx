import { useContext } from "react";
import { CartContext } from "../Providers/CartContext";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <div>
      <p>{item.title}</p>
      <button onClick={() => removeItem(item.id)}>Remove from Cart</button>
    </div>
  );
}

export default CartItem;
