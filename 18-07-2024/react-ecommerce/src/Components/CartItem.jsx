function CartItem({ item, onRemoveItem }) {
  return (
    <div>
      <p>{item.title}</p>
      <button onClick={() => onRemoveItem(item.id)}>Remove from Cart</button>
    </div>
  );
}

export default CartItem;
