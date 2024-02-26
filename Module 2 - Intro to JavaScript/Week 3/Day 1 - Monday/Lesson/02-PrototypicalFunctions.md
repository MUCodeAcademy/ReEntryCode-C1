# Prototypical Functions

This is a list of the most common prototypical functions in JavaScript. There are a ton more than the ones listed, but you'll use these the most.

## Strings

**String.charAt()**: Returns the character at a specific index.

**String.includes()**: Determines whether the string contains a string inside it.

**String.indexOf()**: Returns the index of the first occurence of the specified value.

**String.toLowerCase() / toUpperCase()**: Returns the string converted to lower / upper case.

## Arrays

**Array.push()**: Adds one or more elements to the end of an array.

**Array.pop()**: Removes the last element from the array and returns that element.

**Array.shift()**: Removes the first element from the array and returns that removed element.

**Array.map()**: Creates a new array populated with the results of calling a function on every element in the array.

```js
arrayName.map((item) => {
    // Code you want to execute on the array.
});
```

**Array.filter()**: Creates a copy of the array filtered down to just the elements from the given array that pass the test implemented by the provided function.

**Array.forEeach()**: Executes a function once for each element in the array.

**Array.slice()**: Returns a copy of a portion of an array into a new array.
 
**Array.sort()**: Sorts the elements in an array and returns the sorted array.

## Document

**document.getElementById()**: Retrieves an element by its ID.

**document.getElementsByClassName()**: Retrieves a set of elements by their class name.

**document.getElementsByTagName()**: Retrieves a set of elements by their tag name.

**document.createElement()**: Creates a new element with the given tag name.

**document.appendChild()**: Adds the new element to the end of the specified element.

**document.addEventListener()**: Attaches an event listener to the document with the specified event and function.

```js
elementName.addEventListener("click", () => {
    // Code you want to run when they click on the element
});
```