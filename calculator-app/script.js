const btnNumbers = document.querySelectorAll('.btn-number')
const btnOperation = document.querySelectorAll('.btn-operation')
const display = document.querySelector('.value')
const preview = document.querySelector('.preview')
const btnClear = document.querySelector('.btn-clear')
let val1 = 0;
let val2 = 0;
let isSecondValue = false;
let operator = '';

btnNumbers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(display.innerText === '0') display.innerText = e.target.innerText
        else display.innerText += e.target.innerText
    })
})

btnOperation.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        
        if(display.innerText === '0') return;
        
        if(!isSecondValue){
            if(e.target.innerText === '+'){
                operator = '+'
                isSecondValue = true;
            }
            if(e.target.innerText === '-'){
                operator = '-'
                isSecondValue = true;
            }
            val1 = parseInt(display.innerText)
            preview.innerText = `${val1} ${operator}`;
            display.innerText = '0';
            return;
        }
        if(e.target.innerText === '='){
            val2 = parseInt(display.innerText)
            isSecondValue = false;
            preview.innerText += ` ${val2}`;

            const total = evaluate(val1, val2, operator)
            
            display.innerText = total.toString();
            addHistory(preview.innerText, total.toString())
        }
    })
})

const addHistory = (string, total) => {
    const listContainer = document.querySelector('.list')
    const newHistory = document.createElement('p')

    newHistory.classList.add('list-item')
    newHistory.innerText = `${string} = ${total}`

    listContainer.appendChild(newHistory)
}

const evaluate = (firstValue, secondValue, operator) => {
    if(operator === '+'){
        return firstValue + secondValue;
    }
    return firstValue - secondValue
}

btnClear.addEventListener('click', () => {
    display.innerText = '0'
    val1, val2 = 0;
    preview.innerText = null;
})