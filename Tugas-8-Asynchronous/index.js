// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

// Tulis code untuk memanggil function readBooks di sini
let i = 0;
const reading = (alokasiWaktu, daftarBuku) => {
  if (daftarBuku[i]) {
    readBooks(alokasiWaktu, daftarBuku[i], function (sisaWaktu) {
      i++;
      if (daftarBuku[i] && sisaWaktu >= daftarBuku[i].timeSpent) {
        reading(sisaWaktu, books);
      }
    });
  }
};
reading(5000, books);
