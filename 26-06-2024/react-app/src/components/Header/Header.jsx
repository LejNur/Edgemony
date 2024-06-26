/* eslint-disable react/prop-types */
import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <img src={logo} alt="logo" className="logo" />
          {/* <div className="logo"></div> */}
          <Menu />
        </div>
      </div>
    </header>
  );
}

function Menu() {
  const items = [
    { label: "Home", href: "https://google.com" },
    { label: "About us" },
    { label: "Blog" },
    { label: "Contact us" },
  ];

  return (
    <nav className="nav">
      <ul className="list">
        {items.map((item, index) => (
          <MenuItem
            key={`${item.label}-${index}`}
            label={item.label}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
}

function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Header };
