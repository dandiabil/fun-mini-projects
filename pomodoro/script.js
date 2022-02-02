let timer = 1500;
const btnStart = document.getElementById("start");
const btnRestart = document.getElementById("restart");
const timerContainer = document.querySelector(".time");
let minutes = timer / 60 - 1;
let seconds = 60;
let tick;

function start() {

  createTimer();

  tick = setInterval(() => {
    seconds--;
    if (seconds == 0) {
      seconds = 60;
      minutes--;
    }
    refreshUI();
  }, 1000);
  
  function refreshUI() {
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");
    minute.innerText = minutes;
    second.innerText = seconds;
  }
}

function stop() {
  clearInterval(tick);
  createTimer();
}

function createTimer() {
  timerContainer.innerHTML = "";
  const newMinute = document.createElement("p");
  const newSecond = document.createElement("p");
  const separator = document.createElement("p");

  const minuteSpan = document.createElement("span");
  const separatorSpan = document.createElement("span");
  const secondSpan = document.createElement("span");

  minuteSpan.classList.add("minute");
  separatorSpan.classList.add("separator");
  secondSpan.classList.add("second");
  
  newMinute.innerText = "25";
  separator.innerText = ":";
  newSecond.innerText = "00";
  
  minuteSpan.append(newMinute);
  separatorSpan.append(separator);
  secondSpan.append(newSecond);
  
  timerContainer.append(minuteSpan, separatorSpan, secondSpan);
}

btnStart.addEventListener("click", function () {
  start();
});

btnRestart.addEventListener("click", function () {
  stop();
});