//Soal 1
var nama = "Kamaludin Khoir";
var peran = "Programmer";

if (nama == "") {
  return console.log("Nama harus diisi!");
}

if (peran == "") {
  return console.log("Halo, " + nama + "! Pilih Peranmu untuk memulai game");
}

if (peran == "Penyihir") {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  console.log(
    "Halo Penyihir " +
      nama +
      ", kamu dapat melihat siapa yang menjadi werewolf!"
  );
} else if (peran == "Guard") {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  console.log(
    "Halo Guard " +
      nama +
      ", kamu akan membantu melindungi temanmu dari serangan werewolf."
  );
} else if (peran == "Werewolf") {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  console.log(
    "Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!"
  );
} else {
  console.log(
    "Halo " +
      peran +
      " " +
      nama +
      ", sayang sekali, tidak ada tempat untuk peranmu di sini!"
  );
}

//Soal 2
var hari = 21;
var bulan = 1;
var tahun = 1945;

switch (bulan) {
  case 0:
    bulan = "Januari";
    break;
  case 1:
    bulan = "Februari";
    break;
  case 2:
    bulan = "Maret";
    break;
  case 3:
    bulan = "April";
    break;
  case 4:
    bulan = "Mei";
    break;
  case 5:
    bulan = "Juni";
    break;
  case 6:
    bulan = "Juli";
    break;
  case 7:
    bulan = "Agustus";
    break;
  case 8:
    bulan = "September";
    break;
  case 9:
    bulan = "Oktober";
    break;
  case 10:
    bulan = "November";
    break;
  case 11:
    bulan = "Desember";
    break;
}

console.log(hari + " " + bulan + " " + tahun);
