# Definitions

## Variables and Data Types

**Variable:** A name for a particular set of data that is stored in memory.

**Data Types:** The classification of data items. JavaScript has several data types, including:

 - **String:** Represents textual data. ("words")
 - **Integer:** Represents numbers without decimal points. (1)
 - **Float/Double:** Represents numbers that have decimal points. (1.23)
 - **Boolean:** Represents a logical entity with two values: true and false. (true)
 - **Undefined:** Represents a variable that has been declared but not assigned a value. (let x;)
 - **Null:** Represents the intentional absence of any value. (let x = null;)
 - **Object:** Collections of properties, where each property is a key-value pair. (let x = {};)
 - **Array:** A global object used to construct arrays; a high-level, list-like object. (let x = [];)

## If-Statements

**If-statement:** A control structure that executes a block of code if a specified condition is true.

**Else:** An optional clause in an if-statement that executes a block of code if the condition is false.

**Else if:** An additional condition in an if-statement that checks another condition if the previous condition is false.

```js
const x = 5;
if (x <= 10) {
    console.log("x is less than or equal to 10!");
} else if (x > 10 && x <= 20) {
    console.log("x is greater than 10 but less than or equal to 20");
} else {
    console.log("x is greater than 20");
}
```

## Loops

**For Loop:** A control flow statement for specifying iteration, which allows code to be executed repeatedly.

 ```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
 ```

**While Loop:** A control flow statement that executes a block of code as long as a specified condition is true.

```js
let x = 1;
while (x < 10) {
    x++;
    console.log(x);
}
```

**Do-While Loop:** Similar to the while loop, but the block of code is executed at least once before the condition is tested.

```js
let x = 1;
do {
    x++;
    console.log(x);
} while (x < 10);
```

**Break:** Terminates the current loop and transfers program control to the statement after the terminated loop.
 
 ```js
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 3) {
        break; // this will end the loop
    }
}
 ```

**Continue:** Skips the rest of the code inside the loop for the current iteration and continues with the next iteration of the loop.

 ```js
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // will not run this code
}
 ```

## Functions

**Function:** A block of code designed to perform a particular task. It is executed when "something" calls it.

**Parameters:** Variables listed as part of the function definition (inside the parenthesis when you create the function).

 ```js
function add(parameter1, parameter2) {
    // code
}
 ```

**Arguments:** Values passed to the function when it is called (inside the parenthesis when you call the function).

 ```js
add(1, 2);
 ```

**Return Value:** The value a function returns to the calling script or function when it completes its task.

 ```js
function add(parameter1, parameter2) {
    let result = parameter1 + parameter2;
    return result;
}
 ```

**Anonymous Function:** A function without a name. Often not accessible after its initial creation.

 ```js
() => {}
 ```

**Callback Function:** A function passed into another function as an argument, which is then called inside the outer function.