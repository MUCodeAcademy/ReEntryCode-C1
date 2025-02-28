# Brief React Overview

1. Why do you want to use state in React rather than regular variables?

- React doesn't notice when regular variables change; it only tracks state updates.
- Typically, if you're going to display a variable, use state.

2. Create a state that holds a counter (number).

```jsx
// number is the name of the state
// setNumber is the function we run to update it
const [number, setNumber] = useState(0);
```

3. Now increase that state's value by 1.

```jsx
// prev ensures that we're getting the most recent version of the state
setNumber((prev) => prev + 1);
```

4. Write a useEffect that logs the value of the counter to the console whenever 'counter' changes.

```jsx
// useEffect runs a function at a certain point in the lifecycle
// If the dependency array is empty, it runs once when the component loads
// If we put a state (for example, 'number'), it will run whenever that state changes
useEffect(() => {
    console.log(number);
}, [number]);
```

5. If we have an input element, how would we store what the user is typing into this input?

```jsx
// e.target.value is the key they pressed, and we're storing it in the number state when the user types
<input
    onChange={(e) => setNumber(e.target.value)}
    value={number}
/>
```

6. What is context, and when would you want to use it?

- A way to manage state globally, to access your state values anywhere in the app.
- Useful for when you need the same value of a variable across the whole website. 
- Also reduces the amount of different states in each component.
