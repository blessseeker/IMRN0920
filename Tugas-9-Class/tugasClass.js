// Soal No. 1
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

class Ape extends Animal {
  constructor(name, cold_blooded, legs) {
    super(name, cold_blooded);
    this.legs = 2;
  }
  yell() {
    return "Auooo";
  }
}

class Frog extends Animal {
  constructor(name, cold_blooded, legs) {
    super(name, cold_blooded, legs);
  }
  jump() {
    return "Hop Hop";
  }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong.yell()); // "Auooo"

var kodok = new Frog("buduk");
console.log(kodok.jump()); // "hop hop"

//Soal No. 2

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render = () => {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    setInterval(this.render, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
