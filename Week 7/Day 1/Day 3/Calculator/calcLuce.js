// When they click a button, put that in the display
    // - make a variable to store the buttons
    // - Array.from(querySelectorAll("button"))
    // - add event listeners for each button ("click", functionName)

const buttons = Array.from(document.querySelectorAll("button"));
const display = document.getElementById("display");
let equation = "";

buttons.forEach((button) => { // button represents the current button in the loop
    // Add an event listener to the current button
    button.addEventListener("click", handleClick);
});

/*

If you're using a for loop

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

*/

// Store our original font size so we can set it back later
const originalFontSize =  display.style.fontSize;
// Make a function that runs when they click a button
    // This function will put the text/value of the button in the display
function handleClick(e) { 
    // display.innerHTML = e.target.childNodes[0].data; // this also works if you want
    switch (e.target.innerHTML) {
        case 'C':
        case 'CE':
            display.innerHTML = '0';
            display.style.fontSize = originalFontSize;
            equation = '';
            buttons.forEach((button) => {
                if (!isNaN(button.innerHTML)) {
                    button.disabled = false;
                    button.style.cursor = 'auto';
                }
            });
            break;
        case '⌫':
            // for example when display.innnerHTML = '856', we want to remove the 6
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
            if (display.innerHTML.length == 0) {
                display.innerHTML = '0';
            }
            equation = equation.toString().substring(0, equation.toString().length - 1);
            console.log(equation);
            break;
        case '%':
            // display.innerHTML = display.innerHTML / 100;
            display.innerHTML /= 100; // shorthand
            equation /= 100;
            break;
        case '𝓍²':
            display.innerHTML = Math.pow(display.innerHTML, 2);
            equation = Math.pow(equation, 2);
            break;
        case '1/x':
            display.innerHTML = 1 / display.innerHTML;
            equation = 1 / equation;
            break;
        case '√':
            display.innerHTML = Math.sqrt(display.innerHTML);
            equation = Math.sqrt(equation);
            break;
        case '=':
            console.log(equation);
            display.innerHTML = eval(equation);
            equation = eval(equation);
            break;
        case '−':
            display.innerHTML += e.target.innerHTML;
            equation += '-';
            break;
        case '×':
            display.innerHTML += e.target.innerHTML;
            equation += '*';
            break;
        case '÷':
            display.innerHTML += e.target.innerHTML;
            equation += '/';
            break;
        case '±':
            let output = display.innerHTML;
            if (output.charAt(0) == '-') {
                output = output.substring(1);
            } else {
                output = '-' + output;
            }
            display.innerHTML = output;

            if (equation.toString().charAt(0) == '-') {
                equation = equation.toString().substring(1);
            } else {
                equation = '-' + equation;
            }
            break;
        default: 
            if (display.innerHTML == 0) {
                display.innerHTML = e.target.innerHTML;
            } else {
                display.innerHTML += e.target.innerHTML;
            }
            equation += e.target.innerHTML;
            console.log(e.target.innerHTML);
    }
    // if (display.innerHTML.length >= 6) {
    //     display.style.fontSize = '35px';
    // }

    // Switch-case (another way to write if-statements)
    let length = display.innerHTML.length;
    switch (true) {
        case length >= 6 && length <= 11:
            display.style.fontSize = 'large';
            break; // Breaks out of the code and stops running the switch
        case length >= 12 && length <= 17:
            display.style.fontSize = 'small';
            break;
        case length >= 18 && length <= 23:
            display.style.fontSize = 'smallest';
            break;
        case length >= 24:
            buttons.forEach((button) => {
                // If the text is not not a number (if it is a number)
                if (!isNaN(button.innerHTML)) {
                    button.disabled = true;
                    // button.childNodes.forEach((child) => {
                    //     console.log(child);
                    //     child.removeAttribute('style');
                    // });
                    button.style.cursor = 'not-allowed';
                }
            });
            break;
        // If none of the above are true, do default
        default:
            console.log(display.innerHTML.length);
    }

    // if (display.innerHTML.length >= 18) {
    //     display.style.fontSize = 'small';
    // }

    // if (display.innerHTML.length >= 24) {
    //     buttons.forEach((button) => {
    //         // If the text is not not a number (if it is a number)
    //         if (!isNaN(button.innerHTML)) {
    //             button.disabled = true;
    //             button.style.cursor = 'not-allowed';
    //         }
    //     });
    // }

    // This is the equivalent of the switch-case above
    // if (display.innerHTML.length == 6) {
    //     display.style.fontSize = 'large';
    // } else if (display.innerHTML.length == 12) {
    //     display.style.fontSize = 'small';
    // } else if (display.innerHTML.length == 18) {
    //     display.style.fontSize = 'smallest';
    // }

}