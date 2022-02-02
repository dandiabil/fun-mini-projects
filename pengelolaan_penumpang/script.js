//Program pengelolaan penumpang terdiri dari 12 elemen array penumpang
//ada dua fungsi tambahPenumpang() dan hapusPenumpang()
//hapusPenumpang()
//tambahPenumpang(nama penumpang, array penumpang)


// let penumpang = ['Dandi', 'a', 'b', 'c', 'd'];
// let penumpang = [];

const penumpang = document.querySelectorAll('#penumpang');
let liPenumpang = [];
penumpang.forEach(p => liPenumpang.push(p.textContent));

// const btnTambah = document.querySelector('.btnTambah');
// let inputTambah = document.getElementById('tambah');

const button = document.querySelectorAll('button');
const [btnTambah, btnHapus] = button;
const input = document.querySelectorAll('input');
const [inputTambah, inputHapus] = input;

btnTambah.addEventListener('click', function(){
    tambahPenumpang(inputTambah.value, liPenumpang);
    updateUI();
});

// const btnHapus = document.querySelector('.btnHapus');
// let inputHapus = document.getElementById('hapus');

btnHapus.addEventListener('click', function(){
    hapusPenumpang(inputHapus.value, liPenumpang);
    updateUI();
});


function updateUI(){
    penumpang.forEach((p, i) => p.textContent = liPenumpang[i]);
    input.forEach(i => i.value = '');
}

function tambahPenumpang(namaPenumpang, liPenumpang){
    if(liPenumpang.length == 0){
        liPenumpang.push(namaPenumpang);
        return liPenumpang;
    }else{
        for(var i = 0; i < liPenumpang.length; i++){
            if(liPenumpang[i] === '(Kosong)'){
                liPenumpang[i] = namaPenumpang;
                penumpang[i].classList.add('isi');
                return liPenumpang;
            }else if(liPenumpang[i] == namaPenumpang){
                alert("Penumpang sudah ada didalam mobil");
                return liPenumpang;
            }
            // else if(liPenumpang.length - 1 == i){
            //     liPenumpang.push(namaPenumpang);
            //     return liPenumpang;
            // }
            else if(i == liPenumpang.length){
                alert('Angkot sudah penuh');
                return liPenumpang;
            }
        }
    }
}

function hapusPenumpang(namaPenumpang, liPenumpang){
    var adaPenumpang = true;
    if(liPenumpang.length == 0){
        alert("Angkot kosong");
        return liPenumpang;
    }else{
        for(var i = 0; i < liPenumpang.length; i++){
            if(liPenumpang[i] == namaPenumpang){
                liPenumpang[i] = '(Kosong)';
                penumpang[i].classList.remove('isi');
                return liPenumpang;
            }else{
                adaPenumpang = false;
            }
        }
        if(!adaPenumpang){
            alert(namaPenumpang + " tidak ada dalam angkot");
        }
    }
}