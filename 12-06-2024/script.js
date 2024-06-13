const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category-id");
const inputImagesEl = document.querySelector(".images");
const buttonEl = document.querySelector(".button-send");

const containerEl = document.querySelector('.container')
const dialogEl = document.querySelector('dialog');
const closeDialogBtnEl = document.querySelector('.close-dialog');


closeDialogBtnEl.addEventListener('click', ()=> {
  dialogEl.close();
})

const inputID = document.querySelector('.product-id');
const deleteBtnEl = document.querySelector('.button-delete');

const BASE_URL = "https://api.escuelajs.co/";
const endpointProducts = "api/v1/products";

// GET METHOD
const GET = async () => {
  const res = await fetch(`${BASE_URL}${endpointProducts}?limit=20&offset=0`);

  const data = res.json();
  return data;

};

console.log(await GET());

//POST METHOD
const POST = async (product) => {
  const res = await fetch(`${BASE_URL}${endpointProducts}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });

  const data = await res.json();
  console.log(data);
  return data.id;
};

//Adding new product-Form/POST
buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  const newProduct = {
    title: inputTitleEl.value,
    price: inputPriceEl.value,
    description: inputDescriptionEl.value,
    categoryId: inputCategoryEl.value,
    images: [inputImagesEl.value],
  };


 POST(newProduct)


});

//DELETE METHOD
const DELETE = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${endpointProducts}/${id}`, {
      method: 'DELETE',
    })
      if (!res.ok) {
        throw new Error('Product not found')
      }
    const data = await res.json()
    console.log(data);
    return data;

  }catch (error) {
  console.log('This is an error message', error);
  return null;
  }
  
}

 //Delete product on button click
deleteBtnEl.addEventListener('click', async () =>{
  let id = inputID.value;
  const result = await DELETE(id);
  if(result) {
    dialogEl.showModal();
    setTimeout(() => {dialogEl.close()}, 3000)
  } 
})






//NOT WORKING

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

render();