const display = document.querySelector(".display-game");
const tiles = document.querySelectorAll(".image");
const restartBtn = document.getElementById("btn-restart");
let firstGuess = "";
let secondGuess = "";
let guess = 2;
let waitForCheck = false;

document.addEventListener("DOMContentLoaded", () => {
  const playerDetail = JSON.parse(sessionStorage.getItem("player"));
  if (!playerDetail) return window.location.replace(`./index.html`);

  startGame(playerDetail.name, playerDetail.difficulty);
});

const startGame = (name, difficulty) => {
  if (difficulty === "easy".toUpperCase()) {
    document.querySelector(".level-easy").style.display = "flex";
    const easyLevel = document.querySelectorAll(".level-easy .tile");
    easyLevel.forEach((tile) => {
      let random = Math.floor(Math.random() * 6);
      tile.style.order = random;
    });
  }
  if (difficulty === "normal".toUpperCase()) {
    document.querySelector(".level-normal").style.display = "flex";
    const normalLevel = document.querySelectorAll(".level-normal .tile");
    normalLevel.forEach((tile) => {
      let random = Math.floor(Math.random() * 8);
      tile.style.order = random;
    });
  }
  if (difficulty === "hard".toUpperCase()) {
    document.querySelector(".level-hard").style.display = "flex";
    const hardLevel = document.querySelectorAll(".level-hard .tile");
    hardLevel.forEach((tile) => {
      let random = Math.floor(Math.random() * 12);
      tile.style.order = random;
    });
  }
  tiles.forEach((tile) => tile.addEventListener("click", flipCard));
};

const checkIfMatch = (firstFruit, secondFruit) => {
  console.log(firstFruit.alt, secondFruit.alt);
  if (firstFruit.alt === secondFruit.alt) {
    firstFruit.removeEventListener("click", flipCard);
    secondFruit.removeEventListener("click", flipCard);
    return firstFruit.alt;
  }
  return 0;
};

const flipCard = (e) => {
  if (waitForCheck) return;
  if (e.target === firstGuess) return;

  if (guess > 0) {
    if (guess == 2) firstGuess = e.target;
    if (guess == 1) secondGuess = e.target;
    e.target.classList.add("opened");
    guess--;
  }
  if (guess === 0) {
    const match = checkIfMatch(firstGuess, secondGuess);
    waitForCheck = true;
    setTimeout(() => {
      tiles.forEach((tile) => {
        if (match === tile.alt) {
          tile.classList.add("match");
        }
        tile.classList.remove("opened");
      });
      guess = 2;
      waitForCheck = false;
    }, 1000);
  }
};

restartBtn.addEventListener("click", () => {
  tiles.forEach((tile) => {
    tile.classList.remove("match");
  });
  sessionStorage.removeItem("player");
  window.location.replace(`./index.html`);
});
