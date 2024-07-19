import { useContext } from "react";
import { CartContext } from "../Providers/CartContext";

function CartItem({ item }) {
  const { addItem, removeItem } = useContext(CartContext);
  return (
    <div className="border border-slate-200 rounded-sm px-6 py-4 flex items-center justify-around flex-col gap-2">
      <p className="text-slate-600 font-bold text-xl">{item.title}</p>
      <img src={item.thumbnail} alt="" />
      <span className="font-semibold text-slate-600">{item.price}$</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => removeItem(item.id)}
          disabled={item.quantity === 1}
          className=" bg-slate-200 rounded-md px-4 text-slate-600 font-bold disabled:cursor-not-allowed"
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => addItem(item)}
          className=" bg-slate-200 rounded-md px-4 text-slate-600 font-bold"
        >
          +
        </button>
      </div>

      <button
        className="border px-4 py-2 rounded-sm font-semibold text-red-800 border-red-800 hover:bg-red-800 hover:text-slate-100 transition ease-in-out"
        onClick={() => removeItem(item.id)}
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
