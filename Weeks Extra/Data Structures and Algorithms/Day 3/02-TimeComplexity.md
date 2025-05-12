# DSA Complexity

In order to use algorithms effectively, we need to understand how we measure the time and space an algorithm needs to perform. Using an inefficient algorithm could cause our application to become increasingly slower as we build it. If we understand how algorithms run, we can choose the right algorithm for the job we need.

# Terms

Time complexity: measures the amount of time an algorithm takes to complete.

Space complexity: measures the amount of memory an algorithm uses.

Big O Notation: a representation of the worst case time or space complexity for an algorithm.

# Big O Notation

Big O Notation uses a capital letter `O` with parenthesis `O()`, with an expression inside the parenthesis to indicate how long the algorithm takes to run. The time it takes to run is usually shown with the letter n, which is the number of values in the data set the algorithm is working on.

Typically, O(n) would be said out loud as "O of n", O(1) would be "O of 1", and so on. Sometimes people will just say "O n" or "O one".

Examples:

**O(1)**: Constant time. The algorithm does not change depending on the size of the array. Looking up a specific element in an array like this `console.log(array[0])` is O(1) time complexity. This is because regardless of the size of the array, it requires one operation.

**O(n)**: Linear time. The algorithm grows linearly with the input size. Looping through an array is O(n), because as __n__ (the length of the array) gets larger, the more it has to loop through, which causes the algorithm to take longer.

**O(log<sub>n</sub>)**: Logarithmic time. An algorithm is logarithmic if it reduces the size of the input data in each step. Since the input size is reduced each time, the algorithm takes less time to complete.

**O(n<sup>2</sup>)**: Quadratic time. As the input increases, the time it takes an algorithm to complete increases quadractically (i.e. the square of the input size). So, if the input size is 1, the runtime is 1 step. If the size if 10, the runtime is 100 steps. If you see a nested loop, that's a good indicator that the algorithm is quadratic.

**O(2<sup>n</sup>)**: Exponential time. The time it takes the algorithm to complete doubles with each additional input. This is often seen with recursive functions.

Here is a potentially helpful graph and table for time complexity:

![timeComplexity](timeComplexity.jpg)

| Complexity   | Name  | Example Size (n=10)  | Example Size (n=100) |
| ------------- |:------------| :-----| :--- |
| O(1)      | Constant | 1 | 1 |
| O(n)     | Linear  | 3.32 | 6.64 |
| O(log<sub>n</sub>) | Logarithmic | 10 | 100 |
| O(n<sup>2</sup>)   | Quadratic  | 100 | 10,000
| O(2<sup>n</sup>)   | Exponential | 1,024 | 1.26 * 10^30