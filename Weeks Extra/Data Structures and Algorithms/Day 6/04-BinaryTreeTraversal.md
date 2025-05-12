# Traversal

Going through a Tree by visiting every node, one node at a time, is called traversal.

Since Arrays and Linked Lists are linear data structures, there is only one obvious way to traverse these: start at the first element, or node, and continue to visit the next until you have visited them all.

But since a Tree can branch out in different directions (non-linear), there are different ways of traversing Trees.

There are two main categories of Tree traversal methods:

- Breadth First Search (BFS) is when the nodes on the same level are visited before going to the next level in the tree. This means that the tree is explored in a more sideways direction.

- Depth First Search (DFS) is when the traversal moves down the tree all the way to the leaf nodes, exploring the tree branch by branch in a downwards direction.

## Pre-order Traversal

Pre-order Traversal is a type of Depth First Search, where each node is visited in a certain order.

Pre-order Traversal is done by visiting the root node first, then recursively do a traversal of the left subtree, then a pre-order traversal of the right subtree.

```js
preOrderTraversal(node = this.root) {
    if (node !== null) {
        console.log(node.data); // Visit the root node
        this.preOrderTraversal(node.left); // Visit the left tree
        this.preOrderTraversal(node.right); // Visit the right tree
    }
}
```

## In-order Traversal

In-order traversal means visiting the left branch, then the current node, and finally the right branch. This will result in visiting nodes in ascending order for a binary search tree.

```js
inorderTraversal(node = this.root) {
    if (node !== null) {
        this.inorderTraversal(node.left); // Visit the left tree
        console.log(node.data); // Visit the first left node
        this.inorderTraversal(node.right); // visit the right tree
    }
}
```

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

Time complexity: 

Best Case: O(1) - Happens when the first item in the data set is the value we're searching for.
On average: O(log n) - Most of the time, it will be O(log n)
Worst Case: O(n) - Happens when you have to search through the entire data set