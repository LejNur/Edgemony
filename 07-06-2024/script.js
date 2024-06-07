import { API_KEY } from "./keys.js";

const containerEl = document.querySelector('.container');
const searchBar = document.querySelector('.search-bar');


  fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((res) => res.json())

    .then((response) => {
      console.log(response);
      const results = response.results;
      renderList(results, containerEl);
      console.log(results);

      searchBar.addEventListener("input", (event) => {
        const inputValue = event.target.value;
        filterMovies(inputValue, results);
      });
    })
    .catch((err) => console.error(err));

    
//Making Card List
  function renderList (res, container) {

    res.forEach((element) => {
      const card = document.createElement("div");
      const cardImg = document.createElement("img");
      const cardTitle = document.createElement("h2");
      const cardOverview = document.createElement("p");

      card.className = "card";
      cardImg.className = 'card-img';
      cardImg.src = ` https://image.tmdb.org/t/p/w1280${element.poster_path}`;
      cardTitle.textContent = element.title;
      cardOverview.textContent = element.overview;

      container.append(card);
      card.appendChild(cardImg);
      card.appendChild(cardTitle);
      card.appendChild(cardOverview);
    });
  }


//Filtering movies with input
function filterMovies (title, movies) {
  const filterResult = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title);
  })

  containerEl.innerHTML = '';
  renderList(filterResult, containerEl);
}

