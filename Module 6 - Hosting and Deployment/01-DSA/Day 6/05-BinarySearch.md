# Binary Search

This works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed the possible locations to just one.

```js
search(node, data) {
    if (node === null) {
        return null; // Return null if the node is not found
    }

    // Best case: the data we're looking for is the first node in the tree
    if (value === node.data) {
        return node; // Return the node if the search value matches the node's value
    }

    if (data < node.data) {
        return this.search(node.left, value); // Search in the left side
    } else {
        return this.search(node.right, value); // Search in the right side
    }
}
```