# Lesson: JavaScript Arrays

## Introduction to JavaScript Arrays

Arrays in JavaScript are used to store multiple values in a single variable. They are one of the most fundamental and frequently used data structures in programming. For React developers, understanding arrays is important to manage lists of elements in the component's state, which dynamically control the UI rendering.

## What is an Array?

An array is a single variable (or state) that is used to store different elements. It is often used when we want to store a list of elements and access them by a single variable. Unlike other programming languages, JavaScript arrays are dynamic and can hold items of different data types.

```javascript
const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
```

## Common Array Methods

`map`
Transforms the elements of an array using a function and returns a new array.

```js
let lengths = fruits.map((item, index) => {
  return index;
}); 
// will return [0, 1, 2]
```

`forEach`
Runs a function once for each item in an array. Unlike map which returns a new array, forEach does not return anything and instead modifies the original array.

```js
let fruitsLowerCase = fruits.forEach((item, index) => {
    item.toLowerCase();
});
// will NOT return anything
// however, fruitsLowerCase will be ["apple", "banana", "cherry"]
```

`filter`
Creates a new array with all elements that pass the test implemented by the provided function.

```js
let longFruits = fruits.filter((item, index) => {
  return item.length > 5;
}); 
// will return ["Banana", "Cherry"]
```

`reduce`
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
let totalLength = fruits.reduce((sum, item) => {
  return sum + item.length;
}, 0); 
// will return 17
// 5 + 6 = 11
// 11 + 6 = 17
```

## Practice

1. Create a React component that renders an array of images.
2. Add a button that allows the user to delete that image.
3. Add a button that allows the user to add a new image.