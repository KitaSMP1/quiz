const questions = [    // Memahami Hidangan Lauk Pauk Khas Daerah (Soal 1-10)
  {
      question: "Berikut yang bukan merupakan hidangan lauk pauk khas daerah adalah...",
      options: ["Rendang", "Gudeg", "Sushi", "Pepes"],
      answer: "Sushi",
  },
  {
      question: "Hidangan lauk pauk khas daerah berasal dari...",
      options: ["Benua Eropa", "Kawasan Asia Timur", "Berbagai daerah di Indonesia", "Benua Amerika"],
      answer: "Berbagai daerah di Indonesia",
  },
  {
      question: "Tujuan utama memahami hidangan lauk pauk khas daerah adalah...",
      options: ["Hanya untuk mengetahui nama makanan", "Melestarikan budaya dan tradisi", "Membuat makanan modern", "Berjualan makanan"],
      answer: "Melestarikan budaya dan tradisi",
  },
  {
      question: "Proses perencanaan dan desain produk olahan lauk pauk khas daerah meliputi...",
      options: ["Hanya proses memasak", "Observasi, eksplorasi, dan produksi", "Hanya proses pengemasan", "Hanya proses pemasaran"],
      answer: "Observasi, eksplorasi, dan produksi",
  },
  {
      question: "Faktor yang tidak perlu diperhatikan dalam produksi produk olahan lauk pauk khas daerah adalah...",
      options: ["Bahan baku", "Teknik memasak", "Harga bahan bakar", "Kebersihan"],
      answer: "Harga bahan bakar",
  },
  {
      question: "Rendang berasal dari daerah...",
      options: ["Jawa Tengah", "Sumatera Barat", "Bali", "Sulawesi Selatan"],
      answer: "Sumatera Barat",
  },
  {
      question: "Gudeg terbuat dari...",
      options: ["Daging sapi", "Nangka muda", "Ikan", "Ayam"],
      answer: "Nangka muda",
  },
  {
      question: "Pepes biasanya dibungkus dengan...",
      options: ["Plastik", "Daun pisang", "Kertas", "Aluminium foil"],
      answer: "Daun pisang",
  },
  {
      question: "Berikut adalah contoh lauk pauk khas daerah berbahan dasar ikan, kecuali...",
      options: ["Pepes ikan", "Ikan bakar rica-rica", "Rendang ikan", "Arsik"],
      answer: "Rendang ikan",
  },
  {
      question: "Lauk pauk khas daerah memiliki nilai gizi dan filosofi yang...",
      options: ["Tidak penting", "Kurang penting", "Sangat penting", "Biasa saja"],
      answer: "Sangat penting",
  },

  // Memahami Produk Eco Enzyme (Soal 11-20)
  {
      question: "Eco enzyme adalah larutan hasil fermentasi dari...",
      options: ["Bahan kimia", "Limbah organik", "Bahan anorganik", "Makanan siap saji"],
      answer: "Limbah organik",
  },
  {
      question: "Manfaat eco enzyme bagi lingkungan adalah...",
      options: ["Mencemari lingkungan", "Mengurangi pencemaran lingkungan", "Menambah sampah", "Merusak tanah"],
      answer: "Mengurangi pencemaran lingkungan",
  },
  {
      question: "Proses pembuatan eco enzyme melibatkan...",
      options: ["Pemanasan suhu tinggi", "Fermentasi", "Pendinginan suhu rendah", "Pencampuran bahan kimia"],
      answer: "Fermentasi",
  },
  {
      question: "Berikut yang bukan merupakan contoh penggunaan eco enzyme adalah...",
      options: ["Pembersih lantai", "Pupuk tanaman", "Bahan bakar kendaraan", "Pembersih udara"],
      answer: "Bahan bakar kendaraan",
  },
  {
      question: "Perencanaan dan desain produk nonpangan eco enzyme meliputi...",
      options: ["Hanya proses pembuatan", "Observasi, eksplorasi, dan pengemasan", "Hanya proses pemasaran", "Hanya proses penjualan"],
      answer: "Observasi, eksplorasi, dan pengemasan",
  },
  {
      question: "Bahan utama pembuatan eco enzyme adalah...",
      options: ["Sayuran segar", "Buah-buahan segar", "Limbah kulit buah dan sayur", "Daging"],
      answer: "Limbah kulit buah dan sayur",
  },
  {
      question: "Proses fermentasi eco enzyme memerlukan waktu sekitar...",
      options: ["1 minggu", "1 bulan", "3 bulan", "6 bulan"],
      answer: "3 bulan",
  },
  {
      question: "Eco enzyme dapat digunakan sebagai...",
      options: ["Pestisida alami", "Herbisida kimia", "Fungisida sintetis", "Insektisida berbahaya"],
      answer: "Pestisida alami",
  },
  {
      question: "Salah satu manfaat eco enzyme untuk kesehatan adalah...",
      options: ["Menyebabkan alergi", "Mengurangi bau tidak sedap", "Menyebabkan iritasi kulit", "Merusak pernapasan"],
      answer: "Mengurangi bau tidak sedap",
  },
  {
      question: "Eco enzyme dapat membantu mengurangi...",
      options: ["Polusi udara", "Polusi air", "Sampah organik", "Semua benar"],
      answer: "Semua benar",
  },

  // Memahami Produk Olahan Pangan Kontinental (Soal 21-30)
  {
      question: "Produk olahan pangan kontinental berasal dari...",
      options: ["Benua Asia", "Benua Afrika", "Benua Eropa", "Benua Australia"],
      answer: "Benua Eropa",
  },
  {
      question: "Berikut yang merupakan contoh produk olahan pangan kontinental adalah...",
      options: ["Sushi", "Ramen", "Pasta", "Kimchi"],
      answer: "Pasta",
  },
  {
      question: "Perbedaan antara pasta dan roti terletak pada...",
      options: ["Bahan baku", "Proses pembuatan", "Bentuk", "Semua benar"],
      answer: "Semua benar",
  },
  {
      question: "Observasi dan eksplorasi produk olahan pangan kontinental bertujuan untuk...",
      options: ["Hanya mengetahui nama produk", "Menganalisis bahan baku dan teknik pengolahan", "Hanya untuk dimakan", "Hanya untuk dijual"],
      answer: "Menganalisis bahan baku dan teknik pengolahan",
  },
  {
      question: "Analisis dalam observasi dan eksplorasi produk olahan pangan kontinental meliputi...",
      options: ["Hanya rasa", "Hanya warna", "Bahan baku, teknik pengolahan, dan karakteristik produk", "Hanya harga"],
      answer: "Bahan baku, teknik pengolahan, dan karakteristik produk",
  },
  {
      question: "Salah satu contoh produk olahan pangan kontinental berbahan dasar susu adalah...",
      options: ["Pasta", "Roti", "Keju", "Sosis"],
      answer: "Keju",
  },
  {
      question: "Teknik pengolahan yang sering digunakan dalam masakan kontinental adalah...",
      options: ["Menggoreng", "Memanggang", "Merebus", "Mengukus"],
      answer: "Memanggang",
  },
  {
      question: "Berikut adalah contoh hidangan penutup khas kontinental, kecuali...",
      options: ["Tiramisu", "Crepes", "Es krim", "Klepon"],
      answer: "Klepon",
  },
  {
      question: "Produk olahan pangan kontinental biasanya memiliki cita rasa...",
      options: ["Pedas", "Manis", "Gurih", "Beragam"],
      answer: "Beragam",
  },
  {
      question: "Salah satu contoh produk olahan pangan kontinental yang terbuat dari gandum adalah...",
      options: ["Keju", "Sosis", "Roti", "Yoghurt"],
      answer: "Roti",
  },
    // Memahami Produk Nonpangan Dari Tanaman Herbal (Soal 31-40)
    {
      question: "Produk nonpangan dari tanaman herbal adalah produk yang...",
      options: ["Bisa dimakan", "Tidak bisa dimakan", "Terbuat dari bahan kimia", "Terbuat dari daging"],
      answer: "Tidak bisa dimakan",
  },
  {
      question: "Berikut yang merupakan contoh produk nonpangan dari tanaman herbal adalah...",
      options: ["Rendang", "Sabun", "Gudeg", "Sushi"],
      answer: "Sabun",
  },
  {
      question: "Manfaat produk nonpangan dari tanaman herbal adalah...",
      options: ["Hanya untuk hiasan", "Untuk kesehatan dan kecantikan", "Untuk makanan", "Untuk bahan bakar"],
      answer: "Untuk kesehatan dan kecantikan",
  },
  {
      question: "Proses pembuatan produk nonpangan dari tanaman herbal meliputi...",
      options: ["Hanya proses memasak", "Ekstraksi, pencampuran, dan pengemasan", "Hanya proses penjualan", "Hanya proses pemasaran"],
      answer: "Ekstraksi, pencampuran, dan pengemasan",
  },
  {
      question: "Hal yang perlu diperhatikan dalam kemasan dan label produk nonpangan dari herbal adalah...",
      options: ["Hanya warna", "Informasi produk dan daya tarik", "Hanya harga", "Hanya ukuran"],
      answer: "Informasi produk dan daya tarik",
  },
  {
      question: "Contoh tanaman herbal yang sering digunakan dalam produk nonpangan adalah...",
      options: ["Kangkung", "Lidah buaya", "Bayam", "Wortel"],
      answer: "Lidah buaya",
  },
  {
      question: "Produk nonpangan dari tanaman herbal dapat berupa...",
      options: ["Obat-obatan", "Kosmetik", "Sabun", "Semua benar"],
      answer: "Semua benar",
  },
  {
      question: "Teknik ekstraksi yang umum digunakan dalam pembuatan produk nonpangan herbal adalah...",
      options: ["Perebusan", "Pengeringan", "Penyulingan", "Penggorengan"],
      answer: "Penyulingan",
  },
  {
      question: "Produk nonpangan dari tanaman herbal biasanya memiliki sifat...",
      options: ["Kimiawi", "Alami", "Sintetis", "Beracun"],
      answer: "Alami",
  },
  {
      question: "Salah satu manfaat lidah buaya dalam produk nonpangan adalah untuk...",
      options: ["Pewarna makanan", "Pelembab kulit", "Penyedap rasa", "Pengawet makanan"],
      answer: "Pelembab kulit",
  },

  // Memahami Produk Olahan Pangan Oriental (Soal 41-50)
  {
      question: "Produk olahan pangan oriental berasal dari...",
      options: ["Benua Eropa", "Benua Afrika", "Kawasan Asia Timur", "Benua Amerika"],
      answer: "Kawasan Asia Timur",
  },
  {
      question: "Berikut yang merupakan contoh produk olahan pangan oriental adalah...",
      options: ["Pasta", "Roti", "Sushi", "Keju"],
      answer: "Sushi",
  },
  {
      question: "Perbedaan antara sushi dan ramen terletak pada...",
      options: ["Bahan baku", "Cara penyajian", "Asal negara", "Semua benar"],
      answer: "Semua benar",
  },
  {
      question: "Cara merencanakan usaha pangan oriental meliputi...",
      options: ["Hanya proses memasak", "Perencanaan menu, modal, dan pemasaran", "Hanya proses penjualan", "Hanya proses promosi"],
      answer: "Perencanaan menu, modal, dan pemasaran",
  },
  {
      question: "Hal yang perlu diperhatikan dalam label dan kemasan olahan pangan oriental adalah...",
      options: ["Hanya warna", "Informasi produk dan daya tarik", "Hanya harga", "Hanya ukuran"],
      answer: "Informasi produk dan daya tarik",
  },
  {
      question: "Sushi adalah makanan khas dari...",
      options: ["China", "Jepang", "Korea", "Thailand"],
      answer: "Jepang",
  },
  {
      question: "Ramen adalah mie kuah khas dari...",
      options: ["China", "Jepang", "Korea", "Vietnam"],
      answer: "Jepang",
  },
  {
      question: "Dim sum adalah makanan kecil khas dari...",
      options: ["China", "Jepang", "Korea", "Filipina"],
      answer: "China",
  },
  {
      question: "Bumbu yang sering digunakan dalam masakan oriental adalah...",
      options: ["Garam", "Merica", "Kecap", "Gula"],
      answer: "Kecap",
  },
  {
      question: "Masakan oriental umumnya memiliki rasa yang...",
      options: ["Pedas", "Manis", "Asin", "Beragam"],
      answer: "Beragam",
  },

  // Memahami Produksi Pengawetan Pangan Nabati Dan Hewani (Soal 51-60)
  {
      question: "Pengawetan pangan nabati dan hewani adalah proses untuk...",
      options: ["Mempercepat pembusukan", "Memperlambat pembusukan", "Menambah rasa", "Mengubah warna"],
      answer: "Memperlambat pembusukan",
  },
  {
      question: "Berikut yang merupakan contoh teknik pengawetan pangan nabati dan hewani adalah...",
      options: ["Memasak", "Menggoreng", "Pengeringan", "Merebus"],
      answer: "Pengeringan",
  },
  {
      question: "Prinsip dasar pengawetan pangan adalah...",
      options: ["Menambah mikroorganisme", "Mengurangi mikroorganisme", "Mengubah rasa", "Mengubah warna"],
      answer: "Mengurangi mikroorganisme",
  },
  {
      question: "Cara membuat produk pengawetan pangan nabati dan hewani meliputi...",
      options: ["Hanya proses memasak", "Persiapan bahan, proses pengawetan, dan pengemasan", "Hanya proses penjualan", "Hanya proses pemasaran"],
      answer: "Persiapan bahan, proses pengawetan, dan pengemasan",
  },
  {
      question: "Faktor yang mempengaruhi kualitas produk pengawetan pangan nabati dan hewani adalah...",
      options: ["Hanya bahan baku", "Hanya teknik pengawetan", "Bahan baku, teknik pengawetan, dan penyimpanan", "Hanya penyimpanan"],
      answer: "Bahan baku, teknik pengawetan, dan penyimpanan",
  },
  {
      question: "Perbedaan antara pengeringan dan pengasinan terletak pada...",
      options: ["Bahan baku", "Proses pengawetan", "Hasil produk", "Semua benar"],
      answer: "Semua benar",
  },
  {
      question: "Tujuan memahami produksi pengawetan pangan nabati dan hewani adalah...",
      options: ["Hanya untuk mengetahui nama makanan", "Untuk memperpanjang umur simpan makanan", "Untuk membuat makanan modern", "Untuk berjualan makanan"],
      answer: "Untuk memperpanjang umur simpan makanan",
  },
  {
      question: "Hal yang perlu dieksplorasi dalam pengawetan pangan nabati dan hewani adalah...",
      options: ["Hanya bahan baku", "Teknik pengawetan dan bahan tambahan", "Hanya rasa", "Hanya warna"],
      answer: "Teknik pengawetan dan bahan tambahan",
  },
  {
      question: "Cara merancang pembuatan produk pengawetan pangan nabati dan hewani meliputi...",
      options: ["Hanya proses memasak", "Perencanaan bahan, alat, dan proses", "Hanya proses penjualan", "Hanya proses pemasaran"],
      answer: "Perencanaan bahan, alat, dan proses",
  },
  {
      question: "Hal yang perlu diperhatikan dalam proses pengawetan pangan nabati dan hewani adalah...",
      options: ["Hanya kebersihan", "Suhu, waktu, dan kebersihan", "Hanya waktu", "Hanya suhu"],
      answer: "Suhu, waktu, dan kebersihan",
  },
    // Memahami Usaha Pengolahan Produk Pengawetan Pangan Nabati Dan Hewani (Soal 61-70)
    {
      question: "Peluang usaha produk pengawetan pangan nabati dan hewani meliputi...",
      options: ["Hanya penjualan bahan baku", "Produksi dan penjualan produk awetan", "Hanya penjualan alat pengawetan", "Hanya penjualan kemasan"],
      answer: "Produksi dan penjualan produk awetan",
  },
  {
      question: "Cara pengemasan dan pemberian label makanan awetan meliputi...",
      options: ["Hanya menggunakan plastik", "Menggunakan kemasan yang menarik dan memberikan informasi produk", "Hanya menggunakan kertas", "Hanya menulis nama produk"],
      answer: "Menggunakan kemasan yang menarik dan memberikan informasi produk",
  },
  {
      question: "Strategi promosi produk awetan nabati dan hewani meliputi...",
      options: ["Hanya memberikan diskon", "Pemasaran online, offline, dan promosi penjualan", "Hanya memasang iklan", "Hanya memberikan sampel"],
      answer: "Pemasaran online, offline, dan promosi penjualan",
  },
  {
      question: "Cara membuat proposal usaha produk pangan awetan meliputi...",
      options: ["Hanya menulis nama produk", "Perencanaan usaha, analisis pasar, dan keuangan", "Hanya menulis harga", "Hanya menulis bahan baku"],
      answer: "Perencanaan usaha, analisis pasar, dan keuangan",
  },
  {
      question: "Hal yang perlu diperhatikan dalam usaha pengolahan produk pengawetan pangan nabati dan hewani adalah...",
      options: ["Hanya modal", "Produksi, pemasaran, dan keuangan", "Hanya pemasaran", "Hanya produksi"],
      answer: "Produksi, pemasaran, dan keuangan",
  },
  {
      question: "Contoh produk pengawetan pangan nabati adalah...",
      options: ["Dendeng", "Abon", "Keripik buah", "Ikan asin"],
      answer: "Keripik buah",
  },
  {
      question: "Contoh produk pengawetan pangan hewani adalah...",
      options: ["Manisan buah", "Asinan sayur", "Dendeng", "Keripik singkong"],
      answer: "Dendeng",
  },
  {
      question: "Tujuan pengemasan makanan awetan adalah...",
      options: ["Hanya agar terlihat cantik", "Melindungi produk dan memberikan informasi", "Hanya agar mudah dibawa", "Hanya agar mahal"],
      answer: "Melindungi produk dan memberikan informasi",
  },
  {
      question: "Proposal usaha produk pangan awetan sebaiknya mencakup...",
      options: ["Hanya modal", "Rencana produksi, pemasaran, dan keuangan", "Hanya harga jual", "Hanya bahan baku"],
      answer: "Rencana produksi, pemasaran, dan keuangan",
  },
  {
      question: "Keberhasilan usaha pengolahan produk pengawetan pangan nabati dan hewani dipengaruhi oleh...",
      options: ["Hanya modal", "Kualitas produk, pemasaran, dan manajemen", "Hanya pemasaran", "Hanya produksi"],
      answer: "Kualitas produk, pemasaran, dan manajemen",
  },
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

// Fungsi untuk memuat soal utama dan sub-questions
function loadQuestion() {
  const q = questions[currentQuestionIndex];
  let quizHTML = `<div class="question">${q.question}</div>`;

  // Tambah pilihan jawaban utama
  q.options.forEach((option, index) => {
    let optionId = `option-${index}`;
    quizHTML += `
            <input type="radio" id="${optionId}" name="answer" value="${option}">
            <label for="${optionId}">${option}</label><br>`;
  });

  // Tambah sub-questions jika ada
  if (q.subQuestions) {
    q.subQuestions.forEach((subQ, subIndex) => {
      quizHTML += `
                <div class="sub-question-container">
                    <div class="sub-question">${subQ.question}</div>`;

      subQ.options.forEach((subOption, subOptIndex) => {
        let subOptionId = `sub-${subIndex}-${subOptIndex}`;
        quizHTML += `
                    <input type="radio" id="${subOptionId}" name="sub-answer-${subIndex}" value="${subOption}">
                    <label for="${subOptionId}">${subOption}</label><br>`;
      });

      quizHTML += `</div>`; // Tutup kontainer sub-question
    });
  }

  quizContainer.innerHTML = quizHTML;
  nextButton.disabled = true; // Pastikan tombol "Next Question" tidak bisa diklik
}

// **Fix: Cek semua jawaban sebelum lanjut**
function checkAnswer() {
  const q = questions[currentQuestionIndex];
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (!selectedOption) {
    alert("Pilih salah satu jawaban untuk soal utama!");
    return;
  }

  let allCorrect = selectedOption.value === q.answer;

  // **Fix: Cek sub-questions juga dengan jawaban yang benar**
  if (q.subQuestions) {
    q.subQuestions.forEach((subQ, subIndex) => {
      const selectedSubOption = document.querySelector(
        `input[name="sub-answer-${subIndex}"]:checked`
      );
      if (!selectedSubOption || selectedSubOption.value !== subQ.answer) {
        allCorrect = false;
      }
    });
  }

  if (allCorrect) {
    resultContainer.innerHTML = `<p style="color: green; font-weight: bold;">Jawaban Benar!</p>`;
    nextButton.disabled = false; // **Fix: Aktifkan tombol "Next Question"**
  } else {
    resultContainer.innerHTML = `<p style="color: red; font-weight: bold;">Jawaban Salah. Coba lagi!</p>`;
    nextButton.disabled = true; // **Fix: Pastikan tombol "Next" tetap mati jika salah**
  }
}

// **Fix: Pindah ke pertanyaan berikutnya**
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    resultContainer.innerHTML = "";
    nextButton.disabled = true; // **Fix: Matikan tombol "Next" untuk pertanyaan baru**
    loadQuestion();
  } else {
    quizContainer.innerHTML =
      "<h2>Selamat! Kamu telah menyelesaikan kuis!</h2>";
    nextButton.style.display = "none";
  }
}

