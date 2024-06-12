const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category-id");
const inputImagesEl = document.querySelector(".images");
const buttonEl = document.querySelector(".button-send");

const inputID = document.querySelector('.product-id');
const deleteBtnEl = document.querySelector('.button-delete');

const BASE_URL = "https://api.escuelajs.co/";
const endpointProducts = "api/v1/products";

// GET METHOD
const GET = async () => {
  const res = await fetch(`${BASE_URL}${endpointProducts}?limit=10&offset=0`);

  const data = res.json();
  return data;
};

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
  const res = await fetch(`${BASE_URL}${endpointProducts}/${id}`, {
    method: 'DELETE'
  })

  const data = await res.json()
  console.log(data);
  
}

 //Delete product on button click
deleteBtnEl.addEventListener('click', () =>{
  let id = inputID.value;
  DELETE(id);

})








