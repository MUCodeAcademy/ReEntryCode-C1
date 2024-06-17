## Inserting at the start

To insert a node at the start/beginning/front of a Linked List, we need to:

- Make the first node of the linked list point to the new node
- Remove the head from the original first node of the linked list
- Make the new node as the head of the linked list.

```js
function push(newData) {
    // 1 & 2: Create the Node & Put in the data
    let newNode = new Node();
    newNode.data = newData;

    // 3. Make next of newNode point to head
    newNode.next = head;

    // 4. Move the head to point to new Node
    head = newNode;
}
```

Time complexity: O(1)

## Inserting after a node

To insert a node after a given node in a Linked List, we need to:

- Check if the given node exists or not. 
- If it does not exist, stop running this code.
- If the given node exists, create the node with the data
- Change the next pointer of given node to the new node
- Now shift the original next pointer of given node to the next pointer of new node

```js
function insertAfter(prevNode, newData) { 
    // 1. Check if the given Node is null
    if (prevNode == null) {
        return;
    }
 
    // 2. Create the Node & 3. Put in the data
    let newNode = new Node();
    newNode.data = newData;
 
    // 4. Make next of new Node as next of prevNode
    newNode.next = prevNode.next;
 
    // 5. make next of prevNode as newNode
    prevNode.next = newNode;
}
```

Time complexity: O(1)

## Inserting at the end

To insert a node at the end of a Linked List, we need to:

- Go to the last node of the Linked List
- Change the next pointer of last node from null to the new node
- Make the next pointer of new node as null to show the end of Linked List

```js
function append(newData) {
    // 1. Create the Node 2. Put in the data
    let newNode = new Node();
    newNode.data = newData;
 
    // 3. If the Linked List is empty, then make the new node as head
    if (head == null) {
        head = newNode;
        return;
    }

    // 4. This new node is going to be the last node, so make the next one null
    newNode.next = null;
 
    // 5. Else traverse till the last node
    // We have to get the second to last node to point to the new one we made
    
    // The lastNode is going to be the head node
    let lastNode = head;
    // While there are still nodes in the list
    while (lastNode.next != null) {
        lastNode = lastNode.next;
    }

    // 6. Change the next of last node
    lastNode.next = newNode;
}
```

Time complexity: O(n)