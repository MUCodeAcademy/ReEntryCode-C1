// Logic Practice

// 1. Positive or Negative
// Create a program that checks if a number stored in a variable is positive or negative. 
// Log "The number is positive" if it's greater than zero, otherwise log "The number is negative."

const integer = 14;

if (integer > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

// 2. Minimum Age for Driving
// Write a program that stores a user's age in a variable, and logs "Can Drive" if they are 16 or older.
// If they are under 16, log "Cannot drive."

const age = 17;

if (age >= 16) {
    console.log("Can Drive");
} else {
    console.log("Cannot drive");
}

// 3. School Grade Levels
// Create a program that stores a student's grade in a variable and categorizes school levels based on that variable.
// Use the following categories: "Elementary" for grades 1-5, "Middle" for grades 6-8, and "High" for grades 9-12. 
// Log the school level according to their grade.

const education = 4;

if (education <= 5) {
    console.log("Elementary");
} else if (education <= 8 && education >= 6) {
    console.log("Middle");
} else {
    console.log("High");
}

// 4. Basic Discount System
// A shop offers a discount for purchases over $50. 
// Write a program that stores the total purchase amount in a variable. 
// If the amount is over $50, calculate the discount and log it. Otherwise, log "No discount available."

const discount = .25;
const amount = 60;

if (amount >= 50) {
    console.log("Your purchase added with the discount is: " + (amount - (amount * discount)));
} else {
    console.log("No discount available.");
}