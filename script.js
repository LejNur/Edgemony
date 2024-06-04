const divEl = document.querySelector('.container');
const pEl = document.createElement('p');
const startBtn = document.createElement('button');
const stopBtn = document.createElement('button');

startBtn.textContent = 'Start Counter';
stopBtn.textContent = 'Stop Counter';

startBtn.className = 'start-btn';
stopBtn.className = "stop-btn";


divEl.append(pEl, startBtn, stopBtn);

const intervalFunction = () => {
    const interval= setInterval(()=> {
    pEl.textContent = new Date().toLocaleString("en-GB", {
      // weekday: "long",
      // year: "numeric",
      // month: "numeric",
      // day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    // console.log(pEl.textContent);
  }, 1000)

  return interval;
}

let intervalID = intervalFunction();


startBtn.addEventListener('click', () => {
  clearInterval(intervalID);
  intervalID = intervalFunction();
  // console.log(intervalID);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalID);
 
});