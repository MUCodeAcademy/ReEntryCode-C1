# React Week 1 Review

## React Basics

1. What is JSX?

- A combination of JavaScript and HTML.

2. What is a component in React?

- JavaScript functions that display HTML in the return.

3. How do you create a component?

```js
function ComponentName() {

    return (
        // HTML code
    )
}

export default ComponentName;
```

4. How do you display a component?

```js
<ComponentName />
```

5. Is the following code valid JSX?
   ```html
   <button class="btn btn-primary" onClick="{() => handleClick()}">Click Me</button>
   ```

-  No, class should be className.

6. What is wrong about this return in a component?
    ```javascript
        return (
            <div>
                Hello!
            </div>
            <div>
                Goodbye!
            </div>
        )
    ```

- There needs to be one parent element:

```javascript
        return (
            <>
                <div>
                    Hello!
                </div>
                <div>
                    Goodbye!
                </div>
            </>
        )
```

## State

1. What is state in React?

- Basically React-specific variables.
 
2. How do you create state in a component?

```js
import { useState } from "react";

const [userIndex, setUserIndex] = useState("Default Value");
```

3. Why or when would you use state as opposed to just using regular variables?

- You should use state if you're going to display its value and update it at some point.
- This is because React doesn't track variable changes, so it won't re-render if you change a regular variable.

4. What are some issues to look out for with state?

- State updates are asynchronous, meaning that other code can run while it's still updating.
- If you update state, and then immediately try to use the new state, it might not be updated yet.

Example: 
```jsx
const [userIndex, setUserIndex] = useState("Default Value");

setUserIndex("something new");
console.log(userIndex);
```

5. Why does this code not handle user input correctly?:
   ```javascript
   export default function MyComponent = () =>{
       const [data, setData] = useState("");
       return (
           <>
               <input value={data} />
           </>
       )
   }
   ```

- Add this to the input: `onChange={(e) => setData(e.target.value)}`

## Hooks

1. What are hooks in React?

- Functions that are built into React.

2. Where can you use hooks in a React project?

- You can only use hooks in the top-level of a component.

```jsx
function ComponentName() {
    // Hooks can only be used here
    const [username, setUsername] = useState("Default");

    function doSomething() {
        const [userIndex, setUserIndex] = useState(); // Will give an error
        console.log(username); // This works, however
    }

    return (

    )
}
```

3. How can you tell if something is a hook?

- If it starts with 'use', it's a hook.

4. What does the useEffect hook do?

- It runs some code at a certain point in the component's lifecycle:
    - Once the page loads
    - When the component is removed
    - When some state is updated

5. How do you write a useEffect?

```js
import { useEffect, useState } from "react";

const [username, setUsername] = useState("Luce");

useEffect(() => {
    // Code goes here

    return () => {
        // This code will run when the component is destroyed
    }
}, [username]); // This is called the 'dependency array'
```

If the dependency array is empty, it will run only once when the page loads.
If the dependency array has a state variable, it will run whenever that state gets updated.