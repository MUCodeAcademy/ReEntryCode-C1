## Inserting at the start

To insert a node at the start/beginning/front of a Linked List, we need to:

- Make the first node of the linked list point to the new node
- Remove the head from the original first node of the linked list
- Make the new node as the head of the linked list.

```js
function push(newData) {
    // 1 & 2: Create the Node & Put in the data

    // 3. Make next of newNode point to head

    // 4. Move the head to point to new Node

}
```

Time complexity:

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
 
    // 2. Create the Node & 3. Put in the data
 
    // 4. Make next of new Node as next of prevNode
 
    // 5. make next of prevNode as newNode
}
```

Time complexity:

## Inserting at the end

To insert a node at the end of a Linked List, we need to:

- Go to the last node of the Linked List
- Change the next pointer of last node from null to the new node
- Make the next pointer of new node as null to show the end of Linked List

```js
function append(newData) {
    // 1. Create the Node 2. Put in the data
 
    // 3. If the Linked List is empty, then make the new node as head

    // 4. This new node is going to be the last node, so make the next one null
 
    // 5. Else traverse till the last node
 
    // 6. Change the next of last node

}
```

Time complexity: