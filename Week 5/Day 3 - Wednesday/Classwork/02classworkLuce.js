// LOOP PRACTICE
// -----------------------------------------------------------------
//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.
//! If the input is shorter than 4 characters, nothing should be logged.

const input = prompt("Enter a word");

// input.length gets the length of their word

if (input.length >= 4) {
    for (let i = 3; i < input.length; i++) {
        console.log(input[i]);
    }
}

// -----------------------------------------------------------------
//! Pick a random number. Prompt the user to guess a number. If the number is correct,
//! end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

// Math.floor rounds the number down to the nearest integer
// Math.random gets a random number between 0 and 1
// Multiplying it by 100 means our numbers are going to be between 0 and 99
// We want it to be between 1 and 100 instead, so we add 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let correct = false;

while (correct == false) {
    // Prompt the user
    let userGuess = prompt("Guess a random number between 1 and 100");

    // Increase attempt counter
    attempts++;
    
    // If they get it correct, change the 'correct' variable to true and tell them they got it right with the amount of attempts
    if (userGuess == randomNumber) {
        correct = true;
        alert("You got it right! Attempts: " + attempts);
    } else {
        // If they got it wrong, tell them that
        console.log(randomNumber);
        alert("You got it wrong!");
    }
}

// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.
//!  - Log every number from 0 to their number in a loop.
//!  - (example: if they enter 32 as a number, log each number from 0 to 32)
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.


let userNum = prompt("Enter a number between 1 and 100");

if (userNum % 2 == 0) {
    alert("Your number is even");
    console.log("Your number is even");
} else {
    alert("Your number is odd")
    console.log("Your number is odd");
}

if (userNum >= 50) {
    alert("Your number is greater than or equal to 50");
    console.log("Your number is greater than or equal to 50");
} else {
    alert("Your number is less than 50");
    console.log("Your number is less than 50");
}

for (let i = 0; i <= userNum; i++) {
    console.log(i);
}

let username = prompt("Enter your name");

if (username == "Justin Luce") {
    alert("Great name!");
}

for (let i = username.length - 1; i >= 0; i--) {
    console.log(username[i]);
}

// -----------------------------------------------------------------
//! Take the following arrays: `[-1,-2,2,10,7,8]` and `[4,-2,2,7,9,5]`
//! and see how many items the two arrays share in common.
//! Do this without prototypical functions (ex. array.filter and array.includes).
//! Hint: use a nested loop (a loop inside a loop)

const array1 = [-1,-2,2,10,7,8];
const array2 = [4,-2,2,7,9,5];

let commonItems = 0;

for (let i = 0; i < array1.length; i++) {
    for (let z = 0; z < array2.length; z++) {
        if (array1[i] == array2[z]) {
            commonItems++;
        }
    }
}

console.log("These arrays have " + commonItems + " items in common");