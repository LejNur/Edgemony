import { useContext } from "react";
import CartItem from "../Components/CartItem";
import { CartContext } from "../Providers/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
