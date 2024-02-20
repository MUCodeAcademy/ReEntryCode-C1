//! Write the following functions:

// -----------------------------------------------------------------
//! Pass a number into a function that will return the absolute value of that number
//! (absolute value of -1 is 1 and absolute value of 1 is 1)

// -----------------------------------------------------------------
//! Make a function called pow that accepts arguments x and y and returns the value of x to the y power

// -----------------------------------------------------------------
//! Write a function that checks to see if the word as an argument is a palindrome (case insensitive) (toLowerCase() method)
//! and log the result to the console.

// Think about how you can reverse a word to see if it's a palindrome using these methods:

// .split method splits a string into an array of substrings
// .split takes an optional argument for a separator. if (" ") is used, the string is split between words.
// if no argument is given, it returns an array with the original string.

// examples: text = "How are you doing today?"
//          const myArray = text.split("") -> "H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?"
//          const myArray = text.split(" ") -> "How are you doing today?"
//          const myArray = text.split() -> "How are you doing today?"
//          const myArray = text.split("o") -> "H,w are y,u d,ing t,day?"

// .reverse method reverses the elements in an array (remember, .split returns an array)

// example: array = ["h", "e", "l", "l", "o"]
//          arrayReverse = array.reverse(); -> ["o", "l", "l", "e", "h"]

// .join joins an array and returns it a string
// .join takes an argument for a separator. If no argument is specified, a comma is used.

// examples: array = ["h", "e", "l", "l", "o"]
//          arrayJoin = array.join(); -> "h,e,l,l,o";
//          arrayJoin = array.join(""); -> "hello";

// -----------------------------------------------------------------
//! Write a function that accepts an array of banned words and an array of words.
//! If any of the banned words appear in the array of words (case sensitive),
//! replace them with "REDACTED. Do this without any prototypical methods.

// -----------------------------------------------------------------
//! Write a function to see if a pizza can be split evenly amongst a group of people.
//! The function should take two arguments: the number of people present, and the number of slices of the pizza.
//!   - If it can be split evenly log the result
//!   - If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.

// -----------------------------------------------------------------
//! Write a function to see if a triangle is a right triangle based off
//! whether or not square of the longest side is equal to the sum of the squares of the other sides.

// -----------------------------------------------------------------
//! Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
//! Supply the function with the amount of damage each of the monsters do (in array format) and
//! then the number of health the warrior has.
//!   - If the warrior doesn't have enough health to take all of the attacks they are unable to survive
//!   - If they are able to take all of the attacks, they are able to survive.

//? Example of monster damage:
//? [1, 3, 2, 8, 5];
//? Warrior health:
//? 10;
//? Since 1+3+2+8+5 = 19 and 10-19 < 0 they could not survive