//Esercizio 1: manipoliamo il dom e sfruttiamo l'event bubbling la propagazione degli eventi
const divEl = document.querySelector('.container');
const firstBtn = document.querySelector('.first-button');
const secondBtn = document.querySelector('.second-button');

const pEl = document.createElement('p');
pEl.className = 'message';


divEl.addEventListener('click', (event) => {

  if (event.target.tagName === 'BUTTON') {
    pEl.textContent = `${event.target.className} is clicked!`;
    divEl.append(pEl);
  } else {
    event.stopPropagation();
  }
  
});


//Esercizio 2: provate a creare una funzione globale che logga il this, chiamare questa funzione al click e provate a leggere il contesto di event.target 
const functionBtn = document.querySelector(".function-button");

function globalFunc() {
  console.log(this);
  // console.log(this.className);
}
functionBtn.addEventListener('click', globalFunc);


// Esercizio 3 (Opzionale): proviamo a creare una modale che verrà creata al click di un button messo a DOM, 
// dentro questa modale monteremo 3 elementi cliccabili, 2 button "YES" / "NO" che al click faranno un semplice console log, 
// e un bottone close per chiudere la modale

const openModal = document.querySelector('.open-modal');
let timeoutID;

function createModal() {
  const modal = document.createElement("div");
  const modalCard = document.createElement("div");
  const yesBtn = document.createElement("button");
  const noBtn = document.createElement("button");
  const closeBtn = document.createElement("button");
  const timer = document.createElement("div");

  modalCard.textContent =  'This is modal';
  modalCard.className = "modal__card";
  modal.className = "modal";

  yesBtn.textContent = "Yes";
  yesBtn.className = "modal__btn--yes";

  noBtn.textContent = "No";
  noBtn.className = "modal__btn--no";

  closeBtn.textContent = "X";
  closeBtn.className = "modal__btn--close";

  document.body.append(modal);
  modal.append(modalCard);
  modalCard.appendChild(yesBtn);
  modalCard.appendChild(noBtn);
  modalCard.appendChild(closeBtn);
  modalCard.appendChild(timer);

  // Esercizio 5 (Opzionale): vogliamo mostrare il timer dei 5 secondi prima della chiusura della modale? proviamoci
  let seconds = 5;
  const timerInterval = setInterval(() => {
    timer.textContent = `Modal closing in ${seconds}`;
    seconds--;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      document.body.removeChild(modal);
    }
  }, 1000);

  modalCard.addEventListener("click", (event) => {
    if (event.target.className === "modal__btn--yes") {
      console.log(event.target.className);
    } else if (event.target.className === "modal__btn--no") {
      console.log(event.target.className);
    } else {
      clearTimeout(timeoutID);
      document.body.removeChild(modal);
    }
    event.stopPropagation();
  });

  // Esercizio 4 (Opzionale): inseriamo pure un bel setTimeout e fate chiudere la modale ad ogni modo dopo 5000ms
  timeoutID = setTimeout(() => {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
  }, 5000);
}

openModal.addEventListener('click', createModal);

// Esercizio 6 (Opzionale - Per i pazzi): Volete provare ad esplorare gli eventi dell'eventListener? 
// perchè non provate a vedere come leggere il valore del campo input tramite un eventListener? provate a mettere un campo input che all'inserimento di qualcosa,
//  al click vi apre la modale con un messaggio legato a quello che avete inserito al campo input es:
// input che dice: "inserisci il tuo nome" e al click di un button si apre una modale con scritto "benvenuto Lorenzo"

const inputEl = document.querySelector('.input-element');
const inputButton = document.querySelector(".input-button");


inputButton.addEventListener("click", () => {
  console.log(`Welcome ${inputEl.value}!`);
});