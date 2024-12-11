// FIZZBUZZ

// Run through all the numbers from 1-100
// Log the number and "FizzBuzz" if the number is divisible by 3 and 5
// Log the number and "Fizz" if the number is divisible by 3
// Log the number and "Buzz" if the number is divisible by 5
// Log the number if none of the above conditions are true

for (let i = 1; i <= 100; i++) {
    // Divides i by 3, and checks to see if it's cleanly divisible
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FizzBuzz");
    } else if (i % 3 == 0) {
        console.log(i, "Fizz");
    } else if (i % 5 == 0) {
        console.log(i, "Buzz");
    } else {
        console.log(i);
    }
}

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log(i, "Fizz");
//     }
//     if (i % 5 == 0) {
//         console.log(i, "Buzz");
//     }
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, "FizzBuzz");
//     }
// }