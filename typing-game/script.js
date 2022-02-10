const sentencesDisplay = document.getElementById("sentences");
const inputWord = document.getElementById("input-word");
const sentences = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolorem delectus rerum veritatis amet eveniet ipsum necessitatibus voluptatibus est eligendi"
const btn = document.getElementById('btn');
let sentencesArray = [];

let i = 0;

const start = () => {
  sentencesArray = sentences.split(' ')
  sentencesArray.map((word, i) => {
    let display = '';
    if(i === 0) sentencesDisplay.innerHTML += `<span class="word selected-word">${word}</span> `;
    else{
      display = `<span class="word">${word}</span> `;
      sentencesDisplay.innerHTML += display;
    }
  })
  inputWord.focus();
}

const reset = () => {
  sentencesDisplay.innerHTML = ''
  i = 0;
}


inputWord.addEventListener("input", (e) => {
  const word = document.querySelectorAll('.word')
  if (e.target.value === sentencesArray[i]) {
    word[i].classList.remove('selected-word')
    i++;
    e.target.value = null;
  }
  word[i].classList.add('selected-word')
});

btn.addEventListener('click', (e) => {
  if(e.target.innerText === 'Start') {
    e.target.innerText = 'Reset'
    return start();
  }
  reset()
  e.target.innerText = 'Start'
})
