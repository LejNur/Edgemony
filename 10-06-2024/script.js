
import { renderList } from "./renderList.js";
import { GET } from "./GET.js";

const containerEl = document.querySelector(".container");
const searchBar = document.querySelector(".search-bar");
const buttonsEl = document.querySelectorAll(".page-btn");
const category = document.querySelector('.category-container');

let page = 1;
let results = [];

//Seeing all the cards on page load
// window.onload = () => {
//   GET('popular', page) }

const render = async (endpoint) => {
  const movieResponse = await GET(endpoint, page);
  results = movieResponse.results;
  renderList(results, containerEl);
  
};

render('popular');

//Search bar filter
  searchBar.addEventListener("input", (event) => {
    const inputValue = event.target.value.toLowerCase();
    filterMovies(inputValue, results);
  });

  //Filter movies
function filterMovies(title, movies) {
  const filteredResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title)
  );
  renderList(filteredResults, containerEl);
}

category.addEventListener('click', (e) => {
  
  if(e.target.tagName === 'BUTTON'){
    const categoryID = e.target.id;
    render(categoryID, page);
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
      fetchMovies('', page);
    });
  });





