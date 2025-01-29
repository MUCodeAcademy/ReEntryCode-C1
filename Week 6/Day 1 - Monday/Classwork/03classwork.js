const userInfo = {

}

while (correct == false) {
    console.log(userClass);
    if (classPicks.includes(userClass.toLowerCase())) {
        correct = true;
        
    }
}

const newDiv = document.createElement("div");
// This probably won't work
newDiv.innerHTML = "Your class is " + userInfo.class + ", your name is " + userInfo.name;
// Do this instead (this is called a 'string literal')
newDiv.innerHTML = `Your class is ${userInfo.class}, your name is ${userInfo.name}`;

const obstacle1 = prompt("this is the first obstacle");

if (obstacle1 == "swim" || obstacle1 == "Swim") { // shortcut: obstacle1.toLowerCase() == "swim"

} else {


}

const obstacle2 = prompt("here's another obstacle");