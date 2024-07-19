import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-6 px-12 bg-cyan-600 ">
        <span className="font-extralight text-cyan-300 text-3xl">myShop</span>
        <ul className="flex gap-3 items-start font-medium text-slate-200 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
