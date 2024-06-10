# Bubble Sort Optimized

Technically, the previous sorting algorithm is an unoptimized solution. For instance, take this array:

`[4, 3, 5, 6, 7]`

During the first loop it will swap the first two numbers to make it look like this:

`[3, 4, 5, 6, 7]`

It's already sorted after the first loop, but it will still continue looping and attempt to sort the rest of the array. What we need to do is check to see if it's actually swapping elements or not. If it is, we can continue the loop, otherwise, we stop the loop. If it goes through the array once without swapping any values, then the array must be sorted, and we can tell it to stop.

```js
function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }

        // If no elements were swapped in the inner loop, that means the array is sorted
        if (!isSwapped) 
            break;
    }

    return array;
}

const sortedArray = bubbleSort([45, 23, 3, 5346, 5, 356, 243, 35]);
console.log(sortedArray);
```