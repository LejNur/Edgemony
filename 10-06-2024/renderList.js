//Rendering Movie Card List

export function renderList(movie, container) {
  container.innerHTML = "";
  movie.forEach((element) => {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h2");
    const cardOverview = document.createElement("p");

    card.className = "card";
    cardImg.className = "card-img";
    cardImg.src = `https://image.tmdb.org/t/p/w1280${element.poster_path}`;
    cardTitle.textContent = element.title ?? element.name;
    cardOverview.textContent = element.overview;

    container.append(card);
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardOverview);
  });
}
