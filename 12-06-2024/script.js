const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category-id");
const inputImagesEl = document.querySelector(".images");
const buttonEl = document.querySelector(".button-send");


const BASE_URL = "https://api.escuelajs.co/";
const endpointProducts = "api/v1/products";


buttonEl.addEventListener("click", (e) => {
  inputTitleEl.value;
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



// GET METHOD
// const GET = async () => {
//   const res = await fetch(`${BASE_URL}${endpointProducts}?limit=8&offset=0`);

//   const data = res.json();
//   return data;
// };

// console.log(await GET());

//New Product
// const objTest = {
//   title: "New Product",
//   price: 10,
//   description: "A description",
//   categoryId: 1,
//   images: ["https://placeimg.com/640/480/any"],
// };

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


