const questions = [
  {
    question:
      "Kabel jaringan yang terdiri dari beberapa pasang kawat tembaga yang dipilin bersama untuk mengurangi gangguan elektromagnetik disebut...",
    options: [
      "Kabel Coaxial",
      "Kabel Fiber Optic",
      "Kabel UTP",
      "Kabel STP",
      "Kabel Listrik",
    ],
    answer: "Kabel UTP",
  },
  {
    question: "Perbedaan utama antara Static VLAN dan Dynamic VLAN adalah...",
    options: [
      "Static VLAN lebih cepat daripada Dynamic VLAN.",
      "Static VLAN dikonfigurasi secara manual, sedangkan Dynamic VLAN otomatis.",
      "Dynamic VLAN lebih aman daripada Static VLAN.",
      "Static VLAN hanya digunakan untuk jaringan kecil.",
      "Dynamic VLAN hanya digunakan untuk jaringan besar.",
    ],
    answer:
      "Static VLAN dikonfigurasi secara manual, sedangkan Dynamic VLAN otomatis.",
  },
  {
    question: "Cara kerja NAT dinamis adalah...",
    options: [
      "Menerjemahkan alamat IP publik ke alamat IP privat.",
      "Menerjemahkan alamat IP privat ke alamat IP publik dari pool yang tersedia.",
      "Memberikan alamat IP statis ke setiap perangkat.",
      "Memblokir semua lalu lintas jaringan.",
      "Menggandakan alamat IP privat.",
    ],
    answer:
      "Menerjemahkan alamat IP privat ke alamat IP publik dari pool yang tersedia.",
  },
  {
    question: "Salah satu kelebihan topologi mesh adalah...",
    options: [
      "Biaya pemasangan murah.",
      "Pemasangan sederhana.",
      "Redundansi tinggi.",
      "Pemeliharaan mudah.",
      "Skalabilitas rendah.",
    ],
    answer: "Redundansi tinggi.",
  },
  {
    question: "Perbedaan utama antara IPv4 dan IPv6 adalah...",
    options: [
      "IPv4 lebih aman daripada IPv6.",
      "IPv6 menggunakan alamat 128-bit, sedangkan IPv4 menggunakan 32-bit.",
      "IPv4 lebih cepat daripada IPv6.",
      "IPv6 lebih rumit daripada IPv4.",
      "IPv4 hanya digunakan untuk jaringan lokal.",
    ],
    answer:
      "IPv6 menggunakan alamat 128-bit, sedangkan IPv4 menggunakan 32-bit.",
  },
  {
    question: "Tools seperti Traceroute atau MTR digunakan untuk...",
    options: [
      "Memblokir serangan jaringan.",
      "Menganalisis jalur jaringan dan mendeteksi latensi.",
      "Mengkonfigurasi alamat IP.",
      "Mempercepat koneksi internet.",
      "Mengenkripsi data jaringan.",
    ],
    answer: "Menganalisis jalur jaringan dan mendeteksi latensi.",
  },
  {
    question: "Fungsi network diagram adalah...",
    options: [
      "Meningkatkan kecepatan jaringan.",
      "Menggambarkan struktur jaringan.",
      "Mengamankan jaringan dari serangan.",
      "Mengkonfigurasi router.",
      "Memperbaiki kerusakan hardware.",
    ],
    answer: "Menggambarkan struktur jaringan.",
  },
  {
    question: "Pentingnya dokumentasi jaringan adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Memudahkan troubleshooting dan perencanaan ekspansi.",
      "Mengurangi biaya hardware.",
      "Meningkatkan kecepatan server.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Memudahkan troubleshooting dan perencanaan ekspansi.",
  },
  {
    question: "Fungsi log server adalah...",
    options: [
      "Memblokir serangan jaringan.",
      "Mencatat aktivitas jaringan.",
      "Mengatur bandwidth jaringan.",
      "Mengenkripsi data jaringan.",
      "Mempercepat koneksi internet.",
    ],
    answer: "Mencatat aktivitas jaringan.",
  },
  {
    question: "Fungsi proxy server adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Bertindak sebagai perantara antara klien dan server.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Bertindak sebagai perantara antara klien dan server.",
  },
  {
    question: "Mikrotik RouterOS adalah...",
    options: [
      "Sistem operasi untuk server web.",
      "Sistem operasi untuk mengelola jaringan.",
      "Aplikasi untuk memindai jaringan.",
      "Perangkat keras untuk router.",
      "Aplikasi untuk membuat network diagram.",
    ],
    answer: "Sistem operasi untuk mengelola jaringan.",
  },
  {
    question: "Tujuan SD-WAN adalah...",
    options: [
      "Mengganti semua perangkat keras jaringan.",
      "Mengoptimalkan lalu lintas WAN menggunakan SDN.",
      "Mempercepat koneksi internet lokal.",
      "Mengamankan jaringan dari serangan fisik.",
      "Mengurangi biaya langganan internet.",
    ],
    answer: "Mengoptimalkan lalu lintas WAN menggunakan SDN.",
  },
  {
    question: "East-West Traffic dalam data center adalah...",
    options: [
      "Lalu lintas data antara data center dan internet.",
      "Lalu lintas data antar server dalam satu data center.",
      "Lalu lintas data dari klien ke server.",
      "Lalu lintas data dari server ke klien.",
      "Lalu lintas data antar gedung.",
    ],
    answer: "Lalu lintas data antar server dalam satu data center.",
  },
  {
    question: "Keuntungan cloud computing adalah...",
    options: [
      "Biaya hardware lebih murah.",
      "Skalabilitas dan efisiensi biaya.",
      "Kontrol penuh atas perangkat keras.",
      "Keamanan fisik yang lebih baik.",
      "Kecepatan jaringan lokal yang lebih tinggi.",
    ],
    answer: "Skalabilitas dan efisiensi biaya.",
  },
  {
    question: "Layanan yang disediakan IaaS adalah...",
    options: [
      "Aplikasi perangkat lunak siap pakai.",
      "Infrastruktur seperti server virtual dan storage.",
      "Platform pengembangan aplikasi.",
      "Layanan email dan kolaborasi.",
      "Layanan pembuatan website.",
    ],
    answer: "Infrastruktur seperti server virtual dan storage.",
  },
  {
    question: "Fungsi utama VPN server adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Mengamankan koneksi jaringan dengan enkripsi.",
      "Memblokir serangan jaringan.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Mengamankan koneksi jaringan dengan enkripsi.",
  },
  {
    question: "Topologi jaringan dengan hub atau switch adalah...",
    options: [
      "Topologi bus.",
      "Topologi ring.",
      "Topologi mesh.",
      "Topologi star.",
      "Topologi hybrid.",
    ],
    answer: "Topologi star.",
  },
  {
    question: "Fungsi VLAN adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Memisahkan jaringan secara logis.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Memisahkan jaringan secara logis.",
  },
  {
    question: "Pengertian subnetting adalah...",
    options: [
      "Proses menggabungkan beberapa jaringan.",
      "Proses membagi jaringan besar menjadi subnet kecil.",
      "Proses mengamankan jaringan dari serangan.",
      "Proses mempercepat koneksi internet.",
      "Proses mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Proses membagi jaringan besar menjadi subnet kecil.",
  },
  {
    question: "Protokol routing dinamis yang umum digunakan adalah...",
    options: [
      "TCP, UDP, IP.",
      "OSPF, RIP, EIGRP.",
      "HTTP, HTTPS, FTP.",
      "DNS, DHCP, SNMP.",
      "SSH, SSL, TLS.",
    ],
    answer: "OSPF, RIP, EIGRP.",
  },
  {
    question: "Tujuan autentikasi pengguna jaringan adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Memastikan hanya pengguna sah yang dapat mengakses jaringan.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Memastikan hanya pengguna sah yang dapat mengakses jaringan.",
  },
  {
    question: "Port default HTTP adalah...",
    options: ["21", "22", "25", "80", "443"],
    answer: "80",
  },
  {
    question: "Port default HTTPS adalah...",
    options: ["21", "22", "25", "80", "443"],
    answer: "443",
  },
  {
    question: "Fungsi perintah ipconfig (Windows) / ifconfig (Linux) adalah...",
    options: [
      "Mengkonfigurasi router.",
      "Menampilkan informasi konfigurasi jaringan perangkat.",
      "Memblokir serangan jaringan.",
      "Mengenkripsi data jaringan.",
      "Mempercepat koneksi internet.",
    ],
    answer: "Menampilkan informasi konfigurasi jaringan perangkat.",
  },
  {
    question: "Fungsi utama NAT adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Menerjemahkan alamat IP privat ke publik.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Menerjemahkan alamat IP privat ke publik.",
  },

  {
    question:
      "Jenis serangan jaringan yang membanjiri target dengan lalu lintas palsu adalah...",
    options: [
      "Serangan Man-in-the-Middle.",
      "Serangan DDoS.",
      "Serangan Phishing.",
      "Serangan SQL Injection.",
      "Serangan Brute Force.",
    ],
    answer: "Serangan DDoS.",
  },
  {
    question: "Protokol enkripsi yang umum digunakan untuk VPN adalah...",
    options: [
      "TCP, UDP, IP.",
      "IPSec, OpenVPN, WireGuard.",
      "HTTP, HTTPS, FTP.",
      "DNS, DHCP, SNMP.",
      "SSH, SSL, TLS.",
    ],
    answer: "IPSec, OpenVPN, WireGuard.",
  },
  {
    question:
      "Tools untuk menganalisa lalu lintas jaringan dan menangkap paket data adalah...",
    options: [
      "Nmap, ping.",
      "Wireshark, tcpdump.",
      "ipconfig, ifconfig.",
      "netstat, route.",
      "traceroute, mtr.",
    ],
    answer: "Wireshark, tcpdump.",
  },
  {
    question: "Tujuan Infrastructure as Code (IaC) adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Mengelola infrastruktur jaringan dengan kode.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Mengelola infrastruktur jaringan dengan kode.",
  },
  {
    question: "Sistem operasi server yang umum digunakan adalah...",
    options: [
      "Windows 10, macOS.",
      "Linux (Ubuntu, CentOS, Debian), Windows Server.",
      "Android, iOS.",
      "Chrome OS, FreeBSD.",
      "Solaris, AIX.",
    ],
    answer: "Linux (Ubuntu, CentOS, Debian), Windows Server.",
  },
  {
    question: "Fungsi RAID (Redundant Array of Independent Disks) adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Redundansi penyimpanan untuk meningkatkan kecepatan dan keandalan data.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer:
      "Redundansi penyimpanan untuk meningkatkan kecepatan dan keandalan data.",
  },
  {
    question: "Fungsi server DHCP adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Memberikan alamat IP secara otomatis ke perangkat dalam jaringan.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Memberikan alamat IP secara otomatis ke perangkat dalam jaringan.",
  },
  {
    question: "Tujuan High Availability (HA) adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Memastikan layanan tetap berjalan meskipun ada kegagalan perangkat.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer:
      "Memastikan layanan tetap berjalan meskipun ada kegagalan perangkat.",
  },
  {
    question: "Pentingnya Backup & Recovery Data adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Mencegah kehilangan data akibat kegagalan sistem atau serangan.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Mencegah kehilangan data akibat kegagalan sistem atau serangan.",
  },
  {
    question: "Tujuan monitoring jaringan secara proaktif adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Mencegah gangguan sebelum terjadi.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Mencegah gangguan sebelum terjadi.",
  },
  {
    question: "Perangkat penyimpanan server adalah...",
    options: [
      "RAM, CPU, GPU.",
      "HDD, SSD, NVMe.",
      "Motherboard, power supply.",
      "Network card, sound card.",
      "Keyboard, mouse.",
    ],
    answer: "HDD, SSD, NVMe.",
  },
  {
    question: "Software manajemen server adalah...",
    options: [
      "Microsoft Office, Adobe Photoshop.",
      "Nagios, Zabbix, PRTG Network Monitor.",
      "Google Chrome, Mozilla Firefox.",
      "Visual Studio Code, Eclipse.",
      "VLC Media Player, WinRAR.",
    ],
    answer: "Nagios, Zabbix, PRTG Network Monitor.",
  },
  {
    question: "Fungsi Load Balancer adalah...",
    options: [
      "Mempercepat koneksi internet.",
      "Membagi lalu lintas ke beberapa server untuk menghindari overload.",
      "Mengamankan jaringan dari serangan DDoS.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
    ],
    answer:
      "Membagi lalu lintas ke beberapa server untuk menghindari overload.",
  },
  {
    question: "CDN (Content Delivery Network) adalah...",
    options: [
      "Jaringan komputer lokal.",
      "Jaringan untuk mempercepat distribusi konten dengan cache.",
      "Jaringan untuk mengamankan data.",
      "Jaringan untuk mengkonfigurasi router.",
      "Jaringan untuk mengganti perangkat jaringan secara otomatis.",
    ],
    answer: "Jaringan untuk mempercepat distribusi konten dengan cache.",
  },
  {
    question: "Standar keamanan Wi-Fi paling aman adalah...",
    options: ["WEP.", "WPA.", "WPA2.", "WPA3.", "WPS."],
    answer: "WPA3.",
  },
  {
    question: "Captive Portal adalah...",
    options: [
      "Perangkat keras untuk router.",
      "Halaman login yang muncul saat mengakses Wi-Fi publik.",
      "Aplikasi untuk memindai jaringan.",
      "Protokol enkripsi untuk VPN.",
      "Sistem operasi untuk server.",
    ],
    answer: "Halaman login yang muncul saat mengakses Wi-Fi publik.",
  },
  {
    question: "Zero Trust Security adalah...",
    options: [
      "Sistem keamanan yang mempercayai semua perangkat.",
      "Sistem keamanan yang tidak mempercayai siapa pun tanpa verifikasi.",
      "Sistem keamanan yang hanya digunakan untuk jaringan lokal.",
      "Sistem keamanan yang hanya digunakan untuk server.",
      "Sistem keamanan yang hanya digunakan untuk perangkat mobile.",
    ],
    answer:
      "Sistem keamanan yang tidak mempercayai siapa pun tanpa verifikasi.",
  },
  {
    question: "SIEM (Security Information and Event Management) adalah...",
    options: [
      "Aplikasi untuk memindai jaringan.",
      "Sistem untuk mengumpulkan dan menganalisis data keamanan.",
      "Perangkat keras untuk router.",
      "Protokol enkripsi untuk VPN.",
      "Sistem operasi untuk server.",
    ],
    answer: "Sistem untuk mengumpulkan dan menganalisis data keamanan.",
  },
  {
    question: "Tools Nmap digunakan untuk...",
    options: [
      "Mengamankan jaringan dari serangan DDoS.",
      "Memindai jaringan untuk menemukan perangkat dan layanan yang aktif.",
      "Mengkonfigurasi router.",
      "Mengganti perangkat jaringan secara otomatis.",
      "Mempercepat koneksi internet.",
    ],
    answer:
      "Memindai jaringan untuk menemukan perangkat dan layanan yang aktif.",
  },
  {
    question: "Patch Management adalah...",
    options: [
      "Proses mengkonfigurasi router.",
      "Proses memastikan sistem selalu diperbarui agar aman dari eksploitasi.",
      "Proses mengamankan jaringan dari serangan DDoS.",
      "Proses mengganti perangkat jaringan secara otomatis.",
      "Mempercepat koneksi internet.",
    ],
    answer:
      "Proses memastikan sistem selalu diperbarui agar aman dari eksploitasi.",
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
