# React Week 1 Review

## React Basics

1. What is JSX?

- Combination of JS and HTML.

2. What is a component in React?

- JavaScript functions that display HTML in the return.

3. How do you create a component?

```js
function ComponentName() {

    return (
        
    )
}

export default ComponentName;
```

4. How do you display a component in another component?

```js
<ComponentName />
```

5. Is the following code valid JSX?
   ```html
   <button class="btn btn-primary" onClick="{() => handleClick()}">Click Me</button>
   ```
- It should be className instead of class.

6. What is right or wrong about this return in a component?
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

- It needs to be in one parent div like this:

    ```javascript
        return (
            <div>
                <div>
                    Hello!
                </div>
                <div>
                    Goodbye!
                </div>
            </div>
        )
    ```

## State

1. What is state in React?

- It's basically just React-specific variables.
 
2. How do you create state in a component?

```js
import { useState } from "react";

const [name, setName] = useState("");
```

3. Why or when would you use state as opposed to just using regular variables?

- If you're going to display that state and then update it at some point, use state. This is because React doesn't re-render if a variable changes.

4. What are some issues to look out for with state?

- State updates are asynchronous, meaning that it can run other code while it's still updating.
- If you update state, and then immediately use that new state, it might not be updated by the time you use it.

5. Why does this code not handle user input correctly?:
   ```javascript
   export default function MyComponent = () => {
       const [data, setData] = useState("");
       return(
           <>
               <input value={data} />
           </>
       )
   }
   ```

- Add an `onChange={(e) => setData(e.target.value)}` into the input

## Routing

1. Why would you want to use routes in a React application?

- To have separate pages users can go to.

2. What is the general pattern for creating routes?

```js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

return (
    <Router>
        <Link to="/home">Home Page</Link>

        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
)
```

## Hooks

1. What are hooks in React?

- Functions that are built into React.

2. Where can you use hooks in a React project?

- You can only use them in the top-level of the component. Meaning, you can't use a hook in a regular function.

3. How can you tell if something is a hook?

- It starts with use.

4. What does the useEffect hook do?

- It's used when you want to run code at a specific point (ex: when the page loads, when state updates, or when the page is deleted).

5. How do you write a useEffect?

```js
import { useEffect } from "react";

useEffect(() => {
    // Code goes here

    return () => {
        // This code will run when the component gets deleted
    }
}, []); // This is the dependency array
```

If the dependency array is empty, it will run once when the page loads.
If there's state in the dependency array, it will run when the state is updated and also when the page loads.
The return in the effect is for when the component gets deleted (this is optional).