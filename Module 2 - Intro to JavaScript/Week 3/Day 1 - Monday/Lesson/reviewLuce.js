// Gives you more detailed errors
'use strict';

// This can change
let x = 5;
// This won't change
const y = 2;

if (x > y) {
    console.log(x);
}

const div1 = document.getElementById("h1");
const div2 = document.getElementById("div2");
const something = document.createElement("p");

div.style.height = "100px";
div.style.width = "100px";
div.style.color = "blue";

let usernameLength = 5;
let passwordLength = 2;
let somethingElse = 2;

// If someone's password is less than 12, we don't want them to be able to sign up
if (passwordLength >= 12 || usernameLength >= 7 && somethingElse == 2) {
    // Allow them to sign up
} else {
    alert("Your password must be at least 12 characters");
}

if (passwordLength >= 10) {
    console.log(usernameLength, passwordLength);
    if (usernameLength >= 5) {
        if (x === 5) {

        } else {

        }
    } else if (usernameLength === 6) {

    }
}

const string = "yes";
const array = [1, 2, 3];
const object = {};

// Loops are used when you want to do something repeatedly

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Make 10 of boxes and put them on the screen
// Put the number of the box in the box

// You can go through and make a box 10 times if you want ...

// const box1 = document.createElement("div");
// box1.style.width = "100px"
// box1.style.height = "100px";
// box1.style.backgroundColor = "red";
// document.body.appendChild(box1);

// const box2 = document.createElement("div");
// box2.style.width = "100px"
// box2.style.height = "100px";
// box2.style.backgroundColor = "red";
// document.body.appendChild(box2);

// ... but you would have to keep going and add 8 more boxes.

// Instead, you can use a loop that runs 10 times
const colors = ["red", "blue", "green", "cyan", "turquiose", "grey", "black", "yellow", "orange", "indigo"];
for (let i = 0; i < 10; i++) {
    const box1 = document.createElement("div");
    box1.style.width = "100px";
    box1.style.height = "100px";
    box1.style.backgroundColor = colors[i];
    box1.innerHTML = i + 1;
    document.body.appendChild(box1);
}

// Functions

// Create a function that adds two prices together and adds tax
function add(firstNumber, secondNumber) {
    // Code to add two numbers together and add tax
    let result = (firstNumber + secondNumber) * .07;
    // Exports the result from the function
    return result;
}

let userInput = prompt("Enter a price.");
let userInput2 = prompt("Enter a second price.");

add(userInput, userInput2);
// Since we're returning the result, it will put that value in this variable
// Instead of typing the code out to add two numbers each time, we can put it in a function and
// call that function however many times we need to
const total = add(userInput, userInput2);
const total2 = add(userinput3 + userinput4);
const total3 = add(userinput5 + userinput6);

// You can also put functions in a loop
for (let i = 0; i < 10; i++) {
    add(i, i + 1);
}

// Prototypical Functions

const numberArray = [1, 2, 3, 4, 5];

// Loop through the array and multiply each item in the array by 2
numberArray.map((item) => {
    item * 2;
});

// Now the array looks like this:
// [2, 4, 6, 8, 10];

// Event Listener

const element = document.getElementById("id1");

// Whenever they put their cursor over the element, run the add function
element.addEventListener("mouseover", add);

// You can also make an anonymous function in the event listener
element.addEventListener("mouseover", () => {
    // Code to run
    element.style.scale = "2";
    // Use the backticks with ${} when you want to put a variable in a string
    // This will say "This number is 5"
    element.innerHTML = `This number is: ${x}`
});

// Display the price of an item using variables for the prices in this format:
// "Price: $5"

<input type="time"></input>

const time = document.getElementById("time");

console.log(time.value);

const itemPrice = 5;

// Assuming we have an element with the id of "price"
const priceDisplay = document.getElementById("price");

// This will display "Price: $5"
priceDisplay.innerHTML = `Price: $${itemPrice}`;