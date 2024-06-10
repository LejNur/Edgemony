
import { renderList } from "./renderList.js";
import { GET } from "./GET.js";

const containerEl = document.querySelector(".container");
const searchBar = document.querySelector(".search-bar");
const buttonsEl = document.querySelectorAll(".page-btn");
const category = document.querySelector('.category-container');
const type = document.querySelector('.type-container');


let page = 1;
let results = [];
let currentType = 'movie';
let currentEndpoint = 'popular';

//Seeing all the cards on page load
// window.onload = () => {
//   GET('popular', page) }

const render = async () => {
  const endpoint = `${currentType}/${currentEndpoint}`;
  const movieResponse = await GET(endpoint, page);
  results = movieResponse.results;
  renderList(results, containerEl);
  
};

render();


//Search bar filter
  searchBar.addEventListener("input", (event) => {
    const inputValue = event.target.value.toLowerCase();
    filter(inputValue, results);
  });

  //Filter movies
function filter(title, movies) {
  const filterResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title)
  );
  renderList(filterResults, containerEl);
}

//Category Filter
category.addEventListener('click', (e) => {
  const categoryID = e.target.id;
  if(e.target.tagName === 'BUTTON'){
    currentEndpoint = categoryID;
    page = 1;
    render();
  }
});


//Type Filter
type.addEventListener('click', (e) => {
  const typeID = e.target.id;
  if(e.target.tagName === 'BUTTON'){
    currentType = typeID;
    currentEndpoint = "popular";
    page = 1;
    render();
  }
})


//Pagination Buttons
  buttonsEl.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("btn-left")) {
        if (page <= 1) return;
        page--;
      } else {
        page++;
      }
      render();
    });
  });





