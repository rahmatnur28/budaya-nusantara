import { CultureDetail } from "@/components/culture-detail"

// Mock data - in real app this would come from API
const mockCultureData = {
  "batik-yogyakarta": {
    id: "batik-yogyakarta",
    name: "Batik Yogyakarta",
    category: "Seni Tekstil",
    region: "Yogyakarta",
    mainImage: "https://i.pinimg.com/1200x/3c/30/3f/3c303f1e64d6d79292599999b227d90f.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/fb/72/2d/fb722d15f7fabacb2d418954dde415bd.jpg",
      "https://i.pinimg.com/736x/e3/b2/dd/e3b2dd0121b86deb267a80d7be5c9cf8.jpg",
      "https://i.pinimg.com/736x/f5/ba/8d/f5ba8d129f3a22d8c0ee3f78d84d4a12.jpg",
      "https://i.pinimg.com/736x/63/d9/05/63d9051117b12806a521f85fb13f18d4.jpg",
      "http://i.pinimg.com/1200x/3f/99/62/3f9962126857193d56b6262bc35aea4b.jpg",
    ],
    basicInfo: {
      origin: "Yogyakarta, Jawa Tengah",
      period: "Abad ke-8",
      difficulty: "Menengah",
      materials: "Kain mori, lilin, pewarna alami",
    },
    description:
      "Batik Yogyakarta adalah salah satu warisan budaya Indonesia yang paling berharga. Seni membatik ini telah berkembang selama berabad-abad di Keraton Yogyakarta dan menjadi bagian integral dari budaya Jawa.",
    history:
      "Batik Yogyakarta memiliki sejarah panjang yang dimulai sejak abad ke-8. Awalnya, batik hanya boleh dikenakan oleh keluarga kerajaan dan bangsawan. Setiap motif memiliki makna filosofis yang mendalam dan mencerminkan status sosial pemakainya. Perkembangan batik Yogyakarta tidak terlepas dari pengaruh Keraton yang menjadi pusat budaya dan seni.",
    philosophy:
      "Setiap motif batik Yogyakarta mengandung filosofi Jawa yang mendalam. Motif-motif seperti Parang, Kawung, dan Sido Mukti tidak hanya indah secara visual, tetapi juga sarat dengan makna spiritual dan harapan baik bagi pemakainya. Motif Parang melambangkan kekuatan dan keteguhan, sedangkan Kawung melambangkan kesucian dan keagungan.",
    process:
      "Proses pembuatan batik Yogyakarta melibatkan beberapa tahap: menggambar pola, mencanting (menerapkan lilin), pewarnaan, dan pelorodan (menghilangkan lilin). Setiap tahap memerlukan keahlian khusus dan kesabaran tinggi. Proses ini bisa memakan waktu berhari-hari hingga berminggu-minggu tergantung kompleksitas motif.",
    coordinates: { lat: -7.7956, lng: 110.3695 },
    relatedCultures: [
      { id: "songket-palembang", name: "Songket Palembang", region: "Sumatera Selatan" },
      { id: "wayang-kulit", name: "Wayang Kulit Jawa", region: "Jawa Tengah" },
    ],
    references: ["UNESCO Intangible Cultural Heritage", "Kraton Yogyakarta Archives", "Indonesian Batik Foundation"],
  },
  "tari-kecak-bali": {
    id: "tari-kecak-bali",
    name: "Tari Kecak Bali",
    category: "Seni Pertunjukan",
    region: "Bali",
    mainImage: "https://i.pinimg.com/736x/b9/bd/a8/b9bda8d3833ca59f146a638e031a2bd7.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/c9/c7/b9/c9c7b986d52ef3a55aed5f9fc97b3e0e.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Bali",
      period: "1930-an",
      difficulty: "Tinggi",
      materials: "Kostum tradisional, api, gamelan",
    },
    description:
      "Tari Kecak adalah tarian tradisional Bali yang unik karena tidak menggunakan alat musik, melainkan suara 'cak' dari puluhan penari pria yang duduk melingkar.",
    history:
      "Tari Kecak diciptakan pada tahun 1930-an oleh Wayan Limbak dan Walter Spies di Desa Bona, Gianyar. Tarian ini terinspirasi dari ritual Sanghyang yang sakral, namun dikembangkan menjadi pertunjukan seni yang dapat dinikmati wisatawan. Cerita yang dibawakan biasanya adalah episode dari Ramayana.",
    philosophy:
      "Tari Kecak mengandung filosofi keseimbangan antara baik dan jahat, terang dan gelap. Pertunjukan ini menggambarkan perjuangan Rama melawan Rahwana, yang melambangkan pertarungan antara dharma (kebenaran) dan adharma (kejahatan). Suara 'cak' yang berulang menciptakan trance spiritual.",
    process:
      "Pertunjukan Kecak melibatkan 50-100 penari pria yang duduk melingkar sambil mengucapkan 'cak' dengan ritme tertentu. Di tengah lingkaran, penari utama memerankan tokoh-tokoh Ramayana. Pertunjukan biasanya berlangsung 1-2 jam dengan klimaks pada adegan api.",
    coordinates: { lat: -8.5069, lng: 115.2625 },
    relatedCultures: [
      { id: "tari-saman", name: "Tari Saman Aceh", region: "Aceh" },
      { id: "wayang-kulit", name: "Wayang Kulit Jawa", region: "Jawa Tengah" },
    ],
    references: ["UNESCO Creative Cities Network", "Bali Cultural Heritage", "Indonesian Dance Archive"],
  },
  "rendang-minang": {
    id: "rendang-minang",
    name: "Rendang Minangkabau",
    category: "Kuliner Tradisional",
    region: "Sumatera Barat",
    mainImage: "https://i.pinimg.com/736x/97/d0/21/97d02196deea630b66f9a2002c8f6ce8.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/ff/fd/9e/fffd9e95f70056ff7b0f8d55fb2e5fb3.jpg",
      "https://i.pinimg.com/736x/d4/bc/71/d4bc7114ac1bd59cac7fa230daae97db.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Sumatera Barat",
      period: "Abad ke-16",
      difficulty: "Tinggi",
      materials: "Daging sapi, santan, cabai, rempah-rempah",
    },
    description:
      "Rendang adalah masakan daging dengan bumbu rempah yang dimasak dalam waktu lama hingga kering dan berwarna coklat kehitaman. Diakui sebagai makanan terlezat di dunia oleh CNN.",
    history:
      "Rendang berasal dari tradisi merantau masyarakat Minangkabau. Masakan ini diciptakan sebagai bekal perjalanan jauh karena dapat bertahan lama tanpa bahan pengawet. Proses memasak yang lama membuat rendang tahan hingga berminggu-minggu dalam suhu tropis.",
    philosophy:
      "Rendang melambangkan filosofi hidup Minangkabau tentang kesabaran dan ketekunan. Proses memasak yang memakan waktu 6-8 jam mengajarkan nilai kesabaran. Empat bahan utama (daging, santan, cabai, rempah) melambangkan empat unsur masyarakat Minang: niniak mamak, alim ulama, cadiak pandai, dan bundo kanduang.",
    process:
      "Proses pembuatan rendang dimulai dengan menumis bumbu halus, lalu memasukkan daging dan santan. Masakan diaduk terus-menerus dengan api kecil selama 6-8 jam hingga santan mengering dan bumbu meresap sempurna. Hasilnya adalah daging yang empuk dengan cita rasa yang kaya dan kompleks.",
    coordinates: { lat: -0.7893, lng: 100.6514 },
    relatedCultures: [
      { id: "rumah-gadang", name: "Rumah Gadang", region: "Sumatera Barat" },
      { id: "songket-palembang", name: "Songket Palembang", region: "Sumatera Selatan" },
    ],
    references: ["CNN World's 50 Best Foods", "Minangkabau Cultural Foundation", "Indonesian Culinary Heritage"],
  },
  "wayang-kulit": {
    id: "wayang-kulit",
    name: "Wayang Kulit Jawa",
    category: "Seni Pertunjukan",
    region: "Jawa Tengah",
    mainImage: "https://i.pinimg.com/736x/c5/0b/4e/c50b4e6054e8ccb8b139592e5377d948.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/ca/52/0f/ca520fb2b12b5d173274b62d59f8dd22.jpg",
      "https://i.pinimg.com/736x/eb/9f/d7/eb9fd71463230d921fbaf7c2b9d46e7e.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Jawa Tengah",
      period: "Abad ke-10",
      difficulty: "Sangat Tinggi",
      materials: "Kulit kerbau, kayu, gamelan",
    },
    description:
      "Wayang kulit adalah seni pertunjukan tradisional Indonesia yang menggunakan boneka kulit untuk menceritakan kisah-kisah epik seperti Mahabharata dan Ramayana.",
    history:
      "Wayang kulit telah ada sejak abad ke-10 di Jawa. Seni ini berkembang di istana-istana Jawa dan menjadi media dakwah Islam pada abad ke-15. Sunan Kalijaga menggunakan wayang untuk menyebarkan ajaran Islam dengan memasukkan nilai-nilai Islam ke dalam cerita pewayangan.",
    philosophy:
      "Wayang kulit mengandung filosofi hidup Jawa yang mendalam. Pertunjukan ini mengajarkan tentang kebaikan dan kejahatan, karma, dan jalan hidup yang benar. Dalang berperan sebagai guru spiritual yang menyampaikan pesan moral melalui cerita. Layar putih melambangkan kehidupan, bayangan wayang adalah kehidupan manusia.",
    process:
      "Pertunjukan wayang kulit dipimpin oleh dalang yang memainkan semua karakter, menceritakan kisah, dan mengendalikan gamelan. Pertunjukan berlangsung semalam suntuk (8-9 jam) dari malam hingga fajar. Dalang harus menguasai ratusan karakter, suara, dan alur cerita yang kompleks.",
    coordinates: { lat: -7.5667, lng: 110.8167 },
    relatedCultures: [
      { id: "batik-yogyakarta", name: "Batik Yogyakarta", region: "Yogyakarta" },
      { id: "tari-kecak-bali", name: "Tari Kecak Bali", region: "Bali" },
    ],
    references: [
      "UNESCO Masterpiece of Oral and Intangible Heritage",
      "Javanese Cultural Heritage",
      "Indonesian Puppet Theatre Archive",
    ],
  },
  "songket-palembang": {
    id: "songket-palembang",
    name: "Songket Palembang",
    category: "Seni Tekstil",
    region: "Sumatera Selatan",
    mainImage: "https://i.pinimg.com/736x/ff/93/20/ff9320a0ba327fbe41ad9776254f629d.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/c4/66/4f/c4664f706bee4d5ec10233d5865620a8.jpg",
      "https://i.pinimg.com/1200x/5c/c6/02/5cc602d568ce26601ade1947d2488491.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Palembang, Sumatera Selatan",
      period: "Abad ke-16",
      difficulty: "Tinggi",
      materials: "Benang sutra, benang emas, benang perak",
    },
    description:
      "Songket Palembang adalah kain tenun tradisional yang menggunakan benang emas dan perak, menciptakan motif yang mewah dan berkilauan.",
    history:
      "Songket Palembang berkembang sejak era Kesultanan Palembang pada abad ke-16. Kain ini awalnya hanya digunakan oleh keluarga kerajaan dan bangsawan. Teknik tenun songket dipengaruhi oleh budaya Melayu, Arab, dan Tiongkok yang masuk melalui jalur perdagangan Sriwijaya.",
    philosophy:
      "Songket melambangkan kemewahan dan status sosial tinggi. Motif-motif seperti bungo pacik, nago besaung, dan lepus melambangkan kesuburan, kekuatan, dan kemakmuran. Proses tenun yang rumit mengajarkan nilai kesabaran dan ketelitian. Songket juga melambangkan identitas budaya Melayu Palembang.",
    process:
      "Pembuatan songket menggunakan alat tenun tradisional yang disebut gedogan. Proses dimulai dengan menyiapkan benang lungsin dan pakan, lalu memasukkan benang emas/perak sesuai motif. Satu lembar songket bisa memakan waktu 2-6 bulan tergantung kompleksitas motif dan ukuran kain.",
    coordinates: { lat: -2.9761, lng: 104.7754 },
    relatedCultures: [
      { id: "batik-yogyakarta", name: "Batik Yogyakarta", region: "Yogyakarta" },
      { id: "rendang-minang", name: "Rendang Minangkabau", region: "Sumatera Barat" },
    ],
    references: ["Palembang Cultural Heritage", "Indonesian Textile Museum", "Sriwijaya Historical Archive"],
  },
  "rumah-gadang": {
    id: "rumah-gadang",
    name: "Rumah Gadang",
    category: "Arsitektur Tradisional",
    region: "Sumatera Barat",
    mainImage: "https://i.pinimg.com/736x/ed/13/d7/ed13d7695dfa97de148c1001f9cb6bda.jpg",
    gallery: [
      "https://i.pinimg.com/736x/4b/96/9e/4b969e226eee6ac0d37bc692fcf147d9.jpg",
      "https://i.pinimg.com/736x/3e/8e/4d/3e8e4df0b5990ca5544cee68b36c8261.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Sumatera Barat",
      period: "Abad ke-16",
      difficulty: "Tinggi",
      materials: "Kayu, ijuk, bambu, rotan",
    },
    description:
      "Rumah Gadang adalah rumah adat Minangkabau dengan atap melengkung khas yang menyerupai tanduk kerbau, mencerminkan filosofi dan budaya Minangkabau.",
    history:
      "Rumah Gadang telah ada sejak abad ke-16 sebagai tempat tinggal keluarga besar dalam sistem matrilineal Minangkabau. Rumah ini menjadi pusat kehidupan sosial dan budaya masyarakat Minang. Setiap rumah gadang dihuni oleh satu keluarga besar yang dipimpin oleh seorang Bundo Kanduang.",
    philosophy:
      "Atap rumah gadang yang melengkung seperti tanduk kerbau melambangkan kemenangan dalam pertarungan. Filosofi ini mencerminkan semangat pantang menyerah masyarakat Minang. Rumah yang tinggi melambangkan martabat dan harga diri. Struktur rumah panggung melambangkan kehidupan yang terhindar dari bencana.",
    process:
      "Pembangunan rumah gadang menggunakan sistem gotong royong dan dipimpin oleh tukang kayu ahli. Konstruksi menggunakan sistem pasak tanpa paku, membuat rumah tahan gempa. Atap terbuat dari ijuk yang tahan air dan panas. Proses pembangunan bisa memakan waktu berbulan-bulan dengan melibatkan seluruh masyarakat.",
    coordinates: { lat: -0.7893, lng: 100.6514 },
    relatedCultures: [
      { id: "rendang-minang", name: "Rendang Minangkabau", region: "Sumatera Barat" },
      { id: "songket-palembang", name: "Songket Palembang", region: "Sumatera Selatan" },
    ],
    references: ["Minangkabau Cultural Foundation", "Indonesian Architecture Heritage", "Traditional House Archive"],
  },
  "tari-saman": {
    id: "tari-saman",
    name: "Tari Saman Aceh",
    category: "Seni Pertunjukan",
    region: "Aceh",
    mainImage: "https://i.pinimg.com/736x/f0/b7/9f/f0b79fdbffc9d1ffe281c4cca21a6c86.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/e4/69/be/e469be0574117e8bc6c6f16555718a90.jpg",
      "https://i.pinimg.com/736x/02/d6/88/02d688872f3d06ff9491f38c6b689e61.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Gayo, Aceh",
      period: "Abad ke-14",
      difficulty: "Sangat Tinggi",
      materials: "Kostum tradisional Aceh, peci",
    },
    description:
      "Tari Saman adalah tarian tradisional Aceh yang diakui UNESCO sebagai warisan budaya dunia, terkenal dengan gerakan yang sangat cepat dan kompak.",
    history:
      "Tari Saman diciptakan oleh Syekh Saman, seorang ulama dari Gayo pada abad ke-14. Tarian ini awalnya digunakan untuk menyebarkan ajaran Islam dan memuji Allah. Tari Saman berkembang di daerah Gayo dan kemudian menyebar ke seluruh Aceh sebagai bagian dari tradisi Islam.",
    philosophy:
      "Tari Saman mengandung nilai-nilai Islam dan filosofi kehidupan masyarakat Aceh. Gerakan yang kompak melambangkan persatuan umat, sedangkan lirik yang dinyanyikan berisi pujian kepada Allah dan nasihat moral. Tarian ini mengajarkan nilai disiplin, kerjasama, dan spiritualitas.",
    process:
      "Tari Saman ditarikan oleh penari laki-laki dalam jumlah ganjil (biasanya 7, 9, atau 11 orang) yang duduk bersimpuh dalam satu baris. Gerakan meliputi tepukan tangan, tepukan dada, dan gerakan kepala yang sangat cepat dan sinkron. Tidak ada musik pengiring, hanya suara penari yang bernyanyi dan bertepuk tangan.",
    coordinates: { lat: 4.695, lng: 96.7493 },
    relatedCultures: [
      { id: "tari-kecak-bali", name: "Tari Kecak Bali", region: "Bali" },
      { id: "wayang-kulit", name: "Wayang Kulit Jawa", region: "Jawa Tengah" },
    ],
    references: ["UNESCO Representative List of ICH", "Aceh Cultural Heritage", "Indonesian Dance Heritage"],
  },
  "keris-jawa": {
    id: "keris-jawa",
    name: "Keris Jawa",
    category: "Seni Rupa",
    region: "Jawa",
    mainImage: "https://i.pinimg.com/1200x/cb/3e/a7/cb3ea73d20b1038c89aa0bf91eb70d7b.jpg",
    gallery: [
      "https://i.pinimg.com/736x/cf/81/85/cf818576436a35fdaecf7f6bffd742b3.jpg",
      "https://i.pinimg.com/736x/01/ae/3a/01ae3a0b5abbbc5aed01c5729740341a.jpg",
      // "/placeholder.svg?height=300&width=400",
      // "/placeholder.svg?height=300&width=400",
    ],
    basicInfo: {
      origin: "Jawa",
      period: "Abad ke-9",
      difficulty: "Sangat Tinggi",
      materials: "Besi, baja, pamor, kayu, emas",
    },
    description:
      "Keris adalah senjata tradisional Jawa yang memiliki nilai spiritual dan seni tinggi, dianggap sebagai pusaka yang sakral dan bertuah.",
    history:
      "Keris telah ada sejak abad ke-9 di Jawa dan berkembang pesat pada era Majapahit. Senjata ini tidak hanya berfungsi sebagai alat perang, tetapi juga sebagai simbol status sosial dan spiritual. Keris sering diwariskan turun-temurun sebagai pusaka keluarga yang sakral.",
    philosophy:
      "Keris melambangkan kekuatan spiritual dan perlindungan. Setiap keris diyakini memiliki roh atau kekuatan gaib yang dapat melindungi pemiliknya. Bentuk bilah yang berliku (luk) melambangkan ular naga yang merupakan simbol kekuatan dan kebijaksanaan. Pamor (motif logam) pada bilah diyakini membawa keberuntungan.",
    process:
      "Pembuatan keris melibatkan proses spiritual dan teknis yang kompleks. Empu (pandai besi keris) harus menjalani ritual khusus sebelum menempa. Proses pembuatan meliputi pemilihan bahan, penempaan berulang, pembentukan pamor, dan ritual penyucian. Satu keris bisa memakan waktu berbulan-bulan untuk diselesaikan.",
    coordinates: { lat: -7.7956, lng: 110.8167 },
    relatedCultures: [
      { id: "wayang-kulit", name: "Wayang Kulit Jawa", region: "Jawa Tengah" },
      { id: "batik-yogyakarta", name: "Batik Yogyakarta", region: "Yogyakarta" },
    ],
    references: ["UNESCO Masterpiece of ICH", "Javanese Keris Foundation", "Indonesian Weaponry Heritage"],
  },
}

export default function CultureDetailPage({ params }: { params: { id: string } }) {
  const cultureData = mockCultureData[params.id as keyof typeof mockCultureData]

  if (!cultureData) {
    return <div>Culture not found</div>
  }

  return <CultureDetail data={cultureData} />
}
