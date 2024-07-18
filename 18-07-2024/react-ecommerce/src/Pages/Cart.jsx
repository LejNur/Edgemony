import CartItem from "../Components/CartItem";

function Cart({ cart, onRemoveItem }) {
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
}

export default Cart;
