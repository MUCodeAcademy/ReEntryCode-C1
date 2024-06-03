# React Basics Review

## React Basics

1. What is JSX?

- JavaScript and HTML combined, used for React

2. What is the Virtual DOM?

- It's React's representation of the real DOM. When the page is updated, it updates the virtual DOM, and then it compares the virtual DOM to the real DOM, and only updates the real DOM with things that have changed.

## Components

1. What is a component in React?

- Functions that display something to the page, made with JSX.

2. Is the following code valid JSX?
   ```html
   <button class="btn btn-primary" onClick="{handleClick}">Click Me</button>
   ```

- class is a reserved keyword, so you have to use className

    ```html
   <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
   ```

3. How do you trigger a re-render of a component?

- State changes
- Use Effect
- Context changes
- Parent component re-renders
- Properties change

4. What is right or wrong about this render function in a class component?
    ```javascript
    render(){
        return (
            <div>
                Hello!
            </div>
            <div>
                Goodbye!
            </div>
        )
    }
    ```

- You have to put all of your elements in one main parent element.
- You can use a JSX Fragment <> if you don't want to create a new div for styling purposes.

    ```javascript
    render(){
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
    }
    ```

## State

1. What is state in React?

- React's version of variables; used to keep track of some information

2. What are some ways to keep track of state?

- Using the useState hook
- Context for global state
- Other state management libraries like MobX and Redux

3. Why should you use state as opposed to just using local variables?

- If you update a regular variable, it won't trigger a re-render, so you have to use state to tell React that something has changed on the page.

4. How do you create state in a functional component?

```js
const [state, setState] = useState("initial value");
```

5. State updates are asynchronous. What does this mean and why is it important?

- Asynchronous code means it can let other code run while it's still running. If you update state and then immediately check it, it will probably not be updated yet.

```js
setState("new value");
console.log(state);
```

6. Why does this code not handle user input correctly?:
   ```javascript
   export default function MyComponent() {
       const [data, setData] = useState("");
       return(
           <div>
               <input value={data} />
           </div>
       )
   }
   ```
- Need some way to update the state.

```js
<input value={data} onChange={(e) => setData(e.target.value)} />
```

## Hooks

1. What does the useEffect Hook do and when should you use it?

- The useEffect hook runs some code at specified points in the React lifecycle: when a component loads, when a state is updated, or when the component is deleted.

2. Where can you use hooks in a React project?

- You can't use hooks inside regular JavaScript functions - they have to be at the top-level of a component.

3. What is missing from the following code:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

Corrected version:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

- useEffects need a dependency array which tells it when to run.
- If the dependency array is empty, the useEffect runs once when the component loads.
- If the dependency array has a state name in it, the useEffects runs when the component loads, and also whenever that state changes.
- If you want code to run when the component is deleted, you can use a return inside the useEffect

```js
useEffect(() => {
    // this code will run once when the page loads

    return () => {
        // this code will run when the component is deleted
        setCount(0);
    }
}, []);
```
