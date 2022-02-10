const sentences = document.getElementById("sentences").innerText.split(" ");
const inputWord = document.getElementById("word");

inputWord.addEventListener("keypress", (e) => {
  let guess = false;

  if (e.key === " ") {
    guess = check(e.target.value, i);
    if (guess) {
      i++;
    }
    console.log(guess, i);
    e.target.value = null;
  }
});

const check = (word, i) => {
  if (i === sentences.length - 1) {
    if (sentences[i] === word) return true;
    return false;
  }
};
