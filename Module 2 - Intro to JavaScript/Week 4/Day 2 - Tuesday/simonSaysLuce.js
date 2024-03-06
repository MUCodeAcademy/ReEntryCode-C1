// Keep track of the computer's random colors
let simonsChoices = [];
// Keep track of the counter
let counter = 0;
let canClick = false;
// Get all the colors (they all have a class)
const colors = document.getElementsByClassName("color");
// Get the counter
const counterDisplay = document.getElementById("counter");
// Function for getting a random button (Math.floor(Math.random))
function getColor() {
    canClick = false;
    const color = colors[Math.floor(Math.random() * colors.length)];

    simonsChoices.push(color);
    highlight();
}

let clickCounter = 0;
// Function for player clicking
function playerClick(clickedButton) {
    if (canClick) {
        // Check to see if they clicked the right one
        if (clickedButton === simonsChoices[clickCounter]) {
            clickCounter++;
            // If they clicked all of them correctly, increase their win counter
            if (clickCounter >= simonsChoices.length) {
                counterDisplay.innerHTML++;
                clickCounter = 0;
                canClick = true;
                // Putting this in a timer, if it picks the same color twice in a row, it will wait half a second
                // so that it's more obvious to the player
                setTimeout(() => {
                    // After they finished clicking, get a new random color
                    getColor();
                }, 500);
            }
        } else {
            document.getElementById("gameOver").style.display = "block";
        }
    }
}

// Add event listeners to the colors
Array.from(colors).forEach((item) => {
    item.addEventListener("click", (event) => {
        playerClick(event.target);
    });
});

// Function to highlight the button
function highlight() {
    let current = 0;

    // Start with the first element in the array
    simonsChoices[0].classList.add("active");
    let interval = setInterval(() => {
        // Remove the class from the current element
        simonsChoices[current].classList.remove("active");
        console.log(simonsChoices);

        // Increase the counter
        current++;

        // If the counter is at the end of the array, stop the interval
        // and end the function (return);
        if (current >= simonsChoices.length) {
            clearInterval(interval);
            canClick = true;
            return;
        }
        simonsChoices[current].classList.add("active");
    }, 1000);
}

// Function to start game
function startGame() {
    // Reset variables
    counter = 0;
    clickCounter = 0;
    simonsChoices = [];
    // Loop through the array and remove the "active" class for each one
    simonsChoices.forEach((item) => {
        item.classList.remove("active");
    });
    counterDisplay.innerHTML = 0;
    document.getElementById("gameOver").style.display = "none";

    getColor();
}

document.getElementById("newGame").addEventListener("click", startGame);