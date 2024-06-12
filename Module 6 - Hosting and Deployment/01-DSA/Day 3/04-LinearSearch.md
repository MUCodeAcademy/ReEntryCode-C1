# Linear Search

The linear search algorithm is one of the simplest and most straightforward searching algorithms. It sequentially checks each element of a list until it finds the target value or reaches the end of the list. While not the most efficient search algorithm for large datasets, it is easy to understand and implement, making it a good starting point for learning about searching algorithms.

Linear search is an algorithm that searches for an element in a list by checking each element one by one from the beginning to the end. What is its time complexity?

## Steps

- Start from the first element of the list.
- Compare the target value with the current element.
- If the current element matches the target value, return its index.
- If the current element does not match, move to the next element.
- Repeat steps 2-4 until the target value is found or the end of the list is reached.
- If the target value is not found, return a value indicating that the target is not in the list (commonly -1).

```js
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index of the target value
    }
  }
  return -1; // Return -1 if the target value is not found
}
```

Example Usage:

```js
const numbers = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(numbers, target);
console.log(result); // Outputs: 3 (index of the target value in the array)
```

Advantages: 

- Simple: Easy to implement.
- Versatile: Can be used on any list, regardless of if its sorted or not.

Disadvantages:
- Inefficient for large lists: O(n) time complexity, so performance descreases linearly with the size of the list.
- Not suitable for sorted lists: More efficient algorithms are available for sorted lists.