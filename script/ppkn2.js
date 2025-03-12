const questions = [
  {
    question: "Apa yang dimaksud dengan nilai praksis dalam Pancasila?",
    options: ["Nilai dasar", "Nilai instrumental", "Nilai yang diterapkan dalam kehidupan sehari-hari", "Nilai ideologi"],
    answer: "Nilai yang diterapkan dalam kehidupan sehari-hari",
  },
  {
    question: "Salah satu contoh penerapan Pancasila dalam kehidupan global adalah...",
    options: ["Mengisolasi diri dari negara lain", "Aktif dalam organisasi internasional", "Mengutamakan kepentingan pribadi", "Menghindari kerja sama dengan negara lain"],
    answer: "Aktif dalam organisasi internasional",
  },
  {
    question: "Gotong royong adalah praktik yang mencerminkan nilai...",
    options: ["Individualisme", "Kolektivisme", "Materialisme", "Hedonisme"],
    answer: "Kolektivisme",
  },
  {
    question: "Lembaga negara yang berfungsi sebagai pelaksana undang-undang adalah...",
    options: ["Yudikatif", "Eksekutif", "Legislatif", "Konstitutif"],
    answer: "Eksekutif",
  },
  {
    question: "Pemilih pemula adalah...",
    options: ["Pemilih yang sudah berpengalaman", "Pemilih yang baru pertama kali menggunakan hak pilih", "Pemilih yang tidak peduli politik", "Pemilih yang hanya memilih satu partai"],
    answer: "Pemilih yang baru pertama kali menggunakan hak pilih",
  },
  {
    question: "Makna Pancasila sebagai dasar negara adalah...",
    options: ["Sebagai simbol negara", "Sebagai panduan hidup", "Sebagai sumber hukum", "Sebagai ideologi tertutup"],
    answer: "Sebagai sumber hukum",
  },
  {
    question: "NKRI adalah singkatan dari...",
    options: ["Negara Kesatuan Rakyat Indonesia", "Negara Kesatuan Republik Indonesia", "Negara Kedaulatan Rakyat Indonesia", "Negara Kedaulatan Republik Indonesia"],
    answer: "Negara Kesatuan Republik Indonesia",
  },
  {
    question: "KPU adalah singkatan dari...",
    options: ["Komisi Pemberantasan Umum", "Komisi Pemilihan Umum", "Komite Pemilu Utama", "Komisi Pengawas Umum"],
    answer: "Komisi Pemilihan Umum",
  },
  {
    question: "Pancasila berfungsi sebagai pemersatu bangsa karena...",
    options: ["Memiliki banyak simbol", "Mengandung nilai-nilai universal", "Dibuat oleh satu kelompok", "Hanya berlaku untuk satu suku"],
    answer: "Mengandung nilai-nilai universal",
  },
  {
    question: "Contoh nasionalisme yang dimiliki generasi bangsa adalah...",
    options: ["Menggunakan produk luar negeri", "Menghargai budaya sendiri", "Mengutamakan kepentingan pribadi", "Tidak peduli dengan sejarah"],
    answer: "Menghargai budaya sendiri",
  },
  {
    question: "Nilai-nilai Pancasila yang diterapkan dalam kehidupan sehari-hari disebut nilai...",
    options: ["Dasar", "Instrumental", "Praksis", "Ideologi"],
    answer: "Praksis",
  },
  {
    question: "Contoh peran Indonesia dalam kancah dunia adalah...",
    options: ["Menjadi anggota tetap PBB", "Mengirim pasukan perdamaian", "Membuat senjata nuklir", "Menguasai negara lain"],
    answer: "Mengirim pasukan perdamaian",
  },
  {
    question: "Kerja sama antarwarga untuk mencapai tujuan bersama disebut...",
    options: ["Individualisme", "Gotong royong", "Kompetisi", "Liberalisme"],
    answer: "Gotong royong",
  },
  {
    question: "Lembaga negara yang berwenang mengadili pelanggaran hukum adalah...",
    options: ["Eksekutif", "Legislatif", "Yudikatif", "Konstitutif"],
    answer: "Yudikatif",
  },
  {
    question: "Pemilihan umum adalah sarana untuk...",
    options: ["Mengganti ideologi negara", "Memilih wakil rakyat", "Mengubah dasar negara", "Membubarkan partai politik"],
    answer: "Memilih wakil rakyat",
  },
  {
    question: "Perumusan Pancasila dilakukan oleh...",
    options: ["Presiden", "MPR", "BPUPKI", "DPR"],
    answer: "BPUPKI",
  },
  {
    question: "Undang-undang yang mengatur hak asasi manusia adalah...",
    options: ["UUD 1945", "UU HAM", "UU KPK", "UU Pemilu"],
    answer: "UU HAM",
  },
  {
    question: "Demokrasi yang berjalan sebelum Indonesia merdeka adalah...",
    options: ["Demokrasi liberal", "Demokrasi terpimpin", "Demokrasi Pancasila", "Demokrasi desa"],
    answer: "Demokrasi desa",
  },
  {
    question: "Patriotisme adalah sikap...",
    options: ["Cinta tanah air", "Cinta diri sendiri", "Cinta uang", "Cinta kekuasaan"],
    answer: "Cinta tanah air",
  },
  {
    question: "Sila pertama Pancasila berbunyi...",
    options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"],
    answer: "Ketuhanan Yang Maha Esa",
  },
  {
    question: "Contoh penerapan nilai kemanusiaan adalah...",
    options: ["Menghormati orang lain", "Mengutamakan diri sendiri", "Melanggar hak orang lain", "Acuh tak acuh"],
    answer: "Menghormati orang lain",
  },
  {
    question: "Indonesia dikenal dalam kancah dunia karena...",
    options: ["Kekuatan militernya", "Kekayaan alamnya", "Peran aktif dalam perdamaian dunia", "Jumlah penduduknya"],
    answer: "Peran aktif dalam perdamaian dunia",
  },
  {
    question: "Faktor pendorong gotong royong adalah...",
    options: ["Egoisme", "Solidaritas", "Individualisme", "Materialisme"],
    answer: "Solidaritas",
  },
  {
    question: "Lembaga negara yang membuat undang-undang adalah...",
    options: ["Eksekutif", "Legislatif", "Yudikatif", "Konstitutif"],
    answer: "Legislatif",
  },
  {
    question: "Pemilih pemula memiliki peran penting dalam...",
    options: ["Membubarkan negara", "Memilih pemimpin masa depan", "Mengubah ideologi", "Membuat kerusuhan"],
    answer: "Memilih pemimpin masa depan",
  },
  {
    question: "Kedudukan Pancasila sebagai...",
    options: ["Dasar negara", "Simbol negara", "Lagu kebangsaan", "Bendera negara"],
    answer: "Dasar negara",
  },
  {
    question: "Ciri khas budaya Indonesia adalah...",
    options: ["Keberagaman", "Keseragaman", "Keterbelakangan", "Kemiskinan"],
    answer: "Keberagaman",
  },
  {
    question: "Sistem pemerintahan sebelum Indonesia merdeka adalah...",
    options: ["Kerajaan", "Republik", "Demokrasi", "Komunisme"],
    answer: "Kerajaan",
  },
  {
    question: "Contoh sikap patriotisme adalah...",
    options: ["Rela berkorban untuk negara", "Mengutamakan kepentingan pribadi", "Menghindari pajak", "Melanggar hukum"],
    answer: "Rela berkorban untuk negara",
  },
  {
    question: "Sila kelima Pancasila berbunyi...",
    options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Keadilan sosial bagi seluruh rakyat Indonesia"],
    answer: "Keadilan sosial bagi seluruh rakyat Indonesia",
  },
  {
    question: "Nilai instrumental Pancasila adalah...",
    options: ["Nilai dasar", "Nilai yang diwujudkan dalam bentuk norma", "Nilai praksis", "Nilai ideologi"],
    answer: "Nilai yang diwujudkan dalam bentuk norma",
  },
  {
    question: "Contoh penerapan Pancasila dalam kehidupan global adalah...",
    options: ["Ikut campur urusan negara lain", "Menghormati kedaulatan negara lain", "Menguasai negara lain", "Mengisolasi diri"],
    answer: "Menghormati kedaulatan negara lain",
  },
  {
    question: "Tujuan utama gotong royong adalah...",
    options: ["Mencapai tujuan pribadi", "Mencapai tujuan bersama", "Mencapai kekuasaan", "Mencapai kekayaan"],
    answer: "Mencapai tujuan bersama",
  },
  {
    question: "Lembaga negara yang berwenang menguji undang-undang terhadap UUD 1945 adalah...",
    options: ["Mahkamah Agung", "Mahkamah Konstitusi", "Komisi Yudisial", "DPR"],
    answer: "Mahkamah Konstitusi",
  },
  {
    question: "Pemilih pemula perlu memahami sistem politik agar...",
    options: ["Bisa menjadi anggota partai politik", "Bisa memilih dengan bijak", "Bisa menjadi anggota DPR", "Bisa menjadi presiden"],
    answer: "Bisa memilih dengan bijak",
  },
  {
    question: "Nilai dan kaidah Pancasila berfungsi sebagai...",
    options: ["Aturan hukum", "Panduan hidup", "Simbol negara", "Lagu kebangsaan"],
    answer: "Panduan hidup",
  },
  {
    question: "Contoh sikap nasionalisme adalah...",
    options: ["Menggunakan produk luar negeri", "Menghargai produk dalam negeri", "Mengutamakan kepentingan pribadi", "Tidak peduli dengan budaya sendiri"],
    answer: "Menghargai produk dalam negeri",
  },
  {
    question: "Sila keempat Pancasila berbunyi...",
    options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"],
    answer: "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
  },
  {
    question: "Contoh penerapan nilai persatuan adalah...",
    options: ["Menghormati perbedaan", "Mengutamakan kelompok sendiri", "Menghindari kerja sama", "Menciptakan konflik"],
    answer: "Menghormati perbedaan",
  },
  {
    question: "Indonesia berperan aktif dalam perdamaian dunia melalui...",
    options: ["Invasi militer", "Diplomasi dan mediasi", "Perang dagang", "Isolasi diri"],
    answer: "Diplomasi dan mediasi",
  },
  {
    question: "Faktor penghambat gotong royong adalah...",
    options: ["Solidaritas", "Egoisme", "Kerja sama", "Toleransi"],
    answer: "Egoisme",
  },
  {
    question: "Lembaga negara yang berwenang mengawasi perilaku hakim adalah...",
    options: ["Mahkamah Agung", "Mahkamah Konstitusi", "Komisi Yudisial", "DPR"],
    answer: "Komisi Yudisial",
  },
  {
    question: "Pemilih pemula perlu memahami hak dan kewajiban agar...",
    options: ["Bisa menjadi anggota partai politik", "Bisa menggunakan hak pilih dengan bertanggung jawab", "Bisa menjadi anggota DPR", "Bisa menjadi presiden"],
    answer: "Bisa menggunakan hak pilih dengan bertanggung jawab",
  },
  {
    question: "Contoh penerapan nilai keadilan sosial adalah...",
    options: ["Memberikan bantuan kepada yang membutuhkan", "Mengutamakan kelompok sendiri", "Melanggar hak orang lain", "Acuh tak acuh"],
    answer: "Memberikan bantuan kepada yang membutuhkan",
  },
  {
    question: "Contoh sikap patriotisme adalah...",
    options: ["Rela berkorban untuk negara", "Mengutamakan kepentingan pribadi", "Menghindari pajak", "Melanggar hukum"],
    answer: "Rela berkorban untuk negara",
  },
  {
    question: "Sila ketiga Pancasila berbunyi...",
    options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"],
    answer: "Persatuan Indonesia",
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
