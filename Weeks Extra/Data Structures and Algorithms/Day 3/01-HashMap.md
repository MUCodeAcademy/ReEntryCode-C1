# Maps

A hash map, or a hash table, or just a map, is an object that holds key-value pairs and remembers the original order of the keys. They are efficient for using insertion, deletion, and lookup operations.

Some components of a hash map:

- Key-Value Pairing: Each value in the hash map is associated with a unique key.
- Fast Access: Provides average-case constant time complexity, O(1), for search, insert, and delete operations.
- Hash Function: A function that converts a key into an index in the array, ensuring quick data retrieval.

```js
const fruitMap = new Map();

// Adding key-value pairs
fruitMap.set('apple', 5);
fruitMap.set('banana', 10);
fruitMap.set('cherry', 20);
fruitMap.set('object', { username: "Luce" });

// You can put whatever you want in the keys or values
fruitMap.set(functionName, 10);

// Accessing a value
console.log(fruitMap.get('apple')); // Outputs: 5

// Deleting a key-value pair
fruitMap.delete('banana');

// Checking to see if a key exists
console.log(fruitMap.has('cherry')); // Outputs: true
console.log(fruitMap.has('banana')); // Outputs: false (since it was deleted)

// Check the size of the map
console.log(fruitMap.size); // Outputs: 2 (since 'banana' was deleted)

// Returns the keys in the order they're in
console.log(fruitMap.keys()); // Output: 'apple', 'cherry', 'object'

// Returns the values in the order they're in
console.log(fruitMap.values()); // Outputs: 5, 10, { username: "Luce" }

// Returns keys and values in the order
console.log(fruitMap.entries()); // Outputs: ['apple', 5], ['cherry', 20], ['object', { username: "Luce" }]

// Replacing the cherry value
fruitMap.set('cherry', 40);
```

As usual, we use these a bit differently in React compared to regular JavaScript

```js
// If you want to put the map in state
const [state, setState] = useState(new Map());

// Adding to that state
setState(prevState => new Map(prevState).set("orange", 30));

// The code below does not work, since the delete method returns a boolean value, and not the modified map
setState(prevState => new Map(prevState).delete(key));

// Correctly deleting from that state
setState(prevState => {
  const newMap = new Map(prevState);
  newMap.delete(key);
  return newMap;
});
```

## When to use

Objects:
- When you need simple key-value pairs with string keys.
- When you need to utilize the JSON files or structures.
- For small datasets where performance differences are not noticeable.

Maps:
- When you need keys that are not strings (e.g., objects, functions).
- When you need to know the insertion order of the keys.
- When working with large datasets or performing frequent additions and deletions of key-value pairs.
- When you need the additional methods and properties that Map provides (like has, get, etc.).