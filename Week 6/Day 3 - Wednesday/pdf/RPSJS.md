# Rock Paper Scissors
```js
const buttons = document.querySelectorAll("button");
const userDisplay = document.getElementById("userChoice");
const computerDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");
const counterDisplay = document.getElementById("counter");

let counter = 1;
let wins = 0;
let ties = 0;
let losses = 0;

// forEach will run a function for each item in the array
// 'item' refers to the current item in the loop (similar to 'i')
buttons.forEach((item) => {
    item.addEventListener("click", userPick);
});

function userPick(e) {
    // 'e' is the 'event' object.
    // 'target' is the button they clicked on
    const buttonClicked = e.target.innerHTML;
    const computer = computerPick();
    userDisplay.innerHTML = `You picked ${buttonClicked}`;
    computerDisplay.innerHTML = `The computer picked ${computer}`;

    if (computer == buttonClicked) {
        endGame("ties");
    } else if (
        (buttonClicked == "Rock" && computer == "Scissors") ||
        (buttonClicked == "Paper" && computer == "Rock") ||
        (buttonClicked == "Scissors" && computer == "Paper")
    ) {
        endGame("wins");
    } else {
        endGame("losses");
    }
    // console.log(e);
}

function endGame(outcome) {
    counter++;
    counterDisplay.innerHTML = `Game ${counter}`;
    if (outcome == "wins") {
        wins++;
        document.getElementById("wins").innerHTML = `Wins: ${wins}`;
    } else if (outcome == "losses") {
        losses++;
        document.getElementById("losses").innerHTML = `Losses: ${losses}`;
    } else {
        ties++;
        document.getElementById("ties").innerHTML = `Ties: ${ties}`;
    }
    resultDisplay.innerHTML = `You ${outcome}`;
}

function computerPick() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}