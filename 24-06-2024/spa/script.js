import { getHeaderHTML } from "./components/header.js";
import { getMainHTML } from "./components/main.js";
import { getFooterHTML } from "./components/footer.js";

window.addEventListener("DOMContentLoaded", () => {
  const appEl = document.querySelector("#app");

  if (appEl) {
    renderPage(appEl);
  }
});

function renderPage(appEl) {
  appEl.innerHTML = "Hello World";

  const header = getHeaderHTML();
  const main = getMainHTML();
  const footer = getFooterHTML();

  const html = header + main + footer;

  appEl.innerHTML = html;
  // const asideEl = document.querySelector('aside');
  // createElement('div', {className: 'test', innerHTML: 'Hello'})
}

function createElement(element, attrs = {}, parent = document.body) {
  const el = document.createElement(element);

  for (let prop in attrs) {
    if (prop in el) {
      el[prop] = attrs[prop];

      continue;
    }

    el.setAttribute(prop, attrs[prop]);
  }

  parent.append(el);
}

//

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
