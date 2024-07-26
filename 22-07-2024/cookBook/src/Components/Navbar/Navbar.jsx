import { Link } from "react-router-dom";
import { labels } from "../../locales/staticText";

function Navbar() {
  return (
    <header className="bg-creamyWhite py-6">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-5">
            <Link to="/">
              <img src="/icon.svg"></img>
            </Link>
            <h1 className=" text-rusticBrown">{labels.recipeList}</h1>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global" className="text-rusticBrown">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="inline-block rounded-full bg-herbGreen px-4 py-2 text-sm font-medium text-creamyWhite hover:scale-105 hover:transition ease-in-out"
                    to="/add"
                  >
                    {labels.navbarLinkAdd}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
