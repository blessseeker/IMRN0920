//Soal 1
function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj["firstName"] = arr[i][0];
    obj["lastName"] = arr[i][1];
    obj["gender"] = arr[i][2];
    var now = new Date();
    var thisYear = now.getFullYear();
    var age = thisYear - arr[i][3];
    if (age >= 0) {
      obj["age"] = age;
    } else {
      obj["age"] = "Invalid Birth Year";
    }
    var namalengkap = obj["firstName"] + " " + obj["lastName"];
    console.log(obj);
  }
}

// Driver Code
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

// Error case
arrayToObject([]); // ""

//Soal 2
function shoppingTime(memberId, money) {
  if (memberId === "" || !memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }
  var pembelian = { memberId, money, listPurchased: [], changeMoney: money };
  var productSales = [
    [{ produk: "Sepatu Stacattu", harga: 1500000 }],
    [{ produk: "Baju Zoro", harga: 500000 }],
    [{ produk: "Baju H&N", harga: 250000 }],
    [{ produk: "Sweater Uniklooh", harga: 175000 }],
    [{ produk: "Casing Handphone", harga: 50000 }],
  ];
  for (let i = 0; i < productSales.length; i++) {
    if (pembelian.changeMoney > productSales[i][0].harga) {
      pembelian.listPurchased.push(productSales[i][0].produk);
      pembelian.changeMoney = pembelian.changeMoney - productSales[i][0].harga;
    }
  }
  return pembelian;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

//Soal 3
function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  arrayObj = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    var obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
    };
    arrayObj.push(obj);
  }
  return arrayObj;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
