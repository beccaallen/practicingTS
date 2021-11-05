// added variable with my name
var myName = "Becca";

// added constany with number of US States
const numOfStates = 50;

// added variable that computes 5 + 4
var x = 5 + 4;

//creating function to print 'Hello World'
function sayHello() {
  window.alert("Hello World");
}
sayHello();

// creating function to check age

let i;
let users = [
  {
    name: "Charles",
    age: 21,
  },
  {
    name: "Abby",
    age: 27,
  },
  {
    name: "James",
    age: 18,
  },
  {
    name: "John",
    age: 17,
  },
];

function checkAge(name: string, age: number) {
  if (age < 21) {
    window.alert(
      "Sorry " + name + ", you aren't old enough to view this page!"
    );
  } else {
    alert: false;
  }
}

for (let i = 0; i < users.length; i++) {
  checkAge(users[i].name, users[i].age);
}

//vegetables exercise

let favVeggies = ["brussel sprouts", "potatoes", "OKRA"];

for (let i of favVeggies) {
    console.log(i);
}

// pet exercise 

let pet = {
    name: "Barnabus",
    breed: "Samoyed"
}
    

 console.log(pet.name + " the " + pet.breed);

 //another list of people

 let newPeople = [
     {
         name: "Villette",
         age: 15,

     },
     {
         name: "Frank",
         age: 45,

     },
     {
         name: "Steig",
         age: 55,
     },
     {
         name: "Mindy",
         age: 12,
     },
     {
         name: "Bernadette",
         age: 21,
     },
     {
         name: "Lemony",
         age: 11,
     }
 ];

 //use function again
 for (let i = 0; i < newPeople.length; i++) {
    checkAge(newPeople[i].name, newPeople[i].age);
  }

//new function
  function getLength(x: string){
     return  x.length;
  }

  var length= getLength("what")

  if (length % 2 == 0) {
      console.log("The world is nice and even!")
  } else {
      console.log("The world is an odd place!");
  }
      
  