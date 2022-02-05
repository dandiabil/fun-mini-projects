const penumpang = document.querySelectorAll("#penumpang");
const liPenumpang = Array.from(penumpang).map((p) => p.textContent);

const button = document.querySelectorAll("button");
const [btnTambah, btnHapus] = button;
const input = document.querySelectorAll("input");
const [inputTambah, inputHapus] = input;

btnTambah.addEventListener("click", () => {
  if (!inputTambah.value) return alert("Nama penumpang tidak boleh kosong!");
  tambahPenumpang(inputTambah.value, liPenumpang);
  updateUI();
});

btnHapus.addEventListener("click", () => {
  if (!inputHapus.value) return alert("Nama penumpang tidak boleh kosong!");
  hapusPenumpang(inputHapus.value, liPenumpang);
  updateUI();
});

const updateUI = () => {
  penumpang.forEach((p, i) => (p.textContent = liPenumpang[i]));
  input.forEach((i) => (i.value = ""));
};

const tambahPenumpang = (namaPenumpang, liPenumpang) => {
  if (liPenumpang.length == 0) {
    liPenumpang.push(namaPenumpang);
    return liPenumpang;
  } else {
    for (let i = 0; i < liPenumpang.length; i++) {
      if (liPenumpang[i] === "") {
        liPenumpang[i] = namaPenumpang;
        penumpang[i].parentNode.classList.replace("kosong", "isi");
        return liPenumpang;
      } else if (liPenumpang[i] == namaPenumpang) {
        alert("Penumpang sudah ada didalam mobil");
        return liPenumpang;
      } else if (i == liPenumpang.length - 1) {
        alert("Angkot sudah penuh");
        return liPenumpang;
      }
    }
  }
};

const hapusPenumpang = (namaPenumpang, liPenumpang) => {
  let adaPenumpang = true;
  if (liPenumpang.length == 0) {
    alert("Angkot kosong");
    return liPenumpang;
  } else {
    for (let i = 0; i < liPenumpang.length; i++) {
      if (liPenumpang[i] == namaPenumpang) {
        liPenumpang[i] = "";
        penumpang[i].parentNode.classList.replace("isi", "kosong");
        return liPenumpang;
      } else {
        adaPenumpang = false;
      }
    }
    if (!adaPenumpang) {
      alert(namaPenumpang + " tidak ada dalam angkot");
    }
  }
};
