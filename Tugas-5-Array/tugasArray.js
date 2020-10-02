//Soal 1
console.log("LOG JAWABAN NO. 1");
function range(numStart, numFinish) {
  let x = [];
  if (numFinish > numStart) {
    for (let i = numStart; i <= numFinish; i++) {
      x.push(i);
    }
  } else if (numStart >= numFinish) {
    for (let i = numStart; i >= numFinish; i--) {
      x.push(i);
    }
  } else {
    x.push(-1);
  }
  return x;
}

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1

// Soal 2
console.log("\n LOG JAWABAN NO. 2");
function rangeWithStep(numStart, numFinish, step) {
  let x = [];
  if (numFinish > numStart) {
    for (let i = numStart; i <= numFinish; i += step) {
      x.push(i);
    }
  } else if (numStart >= numFinish) {
    for (let i = numStart; i >= numFinish; i -= step) {
      x.push(i);
    }
  } else {
    x.push(-1);
  }
  return x;
}

console.log(rangeWithStep(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)); // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]

//Soal 3
console.log("\n LOG JAWABAN NO. 3");
function sum(numStart = 0, numFinish = numStart, step = 1) {
  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
  const arrayRange = rangeWithStep(numStart, numFinish, step);
  return arrSum(arrayRange);
}
console.log(sum(1, 10)); // 55
console.log(sum(5, 50, 2)); // 621
console.log(sum(15, 10)); // 75
console.log(sum(20, 10, 2)); // 90
console.log(sum(1)); // 1
console.log(sum()); // 0

// Soal 4

console.log("\n LOG JAWABAN NO. 4");
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

for (let index = 0; index < input.length; index++) {
  console.log("Nomor ID: " + input[index][0]);
  console.log("Nama Lengkap: " + input[index][1]);
  console.log("TTL: " + input[index][2] + ", " + input[index][3]);
  console.log("Hobi: " + input[index][4]);
  console.log(" ");
}

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Soal 5
console.log("\n LOG JAWABAN NO. 5");
function balikKata(string) {
  return string.split("").reverse().join("");
}

console.log(balikKata("Kasur Rusak")); // kasuR rusaK
console.log(balikKata("SanberCode")); // edoCrebnaS
console.log(balikKata("Haji Ijah")); // hajI ijaH
console.log(balikKata("racecar")); // racecar
console.log(balikKata("I am Sanbers")); // srebnaS ma I

//Soal 6
console.log("\n LOG JAWABAN NO. 6");
var input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input2) {
  input2.splice(1, 1, "Roman Alamsyah Elsharawy");
  input2.splice(2, 1, "Provinsi Bandar Lampung");
  input2.splice(4, 0, "Pria");
  input2.splice(5, 1, "SMA Internasional Metro");
  return input2;
}
console.log(dataHandling2(input2));

function getBulanTeks(fullDate) {
  fullDateSplitted = fullDate.split("/");
  const bulanAngka = fullDateSplitted[1];

  switch (bulanAngka) {
    case "01":
      bulanTeks = "Januari";
      break;
    case "02":
      bulanTeks = "Februari";
      break;
    case "03":
      bulanTeks = "Maret";
      break;
    case "04":
      bulanTeks = "April";
      break;
    case "05":
      bulanTeks = "Mei";
      break;
    case "06":
      bulanTeks = "Juni";
      break;
    case "07":
      bulanTeks = "Juli";
      break;
    case "08":
      bulanTeks = "Agustus";
      break;
    case "09":
      bulanTeks = "September";
      break;
    case "10":
      bulanTeks = "Oktober";
      break;
    case "11":
      bulanTeks = "November";
      break;
    case "12":
      bulanTeks = "Desember";
      break;
  }
  return bulanTeks;
}

console.log(getBulanTeks("21/05/1989"));

fullDateSplitted2 = fullDateSplitted.slice();
fullDateSplitted2.sort(function (value1, value2) {
  return value2 - value1;
});
console.log(fullDateSplitted2);

fullDateJoined = fullDateSplitted.join("-");
console.log(fullDateJoined);

let nama = input2[1];
namaSliced = nama.slice(0, 14);
console.log(namaSliced);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
