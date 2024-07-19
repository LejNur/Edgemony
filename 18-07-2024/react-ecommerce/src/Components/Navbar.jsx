import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Providers/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <nav className="flex items-center justify-between py-6 px-12 bg-cyan-600 ">
        <span className="font-extralight text-cyan-300 text-3xl">myShop</span>
        <ul className="flex gap-3 items-center justify-center font-medium text-slate-200 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="relative flex items-center">
              <span className="text-3xl ">
                <ion-icon name="cart-outline"></ion-icon>
              </span>

              <span className="text-sm text-slate-200 absolute -top-3 -right-4 rounded-xl flex items-center justify-center w-5 h-5 bg-green-700">
                {cart.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
