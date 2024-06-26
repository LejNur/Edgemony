/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <img src={logo} alt="logo" className="logo" />
          <nav className="nav">
            <Menu />
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Menu() {
  const items = [
    { label: "About us", href: "#" },
    { label: "Company", href: "#" },
    { label: "Careers", href: "https://google.com" },
    { label: "Informations", href: "#" },
  ];
  return (
    <ul className="menu">
      {items.map((item, index) => (
        <MenuItems
          key={`${item.label}-${index}`}
          label={item.label}
          href={item.href}
        />
      ))}
    </ul>
  );
}

function MenuItems({ label }) {
  const submenuItems = [
    { label: "Accessibility" },
    { label: "Education" },
    { label: "Enviorment" },
    { label: "Privacy" },
  ];
  return (
    <li className="item">
      <a href="#">{label}</a>
      <ul className="list">
        {submenuItems.map((submenuItem, index) => (
          <li key={`${submenuItem}-${index}`}>{submenuItem.label}</li>
        ))}
      </ul>
    </li>
  );
}

export { Footer };
