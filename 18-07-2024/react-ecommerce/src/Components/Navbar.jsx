import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-2 px-4 bg-slate-300">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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