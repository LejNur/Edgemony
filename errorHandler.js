const titleErrorMessage = document.querySelector(".title-error");
const priceErrorMessage = document.querySelector(".price-error");
const descriptionErrorMessage = document.querySelector(".description-error");
const categoryErrorMessage = document.querySelector(".category-error");
const imagesErrorMessage = document.querySelector(".images-error");

const errorHandler = (err) => {


  err.message.forEach((message) => {
    if (message.includes("title")) {
      titleErrorMessage.textContent = message;
      return;
    }

    if (message.includes("price")) {
      priceErrorMessage.textContent = message;
      return;
    }

    if (message.includes("category")) {
      categoryErrorMessage.textContent = message;
      return;
    }

    if (message.includes("description")) {
      descriptionErrorMessage.textContent = message;
      return;
    }

    if (message.includes("images")) {
      imagesErrorMessage.textContent = message;
      return;
    }
  });




  console.error(`${err.statusCode} - ${err.error}`);
};

export default errorHandler;
