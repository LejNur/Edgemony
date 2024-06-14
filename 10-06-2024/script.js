
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
let query = ''



const render = async () => {
  const endpoint = `${currentType}/${currentEndpoint}`;
  const response = await GET(endpoint, page, query);
  results = response.results;
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
  
  
//Genres Filter
  const selectGenre = document.getElementById("genre");
  console.log(selectGenre);

  
  const renderGenreList = async () => {
    
    const genreListResponse = await GET('genre/movie/list');
    console.log(genreListResponse.genres);
    
    genreListResponse.genres.forEach((genre) => {
    const optionEl = document.createElement("option");
    optionEl.value = genre.id
    optionEl.textContent = genre.name;
    
    selectGenre.appendChild(optionEl);
  })

  
}

renderGenreList();

selectGenre.addEventListener("change", (e) => {
  const id = Number(e.target.value);
  page = 1;
  console.log("clicked id:", id);
  query = `with_genres=${id}`;
  currentType = `discover/${currentType}`;
  currentEndpoint='';
  render();
  
  
});


  

  //First solution for exercise genres filter
  // genre.addEventListener('change', (event) => {
  //    const genreID = Number(event.target.value);
  //   let filterGenre = results.filter((obj) => obj.genre_ids.includes(genreID));
  //   renderList(filterGenre, containerEl);
  // })