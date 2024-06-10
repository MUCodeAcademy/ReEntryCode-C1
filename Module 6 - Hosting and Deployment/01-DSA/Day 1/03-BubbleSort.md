# Bubble Sort

We'll be going over a few sorting algorithms, but one of the most common ones is "bubble sort". This sorts an array from the lowest value to the highest value. It loops through an array, and compare sthe current value with the next value. If the current value is greater than the next, swap the two items. It continues through the array until it reaches the last item.

w3schools has a good visualization of how bubble sort works: https://www.w3schools.com/dsa/dsa_algo_bubblesort.php

To make this work in code, we need two loops:
- One inner loop that goes through the array and compares the current value with the next value. If the current value is higher, swap them.
- One outer loop that keeps track of how many times the inner loop runs. The outer loop should run for as many items are in the array.

Here's what the algorithm looks like in JavaScript:

```js
function bubbleSort(array) {

    // Outer loop which makes our inner loop run for the length of the array
    for (let i = 0; i < array.length; i++) {

        // Inner loop that compares the current item to the next item 
        for (let j = 0; j < (array.length - i - 1); j++) {

            // Checking if the item at the current iteration is greater than the next iteration
            if (array[j] > array[j + 1]) {

                // If the condition is true, swap them
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    // Print the sorted array
    console.log(array);
}

// Unsorted array
let array = [234, 43, 55, 63, 5, 6, 235, 547];

// Pass this array to the bubbleSort function
bubbleSort(array);
```

Let's quickly unpack this line: `[array[j], array[j + 1]] = [array[j + 1], array[j]]`

This uses a feature called 'array destructuring' to swap the two values of the elements in the array.

Right side: `[array[j + 1], array[j]]`
- This part creates a new array where the first element is `array[j + 1]` and the second element is `array[j]`.
- Essentially, it's temporarily storing the values of these two array positions in reverse order.

Left side: `[array[j], array[j + 1]]`
- This part uses array destructuring to unpack values from the right side.
- `array[j]` is assigned the first element of the right-side array (which is originally `array[j + 1]`).
- `array[j + 1]` is assigned the second element of the right-side array (which is originally `array[j]`).

The result is the values of `array[j]` and `array[j + 1]` are swapped.

## Practice

Add a 'sort' button on the webpage that uses bubble sort to organize the list.