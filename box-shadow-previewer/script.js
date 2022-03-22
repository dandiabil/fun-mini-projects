const inputSliders = document.querySelectorAll(
  "input[type='range'], input[id='shadow-color']"
);
const colorInput = document.querySelector("input[id='fill-color']");
const display = document.querySelector(".display-wrapper");
// const btnRandom = document.querySelector(".btn-random");

console.log(inputSliders);

inputSliders.forEach((slider) => {
  slider.addEventListener("input", (e) => {
    let horizontalShadow = document.getElementById("h-sh").value;
    let verticalShadow = document.getElementById("v-sh").value;
    let blurDistance = document.getElementById("blur-d").value;
    let spreadDistance = document.getElementById("spread-d").value;
    let shadowColor = document.getElementById("shadow-color").value;

    display.style.boxShadow = `${horizontalShadow}px 
                                ${verticalShadow}px 
                                ${blurDistance}px 
                                ${spreadDistance}px
                                ${shadowColor}`;
    // display.style.boxShadow =
    //   "6px 6px 12px #2525254d, -6px -6px 12px #a2d8ff31";
    // console.log(
    //   `${horizontalShadow}px ${verticalShadow}px ${blurDistance}px ${spreadDistance}px`
    // );
  });
});

colorInput.addEventListener("input", (e) => {
  let fillColor = document.getElementById("fill-color").value;

  display.style.backgroundColor = fillColor;
  // display.style.boxShadow =
  //   "6px 6px 12px #2525254d, -6px -6px 12px #a2d8ff31";
  // console.log(
  //   `${horizontalShadow}px ${verticalShadow}px ${blurDistance}px ${spreadDistance}px`
  // );
});

// btnRandom.addEventListener('click', (e) => {
//     e.preventDefault();
//     const randomValue = () => Math.floor(Math.random() * 100)

//     const topLeft = randomValue();
//     const topRight = randomValue();
//     const bottomRight = randomValue();
//     const bottomLeft = randomValue();

//     rectangle.style.borderTopLeftRadius = `${topLeft}px`
//     rectangle.style.borderTopRightRadius = `${topRight}px`
//     rectangle.style.borderBottomRightRadius = `${bottomRight}px`
//     rectangle.style.borderBottomLeftRadius = `${bottomLeft}px`

//     document.getElementById('top-left').value = topLeft;
//     document.getElementById('bottom-left').value = topRight;
//     document.getElementById('top-right').value = bottomRight;
//     document.getElementById('bottom-right').value = bottomLeft;

//     console.log(topLeft, topRight, bottomLeft, bottomRight)
// })
