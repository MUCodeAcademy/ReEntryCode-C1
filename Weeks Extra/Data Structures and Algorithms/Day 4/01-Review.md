# DSA Week 1 Review

## Data Structures

1. What are data structures? Give 3 examples.

- They are different ways to store data

Examples:

- Arrays
- Lists/Sets
- Stacks/Queries
- Maps
- Trees/Graphs
- JSON

2. How would you access the number 6 in this 2D array?

```js
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

```js
array[1][2]
```

3. What are some differences between a map and a regular object?

- Maps are more efficient at looking up, inserting, and deleting data.
- Maps maintain the order of their elements.
- Maps can store keys of any type (strings, functions, arrays).

4. How would you access the value of 'book' in this map?

```js
const items = new Map();

items.set('book', 5);
```

```js
// Gets the number 5
items.get('book');

// Gets all the values
item.values();
```

## Algorithms

1. What is an algorithm?

- Step-by-step procedures for solving a problem.

2. Explain how the code for the bubble sort algorithm sorts an array.

- Loops through an array and compares the current value with the next one. If the current value is greater than the next, swap the two items. If it's less than the current value, don't do anything. Continue that until its sorted.

3. Explain how the code for the linear search algorithm searches for an element.

- Loops through an array, compares the current element to the one it's looking for. If those are the same, return that index, otherwise continue the loop.

4. What is time complexity and Big O Notation?

- Time complexity: How long it takes to run.
- Big O Notation: Representation of the time complexity. Looks like this: O(n)

5. What's the time complexity of bubble sort and linear search?

- Bubble sort: O(n^2) because it's a nested loop, so it increases quadratically.
- In the worst case, each element needs to be compared to each other element.
- Linear search: O(n) because it's a single loop, so it increases linearly with the amount of items you give it.
- In the worst case, each element needs to be checked once.

6. Why would bubble sort and linear search be bad to use if you had a large data set?

- The more items you are using, the longer it's going to take.