# Types of Linked Lists

## Singly Linked List

Talked about yesterday, a singly linked list is the simplest kind of linked lists. It takes up less space in memory because each node has only one address to the next node, like in the image below.

![](Images/Singly-Linked-List.png)

## Doubly Linked List

A doubly linked list has nodes with addresses to both the previous and the next node, like in the image below, and therefore takes up more memory. But doubly linked lists are good if you want to be able to move both up and down in the list.

![](Images/Doubly-Linked-List.webp)

## Circular Linked List

A circular linked list is like a singly or doubly linked list with the first node, the "head", and the last node, the "tail", connected.

In singly or doubly linked lists, we can find the start and end of a list by just checking if the links are null. But for circular linked lists, more complex code is needed to explicitly check for start and end nodes in certain applications.

Circular linked lists would be used for lists you need to cycle through continuously.

The image below is an example of a singly circular linked list:

![](Images/Circular-Linked-List.png)