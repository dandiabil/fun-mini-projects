const btnStart = document.getElementById("start");
const btnRestart = document.getElementById("restart");
const timerContainer = document.querySelector(".time");

let timer = 1500;
let minutes = timer / 60 - 1;
let seconds = 60;
let tick;

const start = () => {
  btnStart.setAttribute("src", "./assets/pause_black_24dp.svg");
  btnStart.setAttribute("alt", "pause");

  tick = setInterval(() => {
    seconds--;
    if (seconds == 0) {
      seconds = 60;
      minutes--;
    }
    refreshUI();
  }, 1000);
};

const refreshUI = () => {
  const minute = document.querySelector(".minute");
  const second = document.querySelector(".second");
  minute.innerText = minutes;
  second.innerText = seconds;
};

const pause = () => {
  btnStart.setAttribute("src", "./assets/play_arrow_black_24dp.svg");
  btnStart.setAttribute("alt", "start");
  clearInterval(tick);
};

const resetTimer = () => {
  timerContainer.innerHTML = `<span class="minute"><p>25</p></span> <span class="separator"><p>:</p></span><span class="second"><p>00</p></span>`;
  minutes = timer / 60 - 1;
  seconds = 60;
};

btnStart.addEventListener("click", (e) => {
  console.log(e.target.alt);
  if (e.target.alt === "start") return start();
  pause();
});

btnRestart.addEventListener("click", () => {
  btnStart.setAttribute("src", "./assets/play_arrow_black_24dp.svg");
  btnStart.setAttribute("alt", "start");
  clearInterval(tick);
  resetTimer();
});
