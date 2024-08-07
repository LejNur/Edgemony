import { useContext } from "react";
import CartItem from "../Components/CartItem";
import { CartContext } from "../Providers/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="w-fit flex flex-wrap gap-6 px-12 py-6">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
