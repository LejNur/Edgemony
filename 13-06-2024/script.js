import errorHandler from "../errorHandler.js";
const formEl = document.querySelector('.form');
const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category-id");
const inputImagesEl = document.querySelector(".images");
const buttonEl = document.querySelector(".button-send");

const containerEl = document.querySelector(".container");
const dialogEl = document.querySelector("dialog");
const closeDialogBtnEl = document.querySelector(".close-dialog");


const searchButtonEl = document.querySelector(".search-button");
const inputId = document.querySelector(".search-id");
const modifyButtonEl = document.querySelector('.modify-button');

const inputID = document.querySelector(".product-id");
const deleteBtnEl = document.querySelector(".button-delete");

const BASE_URL = "https://api.escuelajs.co/";
const endpointProducts = "api/v1/products";

// GET METHOD
const GET = async () => {
  const res = await fetch(`${BASE_URL}${endpointProducts}?limit=5&offset=0`);

  const data = res.json();
  return data;
};
const getById = async (id) => {
  const res = await fetch(`${BASE_URL}${endpointProducts}/${id}`, {
    method: "GET",
  });

  const data = await res.json();

  return data;
};

// console.log(await getById(901));

//POST METHOD
const POST = async (product) => {
  try{
    const res = await fetch(`${BASE_URL}${endpointProducts}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    
    if (data.error) {
      throw data
      }

// console.log(data.id);
    return data.id;
  } catch (error) {
    errorHandler(error);
    console.log('Error message', error.message);
  }

};

//Adding new product-Form/POST
buttonEl.addEventListener("click", async (e) => {
  e.preventDefault();
  const newProduct = {
    title: inputTitleEl.value,
    price: inputPriceEl.value,
    description: inputDescriptionEl.value,
    categoryId: inputCategoryEl.value,
    images: [inputImagesEl.value],
  };

  POST(newProduct);
  console.log(await POST(newProduct));
  formEl.reset();
});

//DELETE METHOD
const DELETE = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${endpointProducts}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Product not found");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("This is an error message", error);
    return null;
  }
};

//Delete product on button click
deleteBtnEl.addEventListener("click", async () => {
  let id = inputID.value;
  const result = await DELETE(id);
  if (result) {
    dialogEl.showModal();
    setTimeout(() => {
      dialogEl.close();
    }, 3000);
  }
});

closeDialogBtnEl.addEventListener("click", () => {
  dialogEl.close();
});



function renderList(products, container) {
  container.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h2");
    const cardDescription = document.createElement("p");

    card.className = "card";
    cardImg.className = "card-img";
    // cardImg.src = product.category.image;
    cardTitle.textContent = product.title;
    cardDescription.textContent = product.description;

    container.append(card);
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
  });
}

const render = async () => {
  const response = await GET();
  renderList(response, containerEl);
};

// render();


//PUT METHOD
const PUT = async (id, product) => {
  const res = await fetch(`${BASE_URL}${endpointProducts}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = res.json();

  return data;
};

// const editProduct = async (id, product) => {
//   console.log(await PUT(id, product));
// };
let id = 0;
searchButtonEl.addEventListener("click", async (event) => {
    id = Number(inputId.value);
    let findProduct = await getById(id);
    console.log(findProduct);
    inputTitleEl.value = findProduct.title;
    inputPriceEl.value = findProduct.price;
    inputDescriptionEl.value = findProduct.description;
    inputCategoryEl.value = findProduct.category.id;
    inputImagesEl.value = findProduct.images;
  }

);



  modifyButtonEl.addEventListener("click", async () => {
    const updateProduct = {
      title: inputTitleEl.value,
      price: inputPriceEl.value,
      description: inputDescriptionEl.value,
      categoryId: inputCategoryEl.value,
      images: [inputImagesEl.value],
    };

    PUT(id, updateProduct);
    console.log(id, updateProduct);
    //  console.log(await PUT(id, updateProduct));
  });




// const staticProduct = {
//   title: "Hello",
//   price: 28,
//   description: "hello there",
//   categoryId: 8,
//   images: ["https://asd.asd"],
// };

// console.log(await editProduct(883, staticProduct));
