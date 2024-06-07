
import { API_KEY } from "./keys.js";

const containerEl = document.querySelector(".container");
const searchBar = document.querySelector(".search-bar");
const buttonsEl = document.querySelectorAll(".page-btn");
const rateBtn = document.querySelector(".rate-btn");
let BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

let page = 1;
let results = [];

// Fetch Movies
const fetchMovies = (page) => {
  fetch(`${BASE_URL}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      results = response.results;
      renderList(results, containerEl);
    })
    .catch((err) => console.error("Error:", err));
};

//Seeing all the cards on page load
window.onload = () => {
  fetchMovies(page);

//Search bar filter
  searchBar.addEventListener("input", (event) => {
    const inputValue = event.target.value.toLowerCase();
    filterMovies(inputValue, results);
  });

//Pagination Buttons
  buttonsEl.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("btn-left")) {
        if (page <= 1) return;
        page--;
      } else {
        page++;
      }
      fetchMovies(page);
    });
  });
};

//Rendering Movie Card List
function renderList(movies, container) {
  container.innerHTML = "";
  movies.forEach((element) => {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h2");
    const cardOverview = document.createElement("p");

    card.className = "card";
    cardImg.className = "card-img";
    cardImg.src = `https://image.tmdb.org/t/p/w1280${element.poster_path}`;
    cardTitle.textContent = element.title;
    cardOverview.textContent = element.overview;

    container.append(card);
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardOverview);
  });
}

//Filter movies
function filterMovies(title, movies) {
  const filteredResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title)
  );
  renderList(filteredResults, containerEl);
}

rateBtn.addEventListener('click', () => {
  BASE_URL = "https://api.themoviedb.org/3/movie/top_rated";
  fetchMovies(page);
})