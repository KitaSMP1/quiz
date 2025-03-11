const questions = [
    {
        question: "Aplikasi server yang bertanggung jawab dalam proses penerjemahan hostname menjadi ip address adalah ...",
        options: ['Firewall', 'Server DNS', 'FQDN', 'BIND', 'Cache only name server'],
        answer: "Server DNS"
    },
    {
        question: "Apa kepanjangan dari WWW ...",
        options: ['Wide World Web', 'World Wide Web', 'Web Web Web', 'Web Wide World', 'Semua Benar'],
        answer: "World Wide Web"
    },
    {
        question: "Protokol TCP/IP berhubungan dengan pengguna aplikasi yang berguna untuk terminal maya jarak jauh",
        options: ['HTTP', 'FTP', 'SMTP', 'TELNET', 'UDP'],
        answer: "TELNET"
    },
    {
        question: "UDP (User Datagram Protocol) adalah protocol sejenis dengan TCP yang  :",
        options: ['connectionless', 'authorities', 'Oriented', 'connectionpass', 'Dynamic Host'],
        answer: "connectionless"
    },
    {
        question: "ID jaringan tidak dapat berupa angka 127 karena nomor ini berfungsi sebagai :",
        options: ['router', 'loopback', 'gateway', 'network', 'Default'],
        answer: "loopback"
    },
    {
        question: "Diketahui IP komputer Mr. Yusuf 191.1.67.5, berapa NetID dan HostID komputer tersebut?",
        options: [
            "Net ID 1.67.5, host ID 191",
            "Net ID 191.1, host ID 67.5",
            "Net ID 191.1.67, host ID 5",
            "Net ID 191, host ID 1.67.5",
            "Net ID 67.5, host ID 191.1"
        ],
        answer: "Net ID 191.1, host ID 67.5",
        subQuestions: [
            {
                question: "Berapakah Broadcast address IP tersebut?",
                options: [
                    "191.0.0.0",
                    "191.1.0.0",
                    "191.255.255.255",
                    "191.1.255.255",
                    "255.255.0.0"
                ],
                answer: "191.1.255.255"
            },
            {
                question: "Berapakah Network address dari IP tersebut?",
                options: [
                    "191.0.0.0",
                    "191.1.0.0",
                    "191.255.255.255",
                    "191.1.255.255",
                    "255.255.0.0"
                ],
                answer: "191.1.0.0"
            }
        ]
    },
    {
        question: "Yang termasuk sitem operasi adalah...",
        options: ['Linux', 'Windows', 'DOS', 'Mac OS', 'Semua jawaban benar'],
        answer: "Semua jawaban benar"
    },
    {
        question: "Perangkat perantara antara komputer dengan saluran telepon agar dapat berhubungan dengan ISP, adalah..",
        options: ['Hub', 'Switch', 'NIC', 'Modem', 'Router'],
        answer: "Modem"
    },
	{
        question: "Yang tidak termasuk standar keamanan jaringan nirkabel adalah...",
        options: ['WEP', 'WPA', '802.1x', 'SIP', 'MAC Addess Filter'],
        answer: "SIP"
    },
    {
        question: "Berapa nilai desimal dari binner ini 1011101 :",
        options: ['75', '93', '85', '95', '96'],
        answer: "93"
    },
    {
        question: "Kondisi komputer yang jaringannya tidak bekerja secara optimal disebut :",
        options: ['Down', 'Short', 'Longgar', 'Open', 'Resistor'],
        answer: "Down"
    },
    {
        question: "Berfungsi untuk membedakan network ID dengan host ID :",
        options: ['Host ID', 'Network ID', 'Subnet Mask', 'Broadcast Address', 'Network Address'],
        answer: "Subnet Mask"
    },
    {
        question: "Apabila suatu paket data bertabrakan dalam pengiriman data dinamakan :",
        options: ['drop', 'col ision', 'hop', 'tree way handshake', 'short'],
        answer: "col ision"
    },
    {
        question: "Lapisan ini mengatur hubungan antara pengirim dan penerima sedemikian rupa sehingga keduanya saling mengenal dan berhubungan :",
        options: ['Aplikasi', 'Session', 'Transport', 'Network', 'Datalink'],
        answer: "Session"
    },
    {
        question: "Panjang maksimal kabel standar fast Ethernet 100BaseTx adalah",
        options: ['10 m', '50 m', '100 m', '500 m', '1000 m'],
        answer: "100 m"
    },
    {
        question: "Peralatan apa yang digunakan untuk menghubungkan ke jaringan internet adalah :",
        options: ['Modem', 'LAN Card', 'Switch', 'Router', 'Hub'],
        answer: "Modem"
    },
    {
        question: "Topologi apakah yang pada umumnya digunakan oleh kabel coaxial ?",
        options: ['Linier / Bus', 'Star', 'Ring', 'Mesh', 'Hirarki'],
        answer: "Linier / Bus"
    },
	{
        question: "Manakah yang tidak termasuk dalam layer dalam Model TCP/IP...",
        options: ['Presentation', 'Transport', 'Internet', 'Network Access', 'Aplication'],
        answer: "Internet"
    },
    {
        question: "Jika kita mempunyai IP class C, dengan subnet mask 255.255.255.192, berapa jumlah subnetingnya?",
        options: ['192', '255', '2', '62', '510'],
        answer: "62"
    },
    {
        question: "Jika   kita   mempunyai   IP   class   C,   dengan   subnet   mask   255.255.255.224,   berapa   jumlah   hostper subnetingnya?",
        options: ['224', '62', '30', '6', '2'],
        answer: "30"
    },
    {
        question: "Jika   kita   mempunyai   IP   class   B,   dengan   subnet   mask   255.255.254.0,   berapa   jumlah   host   per",
        options: ['1022', '510', '254', '126', '62'],
        answer: "510"
    },
    {
        question: "Indikator yang digunakan untuk mengetahui telah terjadi kerusakan pada jaringan, kecuali:",
        options: ['Kabel dan konektor', 'Listrik', 'Hub/switch', 'Komputer server', 'Komputer client'],
        answer: "Komputer client"
    },
    {
        question: "Perintah untuk mendapatkan no.IP secara otomatis dari DHCP server adalah:",
        options: ['ipconfig', 'ipconfig /all', 'ipconfig /renew', 'ipconfig /release', 'ipconfig /flushdns'],
        answer: "ipconfig /release"
    },
    {
        question: "Perangkat yang perlu ditambahkan jika tegangan listrik sering naik turun adalah",
        options: ['Generator', 'UPS', 'Accu', 'Battey', 'AVR\xa0(AUTOMATIC VOLTAGE REGULATOR)'],
        answer: "AVR (AUTOMATIC VOLTAGE REGULATOR)"
    },
    {
        question: "Suara yang dikeluarkan pada saat proses pembacaan/pendeteksian  peralatan dalam",
        options: ['Clock', 'Nada', 'Error', 'Sound', 'Beep'],
        answer: "Beep"
    },
    {
        question: "Antar muka yang bertugas menerjemahkan satuan informasi terkecil  di layer fisik adalah …",
        options: ['RJ 45', 'Kabel UTP', 'Firewire', 'NIC', 'Usb'],
        answer: "NIC"
    },
    {
        question: "Terjadinya tabrakan pengiriman data pada suatu jaringan komputer dikenal dengan",
        options: ['Collision', 'Fusion', 'Broken', 'Attacking', 'Explode'],
        answer: "Collision"
    },
    {
        question: "Untuk menguatkan sinyal pada kabel jaringan lokal diperlukan alat…",
        options: ['Bridge', 'Repeater', 'Gateway', 'Amplifier', 'Router'],
        answer: "Repeater"
    },
    {
        question: "Untuk memeriksa hasil pemasangan konektor RJ 45 pada kabel UTP kita gunakan…",
        options: ['Tang krimping', 'Multitester', 'LAN Tester', 'POE', 'Konektor'],
        answer: "LAN Tester"
    },
    {
        question: "Perintah untuk menunjukkan rute yang dilewati paket untuk mencapai suatu tujuan",
        options: ['ping', 'netstat', 'tracert', 'looklan', 'host'],
        answer: "tracert"
    },
    {
        question: "host Dibawah ini adalah yang sistem operasi jaringan berbasis GUI…",
        options: ['Ms. Windows 98', 'Ms. Windows XP', 'Ms. Windows Vista', 'Ms. Windows 2003', 'Ms. Windows Milenium'],
        answer: "Ms. Windows 2003"
    },
    {
        question: "Utilitas Ping digunakan untuk mengetahui konektifitas yang terjadi  dengan…",
        options: ['Kartu jaringan', 'Host name', 'Workgroup', 'IP Addreess', 'Phisycal Adapter'],
        answer: "IP Addreess"
    },
    {
        question: "Merupakan inti dari OS Linux yang mengatur penggunaan memori,input-output dan proses-proses disebut",
        options: ['Source code', 'LILO', 'Root', 'Kernel', 'Script'],
        answer: "Kernel"
    },
    {
        question: "Dibawah ini yang merupakan perangkat WAN adalah,kecuali…",
        options: ['Hub', 'Modem', 'Repeater', 'Router', 'Bridge'],
        answer: "Hub"
    },
    {
        question: "Model Referensi OSI terdiri dar 7 lapisan (layer),lapisan ke 4 dari referensi OSI adalah….",
        options: ['Aplication', 'Network', 'Transport', 'Session', 'Presentation'],
        answer: "Transport"
    },
    {
        question: "Pemasangan dua buah antena WiFi harus memenuhi syarat tidak terhalang apapun yang",
        options: ['Point to multipoint', 'Point to point', 'LOS', 'Direct', 'dB'],
        answer: "LOS"
    },
    {
        question: "Kecepatan data maksimal pada komunikasi wireless dengan spesifikasi 802.11b adalah …",
        options: ['5 Mb/s', '11 Mb/s', '15 Mb/s', '54 Mb/s', '100 Mb/s'],
        answer: "11 Mb/s"
    },
    {
        question: "Tipe jaringan computer yang memiliki bandwith yang tinggi dan latency yang rendah",
        options: ['LAN', 'WAN', 'Hybrid', 'MAN', 'Ring'],
        answer: "LAN"
    }
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
            const selectedSubOption = document.querySelector(`input[name="sub-answer-${subIndex}"]:checked`);
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
        quizContainer.innerHTML = "<h2>Selamat! Kamu telah menyelesaikan kuis!</h2>";
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
    { title: "Blue yungkai bejir", file: "/lagu/lagu3.mp3" }
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
    songTitle.textContent = songList.find(song => song.file === currentSong).title;
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
