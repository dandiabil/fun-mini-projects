const colorDisp = document.querySelector('.color-display');

//reset slider
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function(){
    colorSliders.forEach(function(slider){
        slider.value = 0;
    });
    colorDisp.style.backgroundColor = 'rgb(0, 0, 0)';
});

//selectin slider
const colorSliders = document.querySelectorAll('#slider');
// console.log(colorSliders);
colorSliders.forEach(function(slider){
    slider.addEventListener('input', function(){
        var red = document.querySelector("input[name='merah']").value;
        var green = document.querySelector("input[name='hijau']").value;;
        var blue = document.querySelector("input[name='biru']").value;
        colorDisp.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});