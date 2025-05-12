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
         if (newNode.data < node.data) {
             if (node.left == null) {
                 node.left = newNode;
             } else {
                 this.insertNode(node.left, newNode);
             }
         } else {
             if (node.right == null) {
                 node.right = newNode;
             } else {
                 this.insertNode(node.right, newNode);
             }
         }
     }
     
    //  Traversal
    traverse(node = this.root) {
        if (node !== null) {
            this.traverse(node.left);
            console.log(node.data);
            this.traverse(node.right);
        }
    }

    search(value, node = this.root) {
        // If the root node doesn't exist, then there's no data in the tree
        if (node == null) {
            return null;
        }

        // Best case: if the root node is the one we're searching for
        if (node.data == value) {
            return node;
        }

        // Determine whether to search in the left or right side of the tree
        if (value < node.data) {
            // If the value we're looking for is less than the root node's value, we know it has to be in the left
            return this.search(value, node.left); // Search in the left side
        } else {
            return this.search(value, node.right); // Search in the right side
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let tree = new BinaryTree();
tree.insert(3);
tree.insert(1);
tree.insert(2);
tree.insert(4);
tree.insert(5);
tree.insert(6);
console.log(tree.root.right.right);
tree.traverse();
console.log(tree.search(5));