# Pratice

Take a look at these functions down below, and figure out which ones have which time complexity.

You will use each time complexity once.

| Complexity   | Name  | Example Size (n=10)  | Example Size (n=100) |
| ------------- |:------------| :-----| :--- |
| O(1)      | Constant | 1 | 1 |
| O(n)     | Linear  | 3.32 | 6.64 |
| O(log n) | Logarithmic | 10 | 100 |
| O(n^2)   | Quadratic  | 100 | 10,000
| O(2^n)   | Exponential | 1,024 | 1.26 * 10^30

1. This is a function that loops through an array and checks if any element matches the given targets.

  ```js
  function search(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
  ```

  Answer:

2. This is a function that goes to the index of an array and returns it.

  ```js
  function getFirstElement(array) {
    return array[0];
  }
  ```

Answer:

3. This is a function that log every pair of elements in an array

  ```js
  function printAllPairs(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j]);
      }
    }
  }
  ```

Answer:

4. This is a function that returns every number in an array starting at n.

  ```js
  function recursive(n) {
    if (n <= 1) {
      return n;
    }
    return recursive(n - 1) + recursive(n - 2);
  }
  ```

Answer:

5. This is an algorithm that searches for a specific element in an array.

  ```js
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  ```

Answer:
