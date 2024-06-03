# React Basics Review

## React Basics

1. What is JSX?

- 

2. What is the Virtual DOM?

- 

## Components

1. What is a component in React?

- 

2. Is the following code valid JSX?
   ```html
   <button class="btn btn-primary" onClick="{handleClick}">Click Me</button>
   ```
- 

3. How do you trigger a re-render of a component?

- 

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

## State

1. What is state in React?

- 

2. What are some ways to keep track of state?

- 

3. Why should you use state as opposed to just using local variables?

- 

4. How do you create state in a functional component?

- 

5. State updates are asynchronous. What does this mean and why is it important?

- 

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
   -

## Hooks

1. What does the useEffect Hook do and when should you use it?

- 

2. Where can you use hooks in a React project?

- 

3. What is missing from the following code:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

- 
