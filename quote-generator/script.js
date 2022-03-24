const API_URL = "https://api.quotable.io/random";
let data = null;

const renderUI = () => {
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");
  if (data) {
    quote.innerText = data.content;
    author.innerText = `author - ${data.author}`;
  }
};

const getRandomQuote = async (e) => {
  e.preventDefault();
  await fetch(API_URL)
    .then((response) => response.json())
    .then((response) => (data = response))
    .catch((err) => console.log(err));
  console.log(data);
  renderUI();
};

document.addEventListener("DOMContentLoaded", getRandomQuote);
