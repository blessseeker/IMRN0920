// Soal 1
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";
combine = [word, second, third, fourth, fifth, sixth, seventh].join(" ");
console.log(combine);

// Soal 2
var sentence = "I am going to be React Native Developer";
var words = sentence.split(" ");

var FirstWord = words[0];
var SecondWord = words[1];
var thirdWord = words[2]; // lakukan sendiri
var fourthWord = words[3]; // lakukan sendiri
var fifthWord = words[4]; // lakukan sendiri
var sixthWord = words[5]; // lakukan sendiri
var seventhWord = words[6]; // lakukan sendiri
var eighthWord = words[7]; // lakukan sendiri

console.log("First Word: " + FirstWord);
console.log("Second Word: " + SecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

// Soal 3
var sentence2 = "wow JavaScript is so cool";

var FirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14); // do your own!
var thirdWord2 = sentence2.substring(15, 17); // do your own!
var fourthWord2 = sentence2.substring(18, 20); // do your own!
var fifthWord2 = sentence2.substring(21, 25); // do your own!

console.log("First Word: " + FirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

// Soal 4
var sentence3 = "wow JavaScript is so cool";

var FirstWord3 = sentence2.substring(0, 3);
var secondWord3 = sentence2.substring(4, 14); // do your own!
var thirdWord3 = sentence2.substring(15, 17); // do your own!
var fourthWord3 = sentence2.substring(18, 20); // do your own!
var fifthWord3 = sentence2.substring(21, 25); // do your own!

var firstWordLength = FirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;
// lanjutkan buat variable lagi di bawah ini
console.log("First Word: " + FirstWord3 + ", with length: " + firstWordLength);
console.log(
  "Second Word: " + secondWord3 + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log(
  "Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength
);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);
