const inputBinary = document.getElementById('binary');
const inputDecimal = document.getElementById('decimal');
const btnConvert = document.querySelector('.btn');

btnConvert.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputBinary.classList.contains('invalid-input')) return alert('Only use 1s and 0s')
    const numbers = inputBinary.value;
    const decimal = bin2dec(numbers);

    inputDecimal.value = decimal;
})

const bin2dec = (numbers) => {
    let total = 0;
    for (let i = 0; i < 8; i++) {
        if(numbers[i] === '1'){
            total += 2 ** (7 - i);
            console.log(`total = ${total} + 2**${7 - i}`)
        }
        else continue;
    }
    console.log(total)
    return total;
}

inputBinary.addEventListener('input', (e) => {
    const checkInput = (numbers) => {
        for(const digit of numbers){
            if(digit !== '0' && digit !== '1'){
                return true;
            }
            // if(digit !== '1') console.log(digit);
            // console.log(digit)
        }
    }

    const input = checkInput(e.target.value);

    if(input){
        inputBinary.classList.add('invalid-input');
    }
    else inputBinary.classList.remove('invalid-input')
})