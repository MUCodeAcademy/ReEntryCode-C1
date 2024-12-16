// Dynamic To-Do List
// Objective: Create a simple to-do list where tasks can be added programmatically to the DOM.

// Steps:
// 1. Initialize an array with a few to-do items created by you.
// 2. Use a loop to iterate over the array.
// 3. For each item in the array, create a new li element and add it to a ul in the HTML document.

// Create a to-do array with our items
const todos = ["1", "2", "3"];
// Select the list from the HTML document
const ul = document.querySelector("ul");

// A for loop that stops when it gets to the end of the array
for (let i = 0; i < todos.length; i++) {
    // Create a new list item element
    const li = document.createElement("li");
    // Add the text of the current item to the list item element
    li.innerHTML = todos[i];
    // Append it to the list
    ul.append(li);
}