
const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector(".show");
const inputEl = document.querySelector(".input");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())

  .then((resData) => {

    buttonEl.addEventListener("click", (event) => {
      renderList(resData, containerEl);
      event.stopPropagation();
    });

    inputEl.addEventListener("input", (event) => {
      const inputValue = event.target.value.toLowerCase();
      filterProducts(inputValue, resData);
    });

  }).catch((err) => {
    console.log('error', err);

  })


  //Rendering Card List
  function renderList (res, container) {

    res.forEach((element) => {
      const card = document.createElement("div");
      const cardImg = document.createElement("img");
      const cardTitle = document.createElement("h2");
      const cardPrice = document.createElement("span");

      card.className = "card";
      cardImg.className = "card-image";
      cardImg.src = element.image;
      cardTitle.textContent = element.title;
      cardPrice.textContent = element.price + "$";

      container.append(card);
      card.appendChild(cardImg);
      card.appendChild(cardTitle);
      card.appendChild(cardPrice);
    });
  }


//Filtering products on input
  function filterProducts (title, products) {
    const newProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(title)
    })

    containerEl.innerHTML = '';
    renderList(newProducts, containerEl);
  }



