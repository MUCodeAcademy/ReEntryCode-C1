# Simon Says
```js
const colorButtons = document.querySelectorAll(".color");
const counterDisplay = document.querySelector("#counter");
const newGameButton = document.querySelector("#newGame");

let counter = 0;
// Keeping track of the computer's random colors
let simonChoices = [];

function getColor() {
    // Gets a random color from our list of buttons
    const newColor = colorButtons[Math.floor(Math.random() * colorButtons.length)];

    // Adds it to its array
    simonChoices.push(newColor);

    highlight();
}


function highlight() {
    let current = 0;

    simonChoices[current].classList.add("active");

    const interval = setInterval(() => {
        // Remove the class from the current element
        console.log(simonChoices);
        simonChoices[current].classList.remove("active");

        // Go to the next element
        current++;

        // If we're at the end of the array, stop the interval
        if (current >= simonChoices.length) {
            clearInterval(interval);
            return;
        }
        // If we're not at the end, highlight the next one
        simonChoices[current].classList.add("active");
    }, 1000);
}

let buttonCounter = 0;
function playerClick(e) {
    // If they clicked the correct color
    if (e.target == simonChoices[buttonCounter]) {
        buttonCounter++;
        // If they got all of them correct
        if (buttonCounter >= simonChoices.length) {
            counter++;
            counterDisplay.innerHTML = counter;
            buttonCounter = 0;

            getColor();
        }
    } else {
        document.querySelector("#gameOver").style.display = "block";
    }
}

Array.from(colorButtons).forEach((item) => {
    item.addEventListener("click", playerClick);
});

function startGame() {
    // Resetting variables
    simonChoices = [];
    counter = 0;
    buttonCounter = 0;

    counterDisplay.innerHTMl = counter;
    document.querySelector("#gameOver").style.display = "none";

    Array.from(colorButtons).forEach((item) => {
        // Making sure that each button doesn't have an active class
        item.classList.remove("active");
    });

    getColor();
}

newGameButton.addEventListener("click", startGame);