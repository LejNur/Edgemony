/* eslint-disable react/prop-types */
function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">LOGO</div>
          <Menu />
        </div>
      </div>
    </header>
  );
}

function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <MenuItem label={"Home"} />
        <MenuItem label={"About us"} />
        <MenuItem label={"Blog"} />
        <MenuItem label={"Contact us"} />
      </ul>
    </nav>
  );
}

function MenuItem({ label, href = "#" }) {
  // const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Header };
