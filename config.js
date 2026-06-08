/*
  EDIT SEMUA ISI WEBSITE DARI FILE INI
  - Ganti judul, nama, surat, foto, caption, musik, dan kecepatan ketik.
  - Untuk foto lokal, taruh gambar di folder images lalu tulis: images/namafoto.jpg
  - Untuk musik lokal, taruh file di folder audio lalu tulis: audio/namamusik.mp3
*/

const MOON_MAIL_CONFIG = {
  siteTitle: "Moon Mail",
  siteSubtitle: "Tekan bulan bercahaya ini untuk membuka surat rahasia dari langit malam.",

  letterTitle: "Dear Kamu,",
  typingSpeed: 38,

  letterText: `Malam ini aku titipkan satu pesan kecil pada bulan.

Katanya, cahaya bulan tidak pernah benar-benar memilih siapa yang harus ia temani. Tapi entah kenapa, setiap kali aku melihat langit malam, aku selalu teringat kamu.

Kamu seperti bintang paling tenang di antara banyak cahaya. Tidak selalu paling terang, tapi selalu punya cara untuk membuat malam terasa lebih indah.

Terima kasih sudah hadir, sudah menjadi alasan sederhana untuk tersenyum, dan sudah membuat hal-hal kecil terasa berarti.

Kalau suatu saat kamu merasa lelah, lihatlah bulan. Anggap saja di sana ada satu pesan dariku: kamu berharga, kamu dicintai, dan kamu selalu punya tempat istimewa di hatiku.

With love,
Dari seseorang yang diam-diam selalu mendoakanmu.`,

  music: "https://cdn.pixabay.com/download/audio/2022/10/30/audio_5f062df7b7.mp3?filename=soft-piano-ambient-121597.mp3",
  musicVolume: 0.45,

  // Jumlah bintang kecil dekoratif di slide galeri (hanya hiasan, tidak bisa diklik)
  decorativeStars: 42,

  photos: [
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
      caption: "Kenangan kecil yang selalu terlihat indah."
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      caption: "Seperti langit malam, tenang tapi penuh cerita."
    },
    {
      src: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=900&q=80",
      caption: "Ada cahaya yang selalu ingin kusimpan."
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      caption: "Bintang ini menyimpan satu senyum favorit."
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
      caption: "Malam, bulan, dan tentang kamu."
    },
    {
      src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=900&q=80",
      caption: "Semoga kita selalu punya langit yang sama."
    }
  ]
};
