# Evaluation Topics

1. HTML
    - Where do you put your HTML code in a React component?
    - What will happen if you wrote this HTML in a React component?
        ```html
        <h1>This is a header</h1>
        <p>This is a paragraph</p>
        ```
2. React
    - How to create and update state
        - What's the difference between state and a regular JavaScript variable that uses let/const?
        - What if the state information is an array, and you want to add another item to the array?
        - What if you want to remove an item from the array?
        - Why can state sometimes cause issues if you update the state and then immediately try to use the updated state?
    - How to control when a useEffect runs
    - How to route between different pages with React Router
    - Context
        - What is it?
        - Why would you use it?
        - How do you store and retrieve information from a Context file?
        - What do you need to put in the index.js to use context?
    - Conditional rendering (how to display a paragraph only if they've clicked a button, for example)
3. Servers
    - How to connect to a database
        - Connections and connection pooling
        - What is a .env file and why should you use it?
    - How to fetch to the server and return information from the databse
        - How to write a fetch, and the difference between GET and POST
    - How to make a cookie
    - How websockets work
        - Describe how the information flows from the page, to the useSocket, to the server, and back
    - Why would you store certain information, like a list of users, on the backend (server) rather than the frontend (actual page)? There can be a few reasons for this, think of one or two.
4. Data Structures and Algorithms
    - When would you use a linked list compared to other data structures like an array?
    - When would you use a tree compared to other data structures like a regular object?
    - Look through our text editor with a linked list, and make sure you know how it's structured