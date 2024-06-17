/*

1. Display a singly linked list.
2. Allow users to add nodes to the list.

*/

import { useState, useEffect } from "react";

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListClass {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        // Start at the beginning, and loop until we get to the end so we can add the newNode there
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    delete(data) {
        // If data is the head
        if (data == this.head.data) {
            // Set the head of the linked list to the next node in the list
            this.head = this.head.next;
            return;
        }

        // Loop through the list and check if the data is the current node
        let current = this.head;
        // As long as there is a next node, and its data is not the one we want to delete
        while (current.next !== null && current.next.data !== data) {
            // Go to the next node
            current = current.next;
        }

        // If the node we want to delete was found, skip it
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    reverse() {
        // Keep track of the previous node, next node, and current node
        let prev = null;
        let current = this.head;
        let next = null;

        // As long as there are still elements in the list...
        while (current !== null) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the current node's pointer
            prev = current; // Move the previous pointer forward
            current = next; // Go to the next mode
        }

        this.head = prev; // Update the head to the new first node
    }

    toArray() {
        let array = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}

function LinkedList() {
    const [list, setList] = useState(new LinkedListClass());
    const [input, setInput] = useState('');
    const [fake, setFake] = useState(0);

    function addToList() {
        list.add(input);
        // Using a state to trigger a re-render
        setFake(fake => fake + 1);
        setInput('');
    }

    function deleteFromList(data) {
        list.delete(data);
        setFake(fake => fake + 1);
    }

    function reverseList() {
        list.reverse();
        setFake(fake => fake + 1);
    }

    // Function that merges two sorted lists into one sorted list
    // Example:
    // list1 = [1, 2, 4]; list2 = [1, 3, 4];
    // result = [1, 1, 2, 3, 4, 4]

    /*
        1. Create a starting point for the merged list
        2. Track the position of list 1 and 2
        3. Compare the nodes at each position, and append the smaller one to the merged list
        4. Repeat that until you go through both lists
        5. Return the merged list
    */

    function mergeLists(list1, list2) {
        // Create a new node to be the starting point of the merged list
        let mergedList = new Node(0);
        let current = mergedList; // start at the beginning

        // Variables to start at the head of each list
        let head1 = list1.head;
        let head2 = list2.head;

        // Go through both lists and append the smaller node to the merged list
        while (head1 !== null && head2 !== null) {
            if (head1.data <= head2.data) {
                // Put that in the mergedList
                current.next = head1;
                // Move to the next node
                head1 = head1.next;
            } else {
                current.next = head2;
                head2 = head2.next;
            }
            // Move to the next spot in our merged list
            current = current.next;
        }

        // Append any remaining nodes from list1 or list2
        // If one of the lists is looped through sooner than the other, add the nodes that are left over
        if (head1 !== null) {
            current.next = head1;
        } else {
            current.next = head2;
        }

        // Return the head of the mergedList
        return mergedList.next;
    }
    
    const [displayMerged, setDisplayMerged] = useState(new LinkedListClass());
    useEffect(() => {
        let list1 = new LinkedListClass();
        list1.add(1);
        list1.add(2);
        list1.add(4);

        let list2 = new LinkedListClass();
        list2.add(1);
        list2.add(3);
        list2.add(4);

        displayMerged.head = mergeLists(list1, list2);
        setDisplayMerged(displayMerged);
        setFake(fake => fake + 1);
        console.log(displayMerged.toArray());

        // console.log(list);
    }, []);

    return (
        <div>
            <input onChange={(e) => setInput(e.target.value)} value={input} placeholder="New Item" />
            <button onClick={addToList}>Add</button>
            <button onClick={reverseList}>Reverse</button>
            <div>
                {displayMerged.toArray().map((item, index) => (
                    <p style={{ display: "inline-block" }}>{item}</p>
                ))}
                {list.toArray().map((item, index) => (
                    <p style={{ display: "inline-block" }}>
                        <button onClick={() => deleteFromList(item)}>Delete</button>
                        {item}&rarr; 
                    </p>
                ))}
                null
            </div>
        </div>
    )
}

export default LinkedList;