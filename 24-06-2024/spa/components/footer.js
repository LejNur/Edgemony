function getFooterHTML() {
  const menuHTML = getMenuHTML();

  return `<footer class="footer">
            <div class="container">
              <div class="wrapper">
                <div class="logo">LOGO</div>
                <nav class="nav">
                  ${menuHTML}
                </nav>
              </div>
            </div>
          </footer>`;
}

function getMenuHTML() {
  const menuItems = [
    {
      label: "About us",
      children: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Subscribe" },
      ],
    },
    {
      label: "Informations",
      children: [
        { label: "Work with us" },
        { label: "Blog" },
        { label: "Address" },
      ],
    },
  ];

  return `
        <ul class="menu>
        ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
          </ul>`;
}

function getMenuItemHTML(options) {
  const { label, href = "#", children = [] } = options;

  const subItems = children.map((item) => getMenuItemHTML(item)).join("");

  return `<li class="item">
            <a href="${href}">${label}</a>
            ${children.length ? "<ul>" + subItems + "</ul>" : ""}
          </li>`;
}
export { getFooterHTML };
