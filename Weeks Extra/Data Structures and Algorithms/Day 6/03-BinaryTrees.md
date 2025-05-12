# Binary Trees

A Binary Tree is a type of tree data structure where each node can have a maximum of two child nodes, a left child node and a right child node.

This restriction, that a node can have a maximum of two child nodes, gives us many benefits:

- Algorithms like traversing, searching, insertion and deletion become easier to understand, to implement, and run faster.
- Keeping data sorted in a Binary Search Tree (BST) makes searching very efficient.
- Balancing trees is easier to do with a limited number of child nodes, using an AVL Binary Tree for example.
- Binary Trees can be represented as arrays, making the tree more memory efficient.

Benefits of Binary Trees over Arrays and Linked Lists:

- Arrays are fast when you want to access an element directly, like element number 700 in an array of 1000 elements. But inserting and deleting elements require other elements to shift to make place for the new element, or to take the deleted elements place, and that is time consuming.
- Linked Lists are fast when inserting or deleting nodes, no memory shifting needed, but to access an element inside the list, the list must be traversed, and that takes time.
- Binary Trees, such as Binary Search Trees and AVL Trees, are great compared to Arrays and Linked Lists because they are BOTH fast at accessing a node, AND fast when it comes to deleting or inserting a node, with no shifts in memory needed.

## Types

A balanced Binary Tree has, at most, 1 in difference between its left and right subtree heights, for each node in the tree.

A complete Binary Tree has all levels full of nodes, except the last level, which is can also be full, or filled from left to right. The properties of a complete Binary Tree means it is also balanced.

A full Binary Tree is a kind of tree where each node has either 0 or 2 child nodes.

A perfect Binary Tree has all leaf nodes on the same level, which means that all levels are full of nodes, and all internal nodes have two child nodes.The properties of a perfect Binary Tree means it is also full, balanced, and complete.

## Implementation

```js
class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
       let newNode = new Node(value);
       if (this.root == null) {
            this.root = newNode;
       } else {
            this.insertNode(this.root, newNode);
       }
    }

    insertNode(node, newNode) {
        // Decide whether to traverse left or right in the tree
        if (newNode.data < node.data) {
            // If it's less, put the newNode on the left
            if (node.left == null) {
                // If the left child of the current node is null, place the new node here
                node.left = newNode;
            } else {
                // If it's not null, run the function again to try and find a new position for it
                this.insertNode(node.left, newNode);
            }
        } else {
            // Do the same thing for the right side if it doesn't go on the left
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

let tree = new BinaryTree();
tree.insert(4);
tree.insert(2);
tree.insert(6);

/*
Tree should look like this:
    4
  /   \
2       6

*/
```