const inputSliders = document.querySelectorAll('.slider input')
const rectangle = document.querySelector('.rectangle')
const btnRandom = document.querySelector('.btn-random')

inputSliders.forEach((slider) => {
    slider.addEventListener('input', (e) => {
        let topLeft = e.target.id == 'top-left' ? e.target.value : null; 
        let topRight = e.target.id == 'top-right' ? e.target.value : null; 
        let bottomRight = e.target.id == 'bottom-right' ? e.target.value : null; 
        let bottomLeft = e.target.id == 'bottom-left' ? e.target.value : null; 

        rectangle.style.borderTopLeftRadius = `${topLeft}px`
        rectangle.style.borderTopRightRadius = `${topRight}px`
        rectangle.style.borderBottomRightRadius = `${bottomRight}px`
        rectangle.style.borderBottomLeftRadius = `${bottomLeft}px`
    })
})

btnRandom.addEventListener('click', (e) => {
    e.preventDefault();
    const randomValue = () => Math.floor(Math.random() * 100)

    const topLeft = randomValue();
    const topRight = randomValue();
    const bottomRight = randomValue();
    const bottomLeft = randomValue();
    
    rectangle.style.borderTopLeftRadius = `${topLeft}px`
    rectangle.style.borderTopRightRadius = `${topRight}px`
    rectangle.style.borderBottomRightRadius = `${bottomRight}px`
    rectangle.style.borderBottomLeftRadius = `${bottomLeft}px`
    
    document.getElementById('top-left').value = topLeft;
    document.getElementById('bottom-left').value = topRight;
    document.getElementById('top-right').value = bottomRight;
    document.getElementById('bottom-right').value = bottomLeft;

    console.log(topLeft, topRight, bottomLeft, bottomRight)
})