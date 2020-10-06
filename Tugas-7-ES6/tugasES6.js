//Soal 1
const golden = (goldenFunction = () => {
  console.log("this is golden!!");
});

golden();

//Soal 2
const newFunction = (literal = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
      return;
    },
  };
});

//Driver Code
newFunction("William", "Imoh").fullName();

//Soal 3
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation, spell);

//Soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);

//Soal 5
const planet = "earth";
const view = "glass";
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam`;

// Driver Code
console.log(before);
