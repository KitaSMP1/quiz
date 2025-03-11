// Elemen DOM
const popupMateri = document.getElementById("popup-materi");
const openPopup = document.getElementById("open-popup");
const closePopup = document.querySelector(".close");
const materiSelect = document.getElementById("materi-select");
const selectedMateriText = document.getElementById("selected-materi").querySelector("span");
const startQuizButton = document.getElementById("start-quiz");

let selectedMateri = ""; // Variabel untuk menyimpan pilihan materi

// Buka popup saat tombol "Pilih Materi" diklik
openPopup.addEventListener("click", () => {
    popupMateri.style.display = "flex";
});

// Tutup popup saat tombol "X" diklik
closePopup.addEventListener("click", () => {
    popupMateri.style.display = "none";
});

materiSelect.addEventListener("change", () => {
    selectedMateri = materiSelect.value;
    openPopup.textContent = "Pilih Materi: " + materiSelect.options[materiSelect.selectedIndex].text; // Ubah teks di tombol
    startQuizButton.disabled = false; // Aktifkan tombol "Lanjut"
    popupMateri.style.display = "none"; // Tutup popup setelah memilih
});

// Pindah ke halaman yang dipilih
function bukaMateri() {
    if (selectedMateri) {
        window.location.href = selectedMateri;
    } else {
        alert("Pilih materi terlebih dahulu!");
    }
}
