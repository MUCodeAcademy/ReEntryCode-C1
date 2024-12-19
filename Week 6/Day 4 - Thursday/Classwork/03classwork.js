let correct = false;
const classPicks = ["warrior", "mage"];

const userInfo = {

}
console.log(userInfo)

let userName = prompt("Please enter your name!");
userInfo.name = userName

while (correct == false) {
    let userClass = prompt("Please choose between 'Warrior' class or 'Mage' class.");
    if (classPicks.includes(userClass.toLowerCase())){
        correct = true;
        userInfo.class = userClass
    } else {
        alert("Invalid answer. Please choose between 'Warrior' class or 'Mage' class.");
    }
}

let obstacle1 = prompt(userInfo.name + " the " + userInfo.class + " come across a river. Would you like to 'Swim' across or 'Pay' for a ferry?")

if (obstacle1 == "swim" || obstacle1 == "Swim") {
    alert("Great looks like you want to get a little wet!");
} else {
    alert("Wow! You're a rich man!");
} 
userInfo.obstacle1Ans = obstacle1;

let obstacle2 = prompt(userInfo.name + " the " + userInfo.class + " goes into a resturant. Would you like a 'Dr.Pepper' or a 'Coke'?")


if (obstacle2 == "Coke" || obstacle2 == "coke") {
    alert("A bit typical, but a great choice!");
} else {
    alert("Super refreshing!");
}
userInfo.obstacle2Ans = obstacle2;

let obstacle3 = prompt(userInfo.name + " the " + userInfo.class + " exits the resturant and comes across an anrgy stranger attempting to fight. Would you like to 'Run Away' or 'Fight'?")


if (obstacle3 == "fight" || obstacle3 == "Fight") {
    alert("Not the best option, but way to stand your ground!");
} else {
    alert("You better run faster!");
}
userInfo.obstacle3Ans = obstacle3;

let obstacle4 = prompt(userInfo.name + " the " + userInfo.class + " is out of breath. Would you like to 'Sit' or 'Lay down'?")

if (obstacle4 == "sit" || obstacle4 == "Sit") {
    alert("Good way to catch your breath!");
} else {
    alert("Try to stay awake and not fall asleep!");
}
userInfo.obstacle4Ans = obstacle4;

let obstacle5 = prompt(userInfo.name + " the " + userInfo.class + " is back up and going. You reach your home and you can either go in the 'Front' or 'Side' door.")

if (obstacle5 == "Front" || obstacle5 == "front") {
    alert("Home sweet home!");
} else {
    alert("Home sweet home!");
}
userInfo.obstacle5Ans = obstacle5;

const newDiv = document.createElement("div");
newDiv.style.border = "2px solid black";
newDiv.style.width = "calc(100% - 80px)";
newDiv.style.height = "200px";
newDiv.style.margin = "20px"
newDiv.style.marginTop = "0"
newDiv.style.padding = "20px";
newDiv.style.fontSize = "large"; 
newDiv.innerHTML = `${userInfo.name} the ${userInfo.class} comes across a river and chooses to ${userInfo.obstacle1Ans}. Next, he stumbles along a resturant. ${userInfo.name} the ${userInfo.class} chooses to sit down for a drink and chooses ${userInfo.obstacle2Ans}. When he is finished with his drink he leaves the resturant and comes across an angry stranger wanting to fight. He chooses to ${userInfo.obstacle3Ans}. After that whole ordeal he is very exhuasted. He than chooses to ${userInfo.obstacle4Ans}. Then after he is rested up he reaches home and choose to go into the ${userInfo.obstacle5Ans} door. Fianlly ${userInfo.name} the ${userInfo.class} is home sweet home!`;
document.body.append(newDiv);