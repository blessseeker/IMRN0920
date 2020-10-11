/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 *
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 *
 * Selamat mengerjakan
 */

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
  constructor(subject, points, email) {
    this.subject = subject;
    this.email = email;
    this.points = points;
  }
  average() {
    if (this.points.constructor === Array) {
      let total = 0;
      for (let i = 0; i < points.length; i++) {
        total += points[i];
      }
      const avg = total / points.length;
      return avg;
    }
    return points;
  }
}

const points = [10, 9, 8, 2];
const score = new Score("Matematika", points, "khoirkamaludin@gmail.com");
console.log("Subjek :" + score.subject);
console.log("Email :" + score.email);
console.log("Poin :" + score.points);
console.log("Rata-rata :" + score.average());

/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/

const data = [
  ["email", "quiz-1", "quiz-2", "quiz-3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93],
];

viewScores = (data, subject) => {
  const subjectIndex = data[0].indexOf(subject);
  const outputArray = [];
  for (let index = 1; index < data.length; index++) {
    outputObject = {};
    const email = data[index][0];
    const nilai = data[index][subjectIndex];
    outputObject["email"] = email;
    outputObject["subject"] = subject;
    outputObject["nilai"] = nilai;
    outputArray.push(outputObject);
  }
  console.log(outputArray);
};

// TEST CASE
viewScores(data, "quiz-1");
viewScores(data, "quiz-2");
viewScores(data, "quiz-3");

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/

recapScores = (data) => {
  for (let index = 1; index < data.length; index++) {
    const email = data[index][0];
    const points = [data[index][1], data[index][2], data[index][3]];
    let total = 0;
    for (let i = 0; i < points.length; i++) {
      total += points[i];
    }
    const average = Math.round(total / points.length) / 10;
    switch (true) {
      case average > 90:
        predikat = "honour";
        break;
      case average > 80:
        predikat = "graduate";
        break;

      default:
        predikat = "participant";
        break;
    }

    console.log(index + ". Email: " + email);
    console.log("Rata-rata: " + average);
    console.log("Predikat: " + predikat);
    console.log("");
  }
};

recapScores(data);
