/* 

Take the solution from 07-VowelsInString, and modify it to do this:

1. Count the occurrences of the vowels individually and return an object with those counts.

Example: "This is a string."

Output: {a: 1, e: 0, i: 3, o: 0, u: 0}

2. Also count the amount of consonants in the string and return that.

*/

function vowels() {
    const string = "This is a string";
    const x = "aeiouAEIOU";
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (x.includes(string[i])) {
           counter++; 
        }
    }

    console.log(counter);
}

vowels();