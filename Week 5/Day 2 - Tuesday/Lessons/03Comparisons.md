# Comparisons

The backbone of most code is comparing one variable to another. For example, if you have a timer and you want it to countdown from 10 and stop at 0. Well, you need to know if the timer is currently greater than, less than, or equal to 0. If it's equal to 0, then we know we need to stop it.

## Generic Comparisons

Take a look at these comparisons, and guess to see if they would be true or false.

```js
let three = 3;
let two = 2;

// Greater than
three > two
two > two

// Greater than OR equal to
three >= two
two >= two

// Less than OR equal to
three <= two
two <= two

// Equal to (double equals)
three == two
two == two
// What would happen if we did this?
three = two

// NOT equal to
three != two
two != two

// Strict equals is ===, meaning that they need to be the same value AND the same type
let threeString = "3";

three == threeString
three === threeString

// Multiple comparisons in one
// && AND
// || OR
3 > 2 && 2 == 2
3 > 2 || 2 == 2

// If/Else Statements

if (three === threeString) {
    console.log("Both are equal");
} else if (3 > 2) {
    console.log("3 > 2");
} else {
    console.log("This shouldn't happen.");
}
```