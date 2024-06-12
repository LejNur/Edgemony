const inputTitleEl = document.querySelector(".title");
const inputPriceEl = document.querySelector(".price");
const inputDescriptionEl = document.querySelector(".description");
const inputCategoryEl = document.querySelector(".category-id");
const inputImagesEl = document.querySelector(".images");
const buttonEl = document.querySelector(".button-send");


const dialogEl = document.querySelector('dialog');
const closeDialogBtnEl = document.querySelector('.close-dialog');
const showModal = document.querySelector(".show-modal");

showModal.addEventListener('click',() => {
  
})

closeDialogBtnEl.addEventListener('click', ()=> {
  dialogEl.close();
})

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
  } 
})








