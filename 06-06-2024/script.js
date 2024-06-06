// Esercizio 1: esercitiamoci con fetch , 
// effettuiamo una chiamata a https://fakestoreapi.com/products, 
// sfruttando i .then() stampiamo a console i dati ottenuti comprensibili per js


fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((resData) => {

// Esercizio 4 (opzionale - avanzato): che ne dite di fare un button al centro della pagina che al click vi carica i prodotti a DOM?
    const buttonEl = document.querySelector(".show");

    buttonEl.addEventListener("click", (event) => {
      console.log(resData);
      // Esercizio 2: proviamo a stampare i dati ottenuti sul DOM,
      // va bene anche una card o un titolo, comunque che sia qualcosa ottenuta dalla risposta della nostra chiamata
      // Esercizio 3 (opzionale): stampiamo tutti i prodotti con delle card, sbizzarritevi con lo stile
      resData.forEach((element) => {
        
        const containerEl = document.querySelector(".container");
        const card = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("h2");
        const cardPrice = document.createElement("span");

        card.className = "card";
        cardImg.className = "card-image";
        cardImg.src = element.image;
        cardTitle.textContent = element.title;
        cardPrice.textContent = element.price + "$";
        

        containerEl.append(card);
        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);

      });
      event.stopPropagation();
    });

    let inputValue = '';
    const inputEl = document.querySelector('.input');
    const inputBtn = document.querySelector(".input-button");

    inputEl.addEventListener('input', (event) => {
       inputValue = event.target.value;
       
    })
    
    inputBtn.addEventListener('click', () => {

      const categories = [
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing",
      ];

      if(categories.includes(inputValue)) {
        console.log('we have it!');
      } else {
        alert('Sorry, we do not have that category');
        
      }
      
      
    })
  });



// Esercizio 5 (opzionale - pazzo): -solo per pazzi- e se inserissimo un campo input
//  che all'inserimento del testo filtra i prodotti stampati sul DOM?