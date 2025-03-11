const questions = [
  {
    question: "Apa arti dari 思います (おもいます) - Omoimasu?",
    options: ["Berbicara", "Mendengar", "Mengira, berpikir", "Menulis"],
    answer: "Mengira, berpikir",
  },
  {
    question: "Apa arti dari 言います (いいます) - Iimasu?",
    options: ["Mendengar", "Berbicara", "Menulis", "Membaca"],
    answer: "Berbicara",
  },
  {
    question: "Apa arti dari 勝ちます (かちます) - Kachimasu?",
    options: ["Kalah", "Menang", "Seri", "Bertanding"],
    answer: "Menang",
  },
  {
    question: "Apa arti dari 負けます (まけます) - Makemasu?",
    options: ["Menang", "Kalah", "Seri", "Bertanding"],
    answer: "Kalah",
  },
  {
    question: "Apa arti dari あります (あります) - Arimasu?",
    options: ["Tidak ada", "Ada", "Mungkin", "Tidak tahu"],
    answer: "Ada",
  },
  {
    question: "Apa arti dari 役に立ちます (やくにたちます) - Yakunitachimasu?",
    options: ["Membantu", "Berguna, bermanfaat", "Mengganggu", "Merusak"],
    answer: "Berguna, bermanfaat",
  },
  {
    question: "Apa arti dari 動きます (うごきます) - Ugokimasu?",
    options: ["Berhenti", "Bekerja", "Pindah, bergerak", "Istirahat"],
    answer: "Pindah, bergerak",
  },
  {
    question: "Apa arti dari やめます (やめます) - Yamemasu?",
    options: ["Memulai", "Berhenti", "Melanjutkan", "Mengubah"],
    answer: "Berhenti",
  },
  {
    question: "Apa arti dari 気をつけます (きをつけます) - Ki wo tsukemasu?",
    options: [
      "Berhati-hati, berwaspada",
      "Bersemangat",
      "Beristirahat",
      "Bersantai",
    ],
    answer: "Berhati-hati, berwaspada",
  },
  {
    question: "Apa arti dari 留学します (りゅうがくします) - Ryuugakushimasu?",
    options: [
      "Bekerja di luar negeri",
      "Berlibur di luar negeri",
      "Studi di luar negeri",
      "Berdagang di luar negeri",
    ],
    answer: "Studi di luar negeri",
  },
  {
    question: "Apa arti dari 無駄 [な] (むだ [な]) - Muda [na]?",
    options: ["Berguna", "Praktis", "Sia-sia, tidak berguna", "Penting"],
    answer: "Sia-sia, tidak berguna",
  },
  {
    question: "Apa arti dari 不便 [な] (ふべん [な]) - Fuben [na]?",
    options: ["Nyaman", "Praktis", "Tidak praktis", "Mudah"],
    answer: "Tidak praktis",
  },
  {
    question: "Apa arti dari すごい - Sugoi?",
    options: ["Sedih", "Marah", "Kejutan atau kekaguman", "Takut"],
    answer: "Kejutan atau kekaguman",
  },
  {
    question: "Apa arti dari 本当 (ほんとう) - Hontou?",
    options: ["Bohong", "Salah", "Betul, benar", "Tidak tahu"],
    answer: "Betul, benar",
  },
  {
    question: "Apa arti dari うそ - Uso?",
    options: ["Kebenaran", "Kebohongan", "Janji", "Mimpi"],
    answer: "Kebohongan",
  },
  {
    question: "Apa arti dari 自動車 (じどうしゃ) - Jidousha?",
    options: ["Sepeda motor", "Mobil", "Kereta api", "Pesawat"],
    answer: "Mobil",
  },
  {
    question: "Apa arti dari 交通 (こうつう) - Koutsuu?",
    options: ["Kendaraan", "Jalan", "Lalu lintas", "Stasiun"],
    answer: "Lalu lintas",
  },
  {
    question: "Apa arti dari 物価 (ぶっか) - Bukka?",
    options: ["Kendaraan", "Makanan", "Harga barang", "Pakaian"],
    answer: "Harga barang",
  },
  {
    question: "Apa arti dari 放送 (ほうそう) - Housou?",
    options: ["Berita", "Animasi", "Siaran, pengumuman", "Komik"],
    answer: "Siaran, pengumuman",
  },
  {
    question: "Apa arti dari ニュース (ニュース) - Nyuusu?",
    options: ["Komik", "Animasi", "Warta berita", "Desain"],
    answer: "Warta berita",
  },
  {
    question: "Apa arti dari アニメ (アニメ) - Anime?",
    options: ["Komik", "Animasi", "Film", "Drama"],
    answer: "Animasi",
  },
  {
    question: "Apa arti dari マンガ (マンガ) - Manga?",
    options: ["Buku", "Komik", "Majalah", "Novel"],
    answer: "Komik",
  },
  {
    question: "Apa arti dari デザイン (デザイン) - Dezain?",
    options: ["Gambar", "Model, desain", "Tulisan", "Warna"],
    answer: "Model, desain",
  },
  {
    question: "Apa arti dari 夢 (ゆめ) - Yume?",
    options: ["Harapan", "Mimpi", "Tujuan", "Cita-cita"],
    answer: "Mimpi",
  },
  {
    question: "Apa arti dari 天才 (てんさい) - Tensai?",
    options: ["Pintar", "Jenius", "Kreatif", "Berbakat"],
    answer: "Jenius",
  },
  {
    question: "Apa arti dari 試合 (しあい) - Shiai?",
    options: ["Latihan", "Pertandingan", "Perayaan", "Upacara"],
    answer: "Pertandingan",
  },
  {
    question: "Apa arti dari やめます (やめます) - Yamemasu?",
    options: ["Memulai", "Berhenti", "Melanjutkan", "Mengubah"],
    answer: "Berhenti",
  },
  {
    question: "Apa arti dari 気をつけます (きをつけます) - Ki wo tsukemasu?",
    options: [
      "Berhati-hati, berwaspada",
      "Bersemangat",
      "Beristirahat",
      "Bersantai",
    ],
    answer: "Berhati-hati, berwaspada",
  },
  {
    question: "Apa arti dari 留学します (りゅうがくします) - Ryuugakushimasu?",
    options: [
      "Bekerja di luar negeri",
      "Berlibur di luar negeri",
      "Studi di luar negeri",
      "Berdagang di luar negeri",
    ],
    answer: "Studi di luar negeri",
  },
  {
    question: "Apa arti dari 無駄 [な] (むだ [な]) - Muda [na]?",
    options: ["Berguna", "Praktis", "Sia-sia, tidak berguna", "Penting"],
    answer: "Sia-sia, tidak berguna",
  },
  {
    question: "Apa arti dari 不便 [な] (ふべん [な]) - Fuben [na]?",
    options: ["Nyaman", "Praktis", "Tidak praktis", "Mudah"],
    answer: "Tidak praktis",
  },
  {
    question: "Apa arti dari すごい - Sugoi?",
    options: ["Sedih", "Marah", "Kejutan atau kekaguman", "Takut"],
    answer: "Kejutan atau kekaguman",
  },
  {
    question: "Apa arti dari 本当 (ほんとう) - Hontou?",
    options: ["Bohong", "Salah", "Betul, benar", "Tidak tahu"],
    answer: "Betul, benar",
  },
  {
    question: "Apa arti dari うそ - Uso?",
    options: ["Kebenaran", "Kebohongan", "Janji", "Mimpi"],
    answer: "Kebohongan",
  },
  {
    question: "Apa arti dari 自動車 (じどうしゃ) - Jidousha?",
    options: ["Sepeda motor", "Mobil", "Kereta api", "Pesawat"],
    answer: "Mobil",
  },
  {
    question: "Apa arti dari 交通 (こうつう) - Koutsuu?",
    options: ["Kendaraan", "Jalan", "Lalu lintas", "Stasiun"],
    answer: "Lalu lintas",
  },
  {
    question: "Apa arti dari 物価 (ぶっか) - Bukka?",
    options: ["Kendaraan", "Makanan", "Harga barang", "Pakaian"],
    answer: "Harga barang",
  },
  {
    question: "Apa arti dari 放送 (ほうそう) - Housou?",
    options: ["Berita", "Animasi", "Siaran, pengumuman", "Komik"],
    answer: "Siaran, pengumuman",
  },
  {
    question: "Apa arti dari ニュース (ニュース) - Nyuusu?",
    options: ["Komik", "Animasi", "Warta berita", "Desain"],
    answer: "Warta berita",
  },
  {
    question: "Apa arti dari アニメ (アニメ) - Anime?",
    options: ["Komik", "Animasi", "Film", "Drama"],
    answer: "Animasi",
  },
  {
    question: "Apa arti dari マンガ (マンガ) - Manga?",
    options: ["Buku", "Komik", "Majalah", "Novel"],
    answer: "Komik",
  },
  {
    question: "Apa arti dari デザイン (デザイン) - Dezain?",
    options: ["Gambar", "Model, desain", "Tulisan", "Warna"],
    answer: "Model, desain",
  },
  {
    question: "Apa arti dari 夢 (ゆめ) - Yume?",
    options: ["Harapan", "Mimpi", "Tujuan", "Cita-cita"],
    answer: "Mimpi",
  },
  {
    question: "Apa arti dari 天才 (てんさい) - Tensai?",
    options: ["Pintar", "Jenius", "Kreatif", "Berbakat"],
    answer: "Jenius",
  },
  {
    question: "Apa arti dari 試合 (しあい) - Shiai?",
    options: ["Latihan", "Pertandingan", "Perayaan", "Upacara"],
    answer: "Pertandingan",
  },
  {
    question: "Apa arti dari 意見 (いけん) - Iken?",
    options: ["Cerita", "Pendapat", "Bulan", "Bumi"],
    answer: "Pendapat"
},
{
    question: "Apa arti dari 話 (はなし) - Hanashi?",
    options: ["Pendapat", "Cerita", "Bumi", "Bulan"],
    answer: "Cerita"
},
{
    question: "Apa arti dari 地球 (ちきゅう) - Chikyuu?",
    options: ["Bulan", "Bintang", "Matahari", "Bumi"],
    answer: "Bumi"
},
{
    question: "Apa arti dari 月 (つき) - Tsuki?",
    options: ["Bumi", "Planet", "Bulan", "Bintang"],
    answer: "Bulan"
},
{
    question: "Apa arti dari 最近 (さいきん) - Saikin?",
    options: ["Kemarin", "Besok", "Lusa", "Akhir-akhir ini"],
    answer: "Akhir-akhir ini"
},
{
    question: "Apa arti dari たぶん - Tabun?",
    options: ["Pasti", "Mungkin, barangkali", "Tidak mungkin", "Selalu"],
    answer: "Mungkin, barangkali"
},
{
    question: "Apa arti dari きっと - Kitto?",
    options: ["Mungkin", "Tidak mungkin", "Pasti", "Kadang-kadang"],
    answer: "Pasti"
},
{
    question: "Apa arti dari 本当に (ほんとうに) - Hontou ni?",
    options: ["Mungkin", "Betul-betul", "Tidak mungkin", "Kadang-kadang"],
    answer: "Betul-betul"
},
{
    question: "Apa arti dari そんなに - Sonna ni (diikuti negatif)?",
    options: ["Sangat", "Tidak begitu", "Sedikit", "Selalu"],
    answer: "Tidak begitu"
},
{
    question: "Apa arti dari 〜について - Nitsuite?",
    options: ["Karena", "Tentang, mengenai", "Dengan", "Tanpa"],
    answer: "Tentang, mengenai"
},
{
    question: "Apa arti dari 久しぶりですね。 (ひさしぶりですね。) - Hisashiburi desu ne.?",
    options: ["Selamat pagi", "Selamat siang", "Selamat malam", "Sudah lama tidak bertemu ya"],
    answer: "Sudah lama tidak bertemu ya"
},
{
    question: "Apa arti dari 〜でも飲みませんか。 (〜でものみませんか。) - ~ demo nomimasen ka.?",
    options: ["Mari makan", "Mari pergi", "Bagaimana kalau kita minum, atau apa saja?", "Mari belajar"],
    answer: "Bagaimana kalau kita minum, atau apa saja?"
},
{
    question: "Apa arti dari もちろん - Mochiron?",
    options: ["Mungkin", "Tidak mungkin", "Tentu saja", "Kadang-kadang"],
    answer: "Tentu saja"
},
{
    question: "Apa arti dari 着ます (きます) - Kimasu?",
    options: ["Memakai (sepatu)", "Memakai (topi)", "Memakai (kemeja)", "Memakai (kaca mata)"],
    answer: "Memakai (kemeja)",
  },
  {
    question: "Apa arti dari はきます - Hakimasu?",
    options: ["Memakai (kemeja)", "Memakai (sepatu, celana)", "Memakai (topi)", "Memakai (dasi)"],
    answer: "Memakai (sepatu, celana)",
  },
  {
    question: "Apa arti dari かぶります - Kaburimasu?",
    options: ["Memakai (kemeja)", "Memakai (sepatu)", "Memakai (topi)", "Memakai (kaca mata)"],
    answer: "Memakai (topi)",
  },
  {
    question: "Apa arti dari かけます [眼鏡を〜] (めがねを〜) - Kakemasu [Megane wo ~]?",
    options: ["Memakai (kemeja)", "Memakai (sepatu)", "Memakai (topi)", "Memakai (kaca mata)"],
    answer: "Memakai (kaca mata)",
  },
  {
    question: "Apa arti dari します [ネクタイを〜] (ネクタイを〜) - Shimasu [Nekutai wo ~]?",
    options: ["Memakai (kemeja)", "Memakai (sepatu)", "Memakai (topi)", "Memakai (dasi)"],
    answer: "Memakai (dasi)",
  },
  {
    question: "Apa arti dari 生まれます (うまれます) - Umaremasu?",
    options: ["Membeli", "Membuat", "Lahir", "Mendapatkan"],
    answer: "Lahir",
  },
  {
    question: "Apa arti dari わたしたち - Watashitachi?",
    options: ["Kamu", "Mereka", "Saya", "Kami, kita"],
    answer: "Kami, kita",
  },
  {
    question: "Apa arti dari コート - Kooto?",
    options: ["Jaket", "Mantel", "Sweater", "Jas"],
    answer: "Mantel",
  },
  {
    question: "Apa arti dari セーター - Seetaa?",
    options: ["Mantel", "Kemeja", "Sweater, baju hangat", "Celana"],
    answer: "Sweater, baju hangat",
  },
  {
    question: "Apa arti dari スーツ - Suutsu?",
    options: ["Pakaian olahraga", "Pakaian santai", "Pakaian setelan", "Pakaian tidur"],
    answer: "Pakaian setelan",
  },
  {
    question: "Apa arti dari 帽子 (ぼうし) - Boushi?",
    options: ["Topi", "Sepatu", "Kacamata", "Dasi"],
    answer: "Topi",
  },
  {
    question: "Apa arti dari 眼鏡 (めがね) - Megane?",
    options: ["Topi", "Sepatu", "Kacamata", "Dasi"],
    answer: "Kacamata",
  },
  {
    question: "Apa arti dari ケーキ - Keeki?",
    options: ["Roti", "Kue", "Nasi", "Ikan"],
    answer: "Kue",
  },
  {
    question: "Apa arti dari [お]弁当 ([お]べんとう) - [O]bentou?",
    options: ["Minuman", "Makanan ringan", "Bekal", "Makanan utama"],
    answer: "Bekal",
  },
  {
    question: "Apa arti dari ロボット - Robotto?",
    options: ["Manusia", "Hewan", "Tumbuhan", "Robot"],
    answer: "Robot",
  },
  {
    question: "Apa arti dari ユーモア - Yuu moa?",
    options: ["Kesedihan", "Kemarahan", "Humor", "Ketakutan"],
    answer: "Humor",
  },
  {
    question: "Apa arti dari 都合 (つごう) - Tsugou?",
    options: ["Waktu", "Tempat", "Kondisi", "Orang"],
    answer: "Kondisi",
  },
  {
    question: "Apa arti dari よく - Yoku?",
    options: ["Jarang", "Kadang-kadang", "Sering kali", "Tidak pernah"],
    answer: "Sering kali",
  },
  {
    question: "Apa arti dari おめでとう (ございます) - Omedetou (gozaimasu)?",
    options: ["Terima kasih", "Selamat", "Maaf", "Sampai jumpa"],
    answer: "Selamat"
},
{
    question: "Apa arti dari お探しですか。 (おさがしですか。) - Osagashi desu ka.?",
    options: ["Siapa nama Anda?", "Apa kabar?", "Mencari apa?", "Di mana Anda tinggal?"],
    answer: "Mencari apa?"
},
{
    question: "Apa arti dari では - Dewa?",
    options: ["Kemudian", "Kalau begitu", "Namun", "Meskipun"],
    answer: "Kalau begitu"
},
{
    question: "Apa arti dari こちら - Kochira?",
    options: ["Itu", "Ini (sopan)", "Di sana", "Di sini"],
    answer: "Ini (sopan)"
},
{
    question: "Apa arti dari 家賃 (やちん) - Yachin?",
    options: ["Biaya makan", "Biaya transportasi", "Biaya sewa rumah", "Biaya pendidikan"],
    answer: "Biaya sewa rumah"
},
{
    question: "Apa arti dari ダイニングキッチン - Dining Kitchen?",
    options: ["Ruang tamu", "Kamar tidur", "Ruang makan dengan dapur", "Kamar mandi"],
    answer: "Ruang makan dengan dapur"
},
{
    question: "Apa arti dari スーツ - Suutsu?",
    options: ["Terusan", "Pakaian setelan", "Rok", "Blus"],
    answer: "Pakaian setelan",
  },
  {
    question: "Apa arti dari ワンピース - Wanpiisu?",
    options: ["Pakaian setelan", "Terusan", "Celana panjang", "Kemeja"],
    answer: "Terusan",
  },
  {
    question: "Apa arti dari ズボン/パンツ - Zubon/Pantsu?",
    options: ["Jas", "Celana jeans", "Celana panjang", "Rok"],
    answer: "Celana panjang",
  },
  {
    question: "Apa arti dari ジーンズ - Jiinzu?",
    options: ["Celana panjang", "Celana jeans", "Blus", "Kemeja"],
    answer: "Celana jeans",
  },
  {
    question: "Apa arti dari スカート - Sukaato?",
    options: ["Rok", "Blus", "Kemeja", "Sweater"],
    answer: "Rok",
  },
  {
    question: "Apa arti dari ブラウス - Burausu?",
    options: ["Rok", "Blus", "Kemeja", "Sweater"],
    answer: "Blus",
  },
  {
    question: "Apa arti dari ワイシャツ - Waishatsu?",
    options: ["Rok", "Blus", "Kemeja", "Sweater"],
    answer: "Kemeja",
  },
  {
    question: "Apa arti dari セーター - Seetaa?",
    options: ["Rok", "Blus", "Kemeja", "Sweater, baju hangat"],
    answer: "Sweater, baju hangat",
  },
  {
    question: "Apa arti dari マフラー - Mafuraa?",
    options: ["Shal, selendang", "Sarung tangan", "Mantel", "Dasi"],
    answer: "Shal, selendang",
  },
  {
    question: "Apa arti dari 手袋 (てぶくろ) - Tebukuro?",
    options: ["Shal, selendang", "Sarung tangan", "Mantel", "Dasi"],
    answer: "Sarung tangan",
  },
  {
    question: "Apa arti dari (オーバー)コート - (Oobaa) kooto?",
    options: ["Shal, selendang", "Sarung tangan", "Mantel", "Dasi"],
    answer: "Mantel",
  },
  {
    question: "Apa arti dari ネクタイ - Nekutai?",
    options: ["Shal, selendang", "Sarung tangan", "Mantel", "Dasi"],
    answer: "Dasi",
  },
  {
    question: "Apa arti dari ハイヒール - Haihiiru?",
    options: ["Sepatu bot", "Sepatu olahraga", "Sepatu berhak tinggi", "Sandal"],
    answer: "Sepatu berhak tinggi",
  },
  {
    question: "Apa arti dari ブーツ - Buutsu?",
    options: ["Sepatu bot", "Sepatu olahraga", "Sepatu berhak tinggi", "Sandal"],
    answer: "Sepatu bot",
  },
  {
    question: "Apa arti dari 運動靴 (うんどうぐつ) - Undougutsu?",
    options: ["Sepatu bot", "Sepatu olahraga", "Sepatu berhak tinggi", "Sandal"],
    answer: "Sepatu olahraga",
  },
  {
    question: "Apa arti dari くつした/ソックス - Kutsushita/Sokkusu?",
    options: ["Stoking", "Kaos kaki", "Pakaian dalam", "Kimono"],
    answer: "Kaos kaki",
  },
  {
    question: "Apa arti dari 着物 (きもの) - Kimono?",
    options: ["Stoking", "Kaos kaki", "Pakaian dalam", "Kimono"],
    answer: "Kimono",
  },
  {
    question: "Apa arti dari ベルト - Beruto?",
    options: ["Dasi", "Ikat pinggang", "Mantel", "Jas hujan"],
    answer: "Ikat pinggang",
  },
  {
    question: "Apa arti dari レインコート - Reinkooto?",
    options: ["Dasi", "Ikat pinggang", "Mantel", "Jas hujan"],
    answer: "Jas hujan",
  },
  {
    question: "Apa arti dari ぞうり - Zouri?",
    options: ["Kaos kaki tradisional", "Sandal tradisional", "Sepatu bot", "Sepatu olahraga"],
    answer: "Sandal tradisional",
  },
  {
    question: "Apa arti dari たび - Tabi?",
    options: ["Kaos kaki tradisional", "Sandal tradisional", "Sepatu bot", "Sepatu olahraga"],
    answer: "Kaos kaki tradisional",
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