// **Event listener tombol cek jawaban**
document.getElementById("check-btn").addEventListener("click", checkAnswer);

// **Event listener tombol Next Question**
nextButton.addEventListener("click", nextQuestion);

// Fungsi untuk memainkan lagu & menampilkan popup
let isPlaying = false;
const audio = new Audio();
let currentSong = "lagu1.mp3"; // Lagu default

// List lagu yang bisa dipilih
const songList = [
  { title: "DJ I Don't Know why", file: "/lagu/lagu1.mp3" },
  { title: "DJ Nasty Girl", file: "/lagu/lagu2.mp3" },
  { title: "Blue yungkai bejir", file: "/lagu/lagu3.mp3" }, 
  { title: "Radio KitaSMP",  file: "https://stream.zeno.fm/yfq95ezz4ywuv"},
];

// Bikin modal popup untuk pemutar lagu (awalannya disembunyikan)
const modal = document.createElement("div");
modal.id = "music-modal";
modal.classList.add("modal");
modal.style.display = "none"; // Sekarang modal awalnya disembunyikan
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>🎵 Sekarang Memutar:</h2>
        <p id="song-title">PILIH LAGUNYA DULU KOCAK</p>
        <button id="modal-music-btn">⏯ Play/Pause</button>
        <h3>Pilih Lagu:</h3>
        <select id="song-selector"></select>
    </div>
