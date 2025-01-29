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