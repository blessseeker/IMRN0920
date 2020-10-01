//Soal 1
function teriak() {
  return "Halo Sanbers";
}

console.log(teriak());

//Soal 2
function kalikan(angka1, angka2) {
  return angka1 * angka2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

//Soal 3
function introduce(nama, usia, alamat, hobi) {
  const kalimat =
    "Nama saya " +
    nama +
    ", umur saya " +
    usia +
    " tahun, alamat saya di " +
    alamat +
    ", dan saya punya hobby yaitu " +
    hobi +
    "!";
  return kalimat;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"
