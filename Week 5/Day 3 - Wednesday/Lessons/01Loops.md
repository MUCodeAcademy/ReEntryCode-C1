# Loops

Sometimes we want our code to run multiple times. For example, we want to keep prompting a user to guess a number until they get it right. For this, we would want to use a `loop`. There are a few different ways you can write loops.

## For loops

`For` loops are the most common type of loop. Typically you will use this one when you know in advance how many iterations you need.

A for loop needs three options:

1. The counter variable (usually called 'i')
2. The condition to keep running the loop
3. Increment or decrement

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

This loop will start at 0, increase by 1 each loop, and will log the current value of 'i' to the console until it reaches 10.

A common way to use a for loop is to iterate over an array:

```js
let a = [4, 7, 5, 9, 10];
for (let i = 0; i < a.length; i++) {
    console.log(a[i], i);
}
```

What will this output to the console?

- 

## While loop

A `while` loop is usually used when the number of iterations is not known beforehand, and you want to continue looping until a condition becomes false.

```js
let whileVariable = 10;
while (whileVariable > 0) {
    console.log(whileVariable);
    whileVariable--;
}
```

## Do...While loop

Similar to a while loop, except this loop __ALWAYS__ runs at least once.

```js
let whileVariable = 10;
do {
    console.log(whileVariable);
    whileVariable--;
} while (whileVariable > 10);
```

Because the condition check (the "while" part) is after the code to 'do' something, it will always run at least one time.