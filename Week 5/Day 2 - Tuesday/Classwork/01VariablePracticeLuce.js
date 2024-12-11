// VARIABLE PRACTICE

// -----------------------------------------------------------------
//! Explain or demonstrate the difference between 'let' and 'const'.

// Let are variables you can change, const variables you can't change

let canChange = 0;
canChange = 5;

// const noChange = 0;
// noChange = 9; // This will give me an error

// -----------------------------------------------------------------
//! Declare at least one variable of each type.

let guesses = 0; // Number
const word = "this is a sentence"; // String
let trueOrFalse = false; // Boolean
let noValue = null; // Null
let alsoNothing; // Undefined

// -----------------------------------------------------------------
//! Change the value of one of your variables you just made.

guesses = 5;
guesses += 3;
guesses++; // Increases by 1

// -----------------------------------------------------------------
//! Create an array, and log the third item in that array to the console.

const cars = ["Chevrolet", "Toyota", "Hyundai", "Dodge"];

console.log(cars[2]);

// -----------------------------------------------------------------
//! Now that you've created the array:
//! 1. Log the length of the array
//! 2. Add a new item to the array
//! 3. Log the length again
//! 4. Remove that item you just added

console.log(cars.length);
cars.push("Ford");
console.log(cars.length);
cars.pop();

// -----------------------------------------------------------------
//! Create an object and log one of its properties to the console.

const luce = {
    tall: "70in",
    hair: "Brown",
}

console.log(luce.tall);

// -----------------------------------------------------------------
//! Add a new property to the object and log that property.

luce.weight = 125;
console.log(luce.weight);

// -----------------------------------------------------------------
//! Create a new object inside of the object you've already made, and log one of its properties.

luce.clothes = {
    shirtColor: "grey",
    pantsColor: "black"
}

console.log(luce.clothes.shirtColor);

// -----------------------------------------------------------------
//!! Demonstrate the difference between `==` and `===`.

// == means that the values are the same, === is a strict equal, meaning that they need to have the same value AND type

let number = 3;
let string = "3";

number == string; // true
number === string; // false


// Program that lets the user guess a random number. If they didn't guess it correctly, keep going
// Otherwise, tell them that they got it.

const randomNumber = 5;
let numGuesses = 0;
let userGuess = prompt("Guess a random number between 1 and 10");

while (userGuess != randomNumber) {
    numGuesses++;
    console.log(numGuesses);
    console.log("Incorrect number");
    alert("Incorrect number. Your number of guesses: " + numGuesses);
    userGuess = prompt("Guess a random number between 1 and 10");
}

if (userGuess == randomNumber) {
    numGuesses++;
    console.log(numGuesses);
    console.log("You got it right");
    alert("You got it right");
}

// paragraph.style.color = "red";