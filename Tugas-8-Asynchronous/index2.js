var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

// Lanjutkan code untuk menjalankan function readBooksPromise

let i = 0;
const reading = (alokasiWaktu, daftarBuku) => {
  if (daftarBuku[i]) {
    readBooksPromise(alokasiWaktu, daftarBuku[i])
      .then(function (sisaWaktu) {
        i++;
        reading(sisaWaktu, books);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
};
reading(5000, books);
