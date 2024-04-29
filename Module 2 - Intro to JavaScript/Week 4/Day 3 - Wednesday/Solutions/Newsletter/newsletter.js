'use strict';
function confirm() {
    // Get their email from the input

    // If the input value is empty...
    // Give them an error
    
    // If the input value does not follow the @email.com pattern...
    // This is called regex (regular expression), which is a pattern tester
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userEmail)) {
        alert("invalid");
    }

    // Give them an error

    // If the input is not empty...
    // Show them a confirmation message with their email
}