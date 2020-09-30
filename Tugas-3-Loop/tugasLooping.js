//Soal 1
console.log("LOOPING PERTAMA");
var i = 0;
while (i < 20) {
  i += 2;
  console.log(i + " - I love coding");
}
console.log("LOOPING KEDUA");
var j = 22;
while (j > 2) {
  j -= 2;
  console.log(j + " - I will become a mobile developer");
}
//Soal 2
console.log("OUTPUT");
for (let k = 1; k <= 20; k++) {
  if (k % 2 == 0) {
    var word = "Berkualitas";
  } else {
    if (k % 3 == 0) {
      var word = "I love coding";
    } else {
      var word = "Santai";
    }
  }
  console.log(k + " - " + word);
}
//Soal 3
for (let l = 0; l < 4; l++) {
  console.log("########");
}
//Soal 4
var pagar = "#";
for (let pengali = 0; pengali <= 7; pengali++) {
  console.log(pagar.repeat(pengali));
}
//Soal 5
for (let m = 0; m < 8; m++) {
  if (m % 2 == 0) {
    console.log(" # # # #");
  } else {
    console.log("# # # # ");
  }
}
