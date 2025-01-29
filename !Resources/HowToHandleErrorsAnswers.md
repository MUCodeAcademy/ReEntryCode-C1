# If you get an error...

1. Check the browser console
    - Right click the page and click "Inspect", then go to the "console" tab in the new window.
    - It will hopefully give you a line number of where the error is.
2. Check the terminal
    - Especially if you're running a server, there could be errors in the terminal instead of the console.
3. Trace the data flow
    - Write console logs to make sure that functions are running when they're supposed to be, and that it has the data that it should have.

Let's look at a simple example: I have a button that should be running a function that adds two numbers, but nothing happens when I click it. What should I do first?

- Check if there's an error in the console or terminal.
- Put a console.log in the function at the top.

```js
function add(number1, number2) {
    console.log(number1, number2);
}

<button onClick={() => add(8, 10)}>Add</button>
```

## Some common errors

The error:
`Cannot read properties of undefined (reading 'username')`

The code:
```js
function displayUsername() {
    alert(username);
}

<button onClick={() => displayUsername()}>Click</button>
```

What does this error mean?

- The variable was not created or initialized.

How would we fix this code?

- 
```js
function displayUsername() {
    const username = "Luce";
    alert(username);
}

<button onClick={() => displayUsername()}>Click</button>
```

##

The error:
`SyntaxError: Unexpected Token`

The code:
```js
function App() {
    const [username, setUsername,] = useState("");
}
```

What does this error mean?

- There's some sort of syntax error: you either are missing a symbol (like a parenthesis or bracket), or you have an extra one.

How would we fix this code?

- 
```js
function App() {
    const [username, setUsername] = useState("");
}
```

##

The error:
`Module not found` or `Can't resolve`

The code:
```js
function App() {
    const [username, setUsername] = useState("");
}
```

What does this error mean?

- It is some issue with the import statement(s). Either you didn't import it, or you imported the wrong thing.

How would we fix this code?

- 
```js
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
}
```

##

The error:
`username.map is not a function`

The code:
```js
function App() {
    const [username, setUsername] = useState("");

    return (
        <div>
            {username.map((item, index) => (
                {item}
            ))}
        </div>
    )
}
```

What does this error mean?

- Either username doesn't exist or it's not an array. You can only use map on arrays.

How would we fix this code?

- 
```js
function App() {
    const [username, setUsername] = useState([]);

    return (
        <div>
            {username.map((item, index) => (
                {item}
            ))}
        </div>
    )
}
```

##

The error:
`Uncaught TypeError: Failed to fetch`

The code:
```js
function App() {
    fetch('http://localhost:8080messages)', {
        // etc...
    })
}
```

What does this error mean?

- It can't run the fetch for some reason.

How would we fix this code?

- 

```js
function App() {
    fetch('http://localhost:8080/messages', {
        // etc...
    })
}
```

##

The error:
`ERR_CONNECTION_REFUSED`

What does this error mean?

- Can't connect to the server.

What could we check in the code?

- Check the terminal and make sure the server is running. Also check the database configuration.