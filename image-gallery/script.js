// const display = document.querySelector('.display');
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if(e.target.classList == 'thumb'){
        // console.log(e.target.parentNode.previousElementSibling);
        e.target.parentNode.previousElementSibling.setAttribute('src', e.target.src);
    }
});