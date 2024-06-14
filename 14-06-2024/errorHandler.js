const titleErrorMessage = document.querySelector(".title-error");
const priceErrorMessage = document.querySelector(".price-error");
const descriptionErrorMessage = document.querySelector(".description-error");
const categoryErrorMessage = document.querySelector(".category-error");
const imagesErrorMessage = document.querySelector(".images-error");

const errorHandler = (err) => {


  err.message.forEach((message) => {
    switch(true) {
      case message.includes('title'):  
      titleErrorMessage.textContent = message;
      break;

      case message.includes('price'):
      priceErrorMessage.textContent = message;
      break;

      case message.includes('category'):
      categoryErrorMessage.textContent = message;
      break;

      case message.includes('description'):
      descriptionErrorMessage.textContent = message;
      break;

      case message.includes('images'):
      imagesErrorMessage.textContent = message;
      break;

      default: 
      console.log('Error');
    }
  });
  
  console.error(`${err.statusCode} - ${err.error}`);
};

export default errorHandler;
