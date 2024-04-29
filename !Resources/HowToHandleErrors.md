# If you get an error...

1. Check the browser console
    - Right click the page and click "Inspect", then go to the "console" tab in the new window.
    - It will hopefully give you a line number of where the error is.
2. Check the terminal
    - Especially if you're running a server, there could be errors in the terminal instead of the console.
3. Trace the data flow
    - Write console logs to make sure that functions are running when they're supposed to be, and that it has the data that it should have.

Let's look at a simple example: I have a button that should be running a function that adds two numbers, but nothing happens when I click it. What should I do first?

- 

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

- 

How would we fix this code?

- 

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

- 

How would we fix this code?

- 

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

- 

How would we fix this code?

- 

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

- 

How would we fix this code?

- 

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

- 

How would we fix this code?

- 

##

The error:
`ERR_CONNECTION_REFUSED`

What does this error mean?

- 

What could we check in the code?

- 