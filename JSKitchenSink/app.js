"use strict";
// added variable with my name
var myName = "Becca";
// added constany with number of US States
var numOfStates = 50;
// added variable that computes 5 + 4
var x = 5 + 4;
//creating function to print 'Hello World'
function sayHello() {
    window.alert("Hello World");
}
sayHello();
// creating function to check age
var i;
var users = [
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
function checkAge(name, age) {
    if (age < 21) {
        window.alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        alert: false;
    }
}
for (var i_1 = 0; i_1 < users.length; i_1++) {
    checkAge(users[i_1].name, users[i_1].age);
}
//vegetables exercise
var favVeggies = ["brussel sprouts", "potatoes", "OKRA"];
for (var _i = 0, favVeggies_1 = favVeggies; _i < favVeggies_1.length; _i++) {
    var i_2 = favVeggies_1[_i];
    console.log(i_2);
}
// pet exercise 
var pet = {
    name: "Barnabus",
    breed: "Samoyed"
};
console.log(pet.name + " the " + pet.breed);
//another list of people
var newPeople = [
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
for (var i_3 = 0; i_3 < newPeople.length; i_3++) {
    checkAge(newPeople[i_3].name, newPeople[i_3].age);
}
//new function
function getLength(x) {
    return x.length;
}
var length = getLength("whatevers");
if (length % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
