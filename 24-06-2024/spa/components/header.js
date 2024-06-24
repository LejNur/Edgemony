function getHeaderHTML() {
  const menuHTML = getMenuHTML();

  return `
    <header>
      <div class="container">
        <div class="wrapper">
        <div class="logo">LOGO</div>
        ${menuHTML}
        </div>
      </div>
    </header>
  `;
}

function getMenuHTML() {
  const menuItems = [
    { label: "Abouts us" },
    { label: "Blog" },
    { label: "Contacts" },
    { label: "Home" },
  ];

  return `
        <nav class="nav">
          <ul class="list">
          ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
          </ul>
        </nav>`;
}

function getMenuItemHTML(options = {}) {
  const { label, href = "#" } = options;
  return `
    <li class="item">
      <a href="${href}">${label}</a>
    </li>
  `;
}

export { getHeaderHTML };
