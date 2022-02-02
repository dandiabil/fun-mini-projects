function pilihanC(){
    let compPilih = '';
    const angka = Math.random();
    if(angka > 0.33 && angka < 0.66) return compPilih = 'gunting';
    if(angka > 0.66) return compPilih = 'kertas';
    return compPilih = 'batu';
}

const main = () => {
    let Pscore = 0;
    let Cscore = 0;
    let playerPilih = '';
    const computerImg = document.querySelector('.container-comp img');
    const detail = document.querySelector('.detail p');

    const mulai = () =>{
        const pilihan = document.querySelectorAll('.container-player img');
        pilihan.forEach(function(e){
            e.addEventListener('click', function(){
                let pilC = pilihanC();
                detail.textContent = '';
                if(e.classList.contains('batu')){
                    playerPilih = 'batu';
                } 
                if(e.classList.contains('gunting')){
                    playerPilih = 'gunting';
                } 
                if(e.classList.contains('kertas')){
                    playerPilih = 'kertas';
                }
                random();
                setTimeout(function(){
                    hasil(playerPilih, pilC);
                    computerImg.src = `./assets/img/${pilC}.png`;
                }, 1000);
            });
        });

    };

    const hasil = (playerPilih, pilC) =>{
        if(playerPilih === pilC){
            detail.textContent = 'SERI';
            return;
        }
        if(playerPilih === 'batu'){
            if(pilC === 'gunting'){
                detail.textContent = 'PLAYER';
                Pscore++;
                updateScore();
                return;
            }else{
                detail.textContent = 'COMPUTER';
                Cscore++;
                updateScore();
                return;
            }
        }
        if(playerPilih === 'gunting'){
            if(pilC === 'kertas'){
                detail.textContent = 'PLAYER';
                Pscore++;
                updateScore();
                return;
            }else{
                detail.textContent = 'COMPUTER';
                Cscore++;
                updateScore();
                return;
            }
        }
        if(playerPilih === 'kertas'){
            if(pilC === 'batu'){
                detail.textContent = 'PLAYER';
                Pscore++;
                updateScore();
                return;
            }else{
                detail.textContent = 'COMPUTER';
                Cscore++;
                updateScore();
                return;
            }
        }
    };

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.innerHTML = Pscore;
        computerScore.textContent = Cscore;
    };

    const random = () =>{
        let i = 0;
        const pil = ['batu', 'gunting', 'kertas'];
        const waktuMulai = new Date().getTime();
        setInterval(function(){
            if(new Date().getTime() - waktuMulai > 1000){
                clearInterval();
                return;
            }
            computerImg.src = `./assets/img/${pil[i++]}.png`;
            if(i == pil.length) i = 0;
        },100);
    }

mulai();


};

main();