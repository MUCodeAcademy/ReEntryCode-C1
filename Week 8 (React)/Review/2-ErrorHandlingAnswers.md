# If you get an error...

1. Check the browser console
    - Right click the page and click "Inspect", then go to the "console" tab in the new window.
    - It will hopefully give you a line number of where the error is.
2. Check the terminal
    - Especially if you're running a server, there could be errors in the terminal instead of the console.
3. Trace the data flow
    - Write console logs to make sure that functions are running when they're supposed to be, and that it has the data that it should have.

Let's look at a simple example: I have a button that should be running a function that adds two numbers, but nothing happens when I click it. What should I do first?

- Check if there's any errors in VSCode or the console.
- If no errors, check if the button has the function attached.
- If it does have a function, put a console.log in the function to make sure it's actually running.
- If the function is running, but it's not adding the two numbers, console.log the two numbers.

## Some common errors

The error:
`Cannot read properties of undefined (reading 'username')`

What does this error mean?

- It usually means that 'username' is not created OR it can't find it OR you misspelled it.

How would we fix this code?

```js
const username = "Luce";

function displayUsername() {
    alert(username);
}

<button onClick={() => displayUsername()}>Click</button>
```

##

The error:
`SyntaxError: Unexpected Token`

What does this error mean?

- There's a syntax error, meaning that you wrote the code wrong. For example, missing a comma/semicolon/bracket, or having an extra one.

How would we fix this code?

```js
function App() {
    const [username, setUsername] = useState("");
}
```

##

The error:
`Module not found` or `Can't resolve`

What does this error mean?

- This means you did not import what you need to import OR you imported the wrong thing.

How would we fix this code?

```js
import { useState } from 'react';

function App() {
    const [username, setUsername] = useState("");
}
```

##

The error:
`username.map is not a function`

What does this error mean?

- It can't use the map function with 'username'.

How would we fix this code?

```js
function App() {
    const [username, setUsername] = useState("Luce");

    return (
        <div>
        // Split will separate the characters and put them in an array, which it can now map through
            {username.split('').map((item, index) => (
                {item}
            ))}
        </div>
    )
}
```

##

If you run your website, and the page is blank (even though it shouldn't be), what could be a common reason for that?

- Could be anything, but usually it's something wrong with import statements or how you're displaying the components.