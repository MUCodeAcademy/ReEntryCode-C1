# 2D Arrays

A two-dimensional array, also known as a 2D array, is a collection of data elements arranged in a grid-like structure with rows and columns. Each element in the array is referred to as a cell and can be accessed by its row and column indices.

In JavaScript, there is no direct syntax for creating 2D arrays as with other commonly used programming languages like C, C++, and Java.

You can create two-dimensional arrays in JavaScript through jagged arrays — an array of arrays. For example, below is what a jagged array looks like:

```js
let myArray = [
[0, 1, 2, 3], 
[4, 5, 6, 7],
[8, 9]
];
```

Use cases:

- Allows for the efficient storage and manipulation of large amounts of data, such as in image or video processing, scientific simulations, and spreadsheet applications.
- Enables the use of matrix operations, such as matrix multiplication and transposition, which can simplify complex calculations and make code more readable.
- Can represent mathematical matrices in linear algebra and a wide range of data, such as graphs, maps, and tables.
- Commonly used in applications that involve data tables, image processing, and game development.

## Accessing

You can access the elements of a two-dimensional array using two indices, one for the row and one for the column. Suppose you have the following two-dimensional array:

```js
let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Jetr Jess', 28, 43, 'A'],
    ['Ben Jamin', 16, 51, 'B']
];
```

You can access it with this syntax: `arrayName[rowIndex][columnIndex]`

```js
console.log(MathScore[4][0]); // returns 'Ben Jamin'
console.log(MathScore[2][1]); // returns 5
console.log(MathScore[1][3]); // returns 'B'
console.log(MathScore[2][2]); // returns 24

// This will always give you the last element of the array
console.log(MathScore[MathScore.length-1][(MathScore[MathScore.length -1]).length - 1]); // returns 'B'

// In React:

const [state, setState] = useState([
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Jetr Jess', 28, 43, 'A'],
    ['Ben Jamin', 16, 51, 'B']
]);

setState(prevState => [...prevState, [item]]);
setState(prevState => [...prevState, ['Luce', 50, 10, 'F']]);

setState(prevState => {
    // Copy the array
    const newState = [...prevState];

    // Petr Chess is now Gary Chess
    newState[2][0] = "Gary Chess";

    return newState;
});
```
