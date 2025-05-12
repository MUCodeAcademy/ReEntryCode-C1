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

1. This is a function that loops through an array and checks if any element matches the given target.

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

  Answer: O(n). It has to loop through the array and check all the elements, so if you increase the array size, that means it linearly increases the time it takes.

2. This is a function that goes to the index of an array and returns it.

  ```js
  function getFirstElement(array) {
    return array[0];
  }
  ```

  Answer: O(1). Regardless of the array size, it's just going to take one operation to return that specific index.

3. This is a function that logs every pair of elements in an array

  ```js
  function printAllPairs(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j]);
      }
    }
  }
  ```

  Answer: O(n^2). It iterates over the array twice, so if you increase the array size, it will increase the time it takes quadratically.

4. This is a function that returns every number in an array starting at n.

  ```js
  function recursive(n) {
    if (n <= 1) {
      return n;
    }
    return recursive(n - 1) + recursive(n - 2);
  }
  ```

  Answer: O(2^n). Each function call results in two more calls which makes it exponential.

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

  Answer: O(log n). Every loop it divides the array in half, so it gets more efficient as the array size increases.