`;
document.body.appendChild(modal);

// Ambil elemen-elemen dari modal
const closeModal = modal.querySelector(".close");
const modalMusicBtn = modal.querySelector("#modal-music-btn");
const songSelector = modal.querySelector("#song-selector");
const songTitle = modal.querySelector("#song-title");

// Tambahin lagu ke dropdown
songList.forEach((song) => {
  let option = document.createElement("option");
  option.value = song.file;
  option.textContent = song.title;
  songSelector.appendChild(option);
});

// Fungsi untuk menampilkan popup
function showMusicModal() {
  modal.style.display = "flex";
}

// Fungsi untuk play/pause lagu
function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    modalMusicBtn.innerHTML = "▶ Play";
  } else {
    audio.play();
    modalMusicBtn.innerHTML = "⏸ Pause";
  }
  isPlaying = !isPlaying;
}

// Fungsi untuk mengganti lagu
function changeSong() {
  currentSong = songSelector.value;
  audio.src = currentSong;
  audio.play();
  songTitle.textContent = songList.find(
    (song) => song.file === currentSong
  ).title;
  modalMusicBtn.innerHTML = "⏸ Pause";
  isPlaying = true;
}

// Event listener untuk tombol musik (baru muncul saat diklik)
document.getElementById("music-btn").addEventListener("click", showMusicModal);

// Event listener untuk tombol Play/Pause di modal
modalMusicBtn.addEventListener("click", toggleMusic);

// Event listener untuk mengganti lagu
songSelector.addEventListener("change", changeSong);

// Event listener untuk tombol close (❌)
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Tutup modal jika klik di luar area modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Muat soal pertama
loadQuestion();
