# Trees

The Tree data structure is similar to Linked Lists in that each node contains data and can be linked to other nodes.

Previously, we've talked about data structures like Arrays, Linked Lists, Stacks, and Queues. These are all linear structures, which means that each element follows directly after another in a sequence. Trees are a bit different - in a Tree, a single element can have multiple 'next' elements, allowing the data structure to branch out in various directions.

The data structure is called a "tree" because it looks like an upside-down tree.

![](Images/Tree.webp)

## Uses

- DOM Tree: The DOM that we've been working with the entire time in HTML is structured as a tree. Think about how you have elements as children of other elements, like in the picture above.
- Hierarchical Data: File systems, employee hierarchies, etc.
- Machine Learning: Used for decision making - modelling decisions and their possible consequences as a tree.
- Routing Tables: Used for routing data in network algorithms to find the shortest path.
- Games: Useful to make AI for games like chess to predict the outcome of different moves (chess, tic-tac-toe, basically every game).

## Vocabulary

- Root node: The first node
- Edge: A link connecting one node to another
- Node: Each piece of data in the tree
- Parent node: Nodes above other nodes
- Child node: Nodes below other nodes
- Leaf node: Nodes without links to other child nodes
- Tree height: Maximum number of edges from the root node to a leaf node
- Tree size: The total number of nodes

## Types of Trees

- Binary Trees: A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right children.

![](Images/Binary-Tree.png)

### Binary Search Trees (BSTs): 

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.
- There must be no duplicate nodes.

![](Images/BST.png)

- AVL Trees: A type of Binary Search Tree that self-balances so that for every node, the difference in height between the left and right subtrees is at most one. This balance is maintained through rotations when nodes are inserted or deleted.

![](Images/AVL-Tree.png)