const questions = [
  {
    question: "BAB 1 - Urutan jaringan komputer berdasarkan jangkauan geografis dari yang paling luas ke paling sempit adalah...",
    options: ["WAN, LAN, PAN, MAN", "LAN, MAN, WAN, PAN", "WAN, MAN, LAN, PAN", "MAN, PAN, LAN, WAN", "LAN, WAN, MAN, PAN"],
    answer: "WAN, MAN, LAN, PAN",
  },
  {
    question: "Jaringan komputer yang digunakan untuk komunikasi antara komputer perangkat (termasuk telepon dan asisten pribadi digital) dengan jarak hanya beberapa meter saja disebut...",
    options: ["PAN", "MAN", "LAN", "wireless", "wired"],
    answer: "PAN",
  },
  {
    question: "Perangkat yang terhubung melalui media transmisi sehingga dapat saling berbagi data merupakan pengertian...",
    options: ["router", "topologi", "protokol", "WiFi", "jaringan komputer"],
    answer: "jaringan komputer",
  },
  {
    question: "Berikut yang bukan merupakan kelebihan topologi ring adalah...",
    options: ["hemat kabel", "dapat melayani lalu lintas yang padat", "tidak membutuhkan hub", "pengiriman tidak menunggu giliran token", "penataan kabel lebih sederhana"],
    answer: "pengiriman tidak menunggu giliran token",
  },
  {
    question: "Tabrakan data frame pada sekumpulan perangkat jaringan disebut...",
    options: ["bottleneck", "congestion", "flooding", "collision domain", "loss"],
    answer: "collision domain",
  },
  {
    question: "Perangkat jaringan yang berfungsi untuk memperkuat sinyal dan tidak memiliki kecerdasan untuk menentukan tujuan akhir informasi yang dikirim adalah...",
    options: ["router", "repeater", "switch", "bridge", "hub"],
    answer: "repeater",
  },
  {
    question: "Perangkat komunikasi dua arah yang mengubah sinyal digital menjadi sinyal analog atau sebaliknya disebut...",
    options: ["modulator demodulator", "communication server", "multiplexer", "media transmisi", "Network Interface Card"],
    answer: "modulator demodulator",
  },
  {
    question: "Berikut merupakan karakteristik jaringan WAN, kecuali...",
    options: ["menggunakan koneksi serial", "menggunakan jalur layanan umum", "melakukan pertukaran paket data dan frame di antara router dan switch", "beroperasi pada physical layer dan transport layer", "terhubung ke perangkat yang tersebar ke area yang luas"],
    answer: "melakukan pertukaran paket data dan frame di antara router dan switch",
  },
  {
    question: "Salah satu jenis koneksi jaringan WAN yang tidak melalui proses call setup sehingga pengguna dapat selalu terkoneksi secara real time disebut...",
    options: ["circuit switched", "leased line", "packet switched", "synchronous serial", "asynchronous serial"],
    answer: "leased line",
  },
  {
    question: "Berikut perangkat yang dapat memecah broadcast domain adalah...",
    options: ["router", "switch", "bridge", "hub", "repeater"],
    answer: "router",
  },
  {
    question: "Manfaat melakukan enkapsulasi pada jaringan adalah...",
    options: ["paket data tidak tersampaikan", "data menjadi memiliki identitas", "menghambat pengiriman data", "mempercepat proses pengiriman paket data", "mengurangi terjadinya error"],
    answer: "data menjadi memiliki identitas",
  },
  {
    question: "Jenis trojan yang menyandera komputer, mengubah data, dan menimbulkan kerusakan pada perangkat adalah...",
    options: ["downloader trojan", "spy trojan", "ransom trojan", "rootkit trojan", "remote trojan"],
    answer: "ransom trojan",
  },
  {
    question: "Jaringan berbasis luas berfokus kepada OSI layer, yaitu...",
    options: ["session dan transport", "network dan transport", "physical dan data link", "application dan presentation", "data link dan network"],
    answer: "physical dan data link",
  },
  {
    question: "Berikut ini merupakan contoh media transmisi kabel, kecuali...",
    options: ["UTP", "serat optik", "coaxial", "twisted pair", "bluetooth"],
    answer: "bluetooth",
  },
  {
    question: "Kabel UTP memiliki transfer rate sebesar... Mbps.",
    options: ["10 sampai 50", "10 sampai 100", "50 sampai 100", "100 sampai 500", "100 sampai 1.000"],
    answer: "10 sampai 100",
  },
    //BAB 2 MATERI
  {
    question: "BAB 2 - Jaringan komputer yang memungkinkan pengguna untuk membangun koneksi nirkabel melalui jaringan publik maupun privat dengan cakupan wilayah yang sangat luas, seperti dalam kota atau negara disebut...",
    options: ["WPAN", "WLAN", "WMAN", "WWAN", "client-server"],
    answer: "WWAN",
  },
  {
    question: "Salah satu kelebihan jaringan nirkabel apabila dibandingkan dengan jaringan kabel adalah...",
    options: ["sinyal dapat terhalang tembok", "biaya instalasi lebih mahal", "rendah gangguan sinyal", "kecepatan lebih tinggi", "lebih portabel"],
    answer: "lebih portabel",
  },
  {
    question: "Suatu jaringan yang terdiri dari dua atau lebih peranti wireless yang berkomunikasi secara langsung satu sama lain tanpa menggunakan Access Point (AP) disebut jaringan...",
    options: ["stand alone", "WWAN", "infrastruktur", "client-server", "ad-hoc"],
    answer: "ad-hoc",
  },
  {
    question: "Perangkat yang berfungsi untuk mentransmisikan gabungan beberapa sinyal melalui sebuah sirkuit adalah...",
    options: ["switch", "multiplekser", "modem", "media transmisi", "routing switch"],
    answer: "multiplekser",
  },
  {
    question: "Frekuensi gelombang yang berkisar antara 30 GHz sampai 300 GHz adalah...",
    options: ["EHF", "UHF", "VHF", "SHF", "XHF"],
    answer: "EHF",
  },
  {
    question: "Jenis antena yang digunakan untuk komunikasi radio adalah...",
    options: ["antena 8 quad", "antena parabolic", "antena grid", "antena PVC", "antena sectoral"],
    answer: "antena parabolic",
  },
  {
    question: "Suatu metode pengamanan jaringan nirkabel yang berupa Wireless Protected Access/WPA dan mengimplementasikan layer dari IEEE, yaitu...",
    options: ["802.1X", "802.11i", "802.11a", "802.11b/g", "802.11"],
    answer: "802.11i",
  },
  {
    question: "Topologi pada jaringan WAN yang menggabungkan banyak node yang terhubung secara langsung dan dapat menyediakan beberapa jalur data bisa dari satu titik ke titik lainnya adalah...",
    options: ["mesh", "star", "hybrid", "ring"],
    answer: "mesh",
  },
  {
    question: "Topologi jaringan nirkabel yang memungkinkan adanya lebih dari satu access point adalah...",
    options: ["ESS", "BSS", "bus", "tree", "peer to peer"],
    answer: "ESS",
  },
  {
    question: "Teknologi yang memungkinkan dua perangkat saling terhubung tanpa menggunakan kabel serta dapat menembus tembok adalah...",
    options: ["gelombang radio", "gelombang mikro", "gelombang makro", "bluetooth", "inframerah"],
    answer: "bluetooth",
  },
  {
    question: "Keuntungan menggunakan router dalam segmentasi jaringan adalah...",
    options: ["memberi jalur yang sama antarperanti", "sulit melakukan filter protokol", "tidak dapat terhubung ke internet", "memiliki kemampuan yang sama dengan bridge", "bisa memfilter alamat jaringan mana saja yang boleh melintas"],
    answer: "bisa memfilter alamat jaringan mana saja yang boleh melintas",
  },
  {
    question: "Berikut yang merupakan karakteristik metode T-carriers adalah...",
    options: ["batas efektif line sebatas 56 Kbps", "sinyal analog digunakan melalui local loop", "menggunakan dua pasang kabel tembaga berpilin", "memerlukan modem untuk mengonversi sinyal digital ke dalam sinyal analog", "menggunakan satu pasangan kabel berpilin"],
    answer: "menggunakan dua pasang kabel tembaga berpilin",
  },
  {
    question: "Data menjadi memiliki identitas yang dianalogikan seperti sebuah surat yang akan dikirimkan di mana surat tersebut harus dimasukkan ke dalam amplop, kemudian diberi alamat tujuan dan prangko merupakan konsep dari...",
    options: ["High-Level Data Link Control", "enkapsulasi", "Asynchronous Transfer Mode", "frame relay", "konfigurasi"],
    answer: "enkapsulasi",
  },
      //BAB 3 MATERI
  {
    question: "BAB 3 - Kelebihan jaringan nirkabel adalah...",
    options: ["rumitnya instalasi karena banyaknya kabel", "tidak ada gangguan dari perangkat lain saat mengirim data", "jangkauan area lebih sempit", "pita frekuensi tidak dapat diperlebar", "bisa digunakan di mana saja selama masih dalam area jangkauan"],
    answer: "bisa digunakan di mana saja selama masih dalam area jangkauan",
  },
  {
    question: "Yang bukan merupakan manfaat segmentasi dalam desain jaringan adalah...",
    options: ["menghubungkan jaringan yang berbeda", "mengurangi kemacetan jaringan", "memudahkan proses troubleshooting", "mengatasi batasan arsitektur", "menghubungkan banyak jaringan"],
    answer: "menghubungkan banyak jaringan",
  },
  {
    question: "Kelebihan jaringan nirkabel adalah......",
    options: ["rumitnya instalasi karena banyaknya kabel", "tidak ada gangguan dari perangkat lain saat mengirim data", "jangkauan area lebih sempit", "pita frekuensi tidak dapat diperlebar", "bisa digunakan di mana saja selama masih dalam area jangkauan"],
    answer: "bisa digunakan di mana saja selama masih dalam area jangkauan",
  },
  {
    question: "Suatu media transmisi nirkabel yang memiliki frekuensi lebih rendah daripada yang diterima oleh mata manusia adalah...",
    options: ["Inframerah", "bluetooth", "gelombang radio", "gelombang makro", "gelombang mikro"],
    answer: "Inframerah",
  },
  {
    question: "Bluetooth dan cahaya inframerah merupakan contoh dari teknologi jaringan, yaitu....",
    options: ["Personal Area Network", "Wireless Local Area Network", "Wireless Personal Area Network", "Wireless Metropolitan Area Network", "Wireless Wide Area Network"],
    answer: "Wireless Personal Area Network",
  },
  {
    question: "Berikut merupakan aspek keamanan jaringan yang perlu diperhatikan, kecuali...",
    options: ["confidentiality", "regulacy", "availability", "integrity", "authentication"],
    answer: "regulacy",
  },
  {
    question: "Untuk mengetahui telah terjadi kerusakan pada jaringan bisa dilihat berdasarkan indikator pada perangkat-perangkat berikut, kecuali...",
    options: ["kabel dan konektor", "hub/switch", "listrik", "komputer server", "komputer client"],
    answer: "listrik",
  },
  {
    question: "Berikut merupakan media koneksi jaringan nirkabel, kecuali....",
    options: ["bluetooth", "WiFi", "VSAT", "STP", "infrared"],
    answer: "STP",
  },
  {
    question: "Hal-hal yang perlu dilaporkan dalam catatan perawatan dan perbaikan komputer sebagai berikut, kecuali....",
    options: ["gejala kerusakan", "tindakan korektif yang dilakukan untuk melakukan perbaikan terhadap periferal", "tanggal dan waktu kapan dilakukan perawatan", "lokasi tempat membeli periferal", "nama periferal dan spesifikasi"],
    answer: "lokasi tempat membeli periferal",
  },
  {
    question: "Standar teknologi wireless yang pertama adalah....",
    options: ["802.11x", "802.11", "802.11a", "802.11ax", "802.11b"],
    answer: "802.11",
  },
  {
    question: "Banyaknya getaran gelombang yang terjadi dalam waktu satu detik adalah....",
    options: ["frekuensi", "amplitudo", "panjang getaran", "gelombang", "panjang gelombang"],
    answer: "frekuensi",
  },
  {
    question: "Jika suatu client pada jaringan wireless tidak bisa melakukan koneksi ke jaringan wireless, hal itu disebabkan oleh beberapa faktor berikut, kecuali....",
    options: ["metode autentikasi yang tidak sesuai", "adanya duplikasi jaringan wireless", "teknologi 802.11 yang tidak sesuai", "kunci WEP yang tidak sesuai", "wireless AP dikonfigurasi dengan filter MAC"],
    answer: "adanya duplikasi jaringan wireless",
  },
  {
    question: "Jumlah bit autentikasi access point yang didukung dalam sistem distribusi wireless adalah... bit.",
    options: ["8", "16", "32", "64", "128"],
    answer: "128",
  },
  {
    question: "Kegiatan atau aktivitas untuk mendapatkan informasi tentang suatu jaringan WiFi dan mendapatkan akses terhadap jaringan wireless tersebut disebut......",
    options: ["hacking", "cracking", "adapting", "removing", "wardriving"],
    answer: "wardriving",
  },
  {
    question: "Default username dan password pada konfigurasi antena omni adalah....",
    options: ["ubnt", "admin", "ubt", "ubuntu", "administrator"],
    answer: "admin",
  },
  {
    question: "WEP (Wired Equivalent Privacy) menggunakan algoritma untuk enkripsi, yaitu....",
    options: ["Blowfish", "hash", "RC4", "RSA", "DSA"],
    answer: "RC4",
  },
  {
    question: "Topologi jaringan nirkabel yang memungkinkan adanya lebih dari satu access point adalah...",
    options: ["ESS", "BSS", "bus", "tree", "peer to peer"],
    answer: "ESS",
  },

  //BAB 4 MATERI
  {
    question: "BAB 4 - Suatu konsep komunikasi masa depan yang dikembangkan dari pendekatan PSTN VoIP, dan jaringan data disebut...",
    options: ["PBX", "VoIP", "softswitch", "switching", "trunk gateway"],
    answer: "softswitch",
  },
  {
    question: "Teknologi yang memungkinkan percakapan suara jarak jauh melalui media internet adalah....",
    options: ["softswitch", "VoIP", "email", "video call", "NGN"],
    answer: "VoIP",
  },
  {
    question: "Layanan VoIP di mana pengguna menggunakan komputer sebagai alat komunikasi adalah komunikasi kelas.....",
    options: ["1", "2-1", "2-2", "3", "3-1"],
    answer: "3",
  },
  {
    question: "Berikut merupakan fungsi PBX, kecuali...",
    options: ["menghubungkan pengguna komputer dengan telepon rumah", "mematikan koneksi atau hubungan jaringan telepon sesuai dengan perintah pengguna", "membuat koneksi (sirkuit) atau menghubungkan antara telepon pengguna dengan telepon yang dituju", "dapat memberikan satu nomor tunggal yang dapat digunakan penelepon eksternal untuk mengakses semua orang di perusahaan", "dapat menunda penelepon eksternal sambil menunggu orang yang diminta menjawab kemudian memutar musik"],
    answer: "menghubungkan pengguna komputer dengan telepon rumah",
  },
  {
    question: "Bagian VoIP yang memiliki fungsi untuk mengubah kode suara dari analog ke dalam kode digital adalah...",
    options: ["protokol", "proxy", "decoder", "codec", "user agent"],
    answer: "codec",
  },
  {
    question: "Suatu protokol signalling yang berfungsi untuk membangun, memodifikasi, dan mengakhiri suatu sesi multimedia yang melibatkan satu atau beberapa pengguna disebut...",
    options: ["RTP", "UDP", "TCP", "IP", "SIP"],
    answer: "SIP",
  },
  {
    question: "Jenis PBX yang merupakan gabungan dari sistem digital dan analog yang memiliki 4 kabel di setiap output-nya disebut...",
    options: ["PBX digital", "PBX analog", "PBX hybrid", "IP PBX", "VoIP"],
    answer: "PBX hybrid",
  },
  {
    question: "Komponen VoIP yang memiliki kegunaan untuk mendefinisikan jalur dan aturan antarterminal adalah...",
    options: ["codec", "softphone", "VoIP switch", "VoIP gateway", "VoIP server"],
    answer: "VoIP switch",
  },
  {
    question: "Berikut yang bukan merupakan keuntungan menggunakan IP PBX adalah...",
    options: ["tidak ada noise karena menggunakan kabel telepon", "penghematan biaya yang signifikan menggunakan penyedia VoIP", "terhindar dari ketergantungan vendor", "lebih mudah dikelola karena konfigurasi IP PBX menggunakan antarmuka GUI", "tidak membutuhkan kabel telepon"],
    answer: "tidak ada noise karena menggunakan kabel telepon",
  },
  {
    question: "Fungsi backup data secara berkala pada sistem VoIP adalah...",
    options: ["mencegah kehilangan data ketika terjadi masalah sistem", "mencegah kerusakan hardware", "memberikan peringatan bahwa terdapat malware", "menstabilkan bandwidth yang digunakan", "mencegah adanya virus yang menyerang software"],
    answer: "mencegah kehilangan data ketika terjadi masalah sistem",
  },
  {
    question: "Sebuah konsep telepon yang mengacu pada metodologi yang mendistribusikan panggilan telepon dari satu nomor telepon ke sebuah grup yang memiliki beberapa saluran telepon disebut...",
    options: ["call forwarding", "call forking", "hunting group", "CLIP", "call transfer"],
    answer: "hunting group",
  },
  {
    question: "Kepanjangan PSTN berikut yang tepat adalah...",
    options: ["Private Server Telecommunication Networking", "Private Server Telephone Network", "Private Switched Telephone Network", "Public Switching Telephone Network", "Public Switched Telephone Network"],
    answer: "Public Switched Telephone Network",
  },
  {
    question: "Berikut yang merupakan langkah tepat untuk mengatasi kualitas audio yang buruk adalah...",
    options: ["mengecilkan suara mikrofon", "memeriksa kondisi kelayakan hardware", "melakukan konfigurasi QoS pada router", "mengubah codec sistem", "menjauhkan perangkat dari peralatan elektronik lain"],
    answer: "memeriksa kondisi kelayakan hardware",
  },
  {
    question: "Protokol yang digunakan pada VoIP untuk mengirim audio streaming yang berlangsung terus-menerus dan lebih mementingkan kecepatan pengiriman data agar tiba di tujuan tanpa memperhatikan adanya paket yang hilang walaupun mencapai 50% dari jumlah paket yang dikirimkan adalah...",
    options: ["TCP", "IP", "UDP", "H.323", "SIP"],
    answer: "UDP",
  },
  {
    question: "Salah satu fungsi dari VoIP yang berfungsi untuk menangkap jaringan yang dituju, sehingga dapat melakukan inisialisasi pesan dan percakapan disebut...",
    options: ["codec", "decoder", "signalling", "call connect", "database service"],
    answer: "signalling",
  },
//BAB 5
{
  question: "BAB 5 - Sebuah media yang digunakan sebagai penghubung antara pengirim dan penerima sehingga dapat berkomunikasi disebut...",
  options: ["komunikasi data", "media nirkabel", "transfer data", "data informasi", "media transmisi"],
  answer: "media transmisi",
},
{
  question: "Berikut merupakan bagian-bagian kabel fiber optik, kecuali...",
  options: ["core", "cahaya", "cladding", "cable jacket", "coating"],
  answer: "cahaya",
},
{
  question: "Jenis kabel fiber optik yang menghubungkan dua pulau atau lebih dengan laut sebagai pemisahnya adalah...",
  options: ["indoor cable", "submarine cable", "duct cable", "aerial cable", "direct buried cable"],
  answer: "submarine cable",
},
{
  image: "https://www.upload.ee/files/17846034/WhatsApp_Image_2025-03-12_at_20.54.47_b1c17fb4.jpg.html", // Path gambar
  question: "Kegunaan bagian yang ditunjukkan oleh nomor 3 adalah .... (Gambarnya gak jelas, antara coating atau cladding)",
  options: ["tempat berlangsungnya perambatan cahaya", "melindungi kabel dari bahaya lingkungan", "melindungi inti dari ketegangan yang berlebihan", "melindungi dari kerusakan ketika proses instalasi", "pelindung inti sekaligus menjadi cermin yang terpancar keluar kembali ke dalam inti"],
  answer: "pelindung inti sekaligus menjadi cermin yang terpancar keluar kembali ke dalam inti",
},
{
  question: "Pada penerapannya, fiber optik dapat dilakukan penyambungan atau disebut...",
  options: ["jointer", "connect", "splicing", "put through", "continuation"],
  answer: "splicing",
},
{
  question: "Memiliki jarak pengiriman data yang jauh, laju data yang tinggi, dan sensitivitas yang substansial merupakan karakteristik kabel fiber optik jenis......",
  options: ["Cat6", "Cat5e", "double mode", "multimode", "single mode"],
  answer: "single mode",
},
{
  question: "Kabel fiber optik yang terpasang konektor pada kedua ujung kabel disebut.....",
  options: ["Optical Termination Box", "pig tail", "fusion splicer", "patch cord", "stripper"],
  answer: "patch cord",
},
{
  question: "Kabel fiber optik mempunyai kekurangan sebagai berikut, kecuali...",
  options: ["dikhawatirkan bisa menyerap hidrogen sehingga bisa menyebabkan loss data", "jika rusak, perbaikannya memerlukan tenaga ahli di bidang ini", "memerlukan sumber cahaya yang kuat untuk melakukan pensinyalan", "bersifat tahan lama dan tidak mudah rusak", "harganya relatif mahal"],
  answer: "bersifat tahan lama dan tidak mudah rusak",
},
{
  question: "Teknologi yang digunakan untuk mengatur lalu lintas layanan pada jaringan FTTH disebut...",
  options: ["Optical Line Terminal", "PON", "G-PON", "Digital Cross Connect System", "Optical Network Unit"],
  answer: "G-PON",
},
{
  question: "Arsitektur jaringan FTTH Optical Distribution Cabinet memiliki fungsi, yaitu...",
  options: ["penghubung antara ODP dengan instalasi rumah", "tempat terminasi fisik jaringan luar fiber optik", "tempat melakukan pengukuran dan monitoring jaringan fiber optik", "tempat splitter untuk mendistribusikan fiber optik ke ODC untuk melayani beberapa area", "tempat koneksi dari kabel feeder ke kabel distribution"],
  answer: "tempat koneksi dari kabel feeder ke kabel distribution",
},
{
  image: "https://www.upload.ee/files/17846020/WhatsApp_Image_2025-03-12_at_20.55.03_72f25965.jpg.html", // Path gambar
  question: "Nama alat pada gambar di atas adalah... (gambar splicer - pasti gak keliatan gambarnya)",
  options: ["fusion splicer", "pigtail", "stripper", "cleaver", "Optical Power Meter"],
  answer: "fusion splicer",
},
{
  question: "Transmisi data pada kabel fiber optik dapat terjadi melalui... sebagai media perantaranya.",
  options: ["gelombang elektromagnetik", "benda konduktor", "benda isolator", "serat dari karet", "gelombang cahaya"],
  answer: "gelombang cahaya",
},
{
  question: "Menerima lalu lintas dalam format optik dan mengonvensinya ke bentuk yang diinginkan oleh pelanggan (Ethernet, IP multicast, POTS, T1, dan lainnya) merupakan fungsi...",
  options: ["ODN", "ONU", "OLT", "DCS", "G-PON"],
  answer: "ONU",
},
{
  question: "Kabel fiber optik memiliki berbagai macam berdasarkan desain dan cara instalasinya. Kabel fiber optik yang instalasinya melalui udara dengan tiang sebagai penyangganya disebut.....",
  options: ["duct cable", "direct burned cable", "indoor cable", "aerial cable", "submarine cable"],
  answer: "aerial cable",
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
