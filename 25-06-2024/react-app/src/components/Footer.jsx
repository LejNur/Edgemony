/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="logo">LOGO</div>
          <nav className="nav">
            <Menu />
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Menu() {
  return (
    <ul className="menu">
      <MenuItems label="About us" />
      <MenuItems label="Blog" />
      <MenuItems label="Company" />
      <MenuItems label="Informations" />
    </ul>
  );
}

function MenuItems({ label }) {
  return (
    <li className="item">
      <a href="#">{label}</a>
      <ul className="list">
        <li>Subitem One</li>
        <li>Subitem Two</li>
        <li>Subitem Three</li>
      </ul>
    </li>
  );
}

export { Footer };
