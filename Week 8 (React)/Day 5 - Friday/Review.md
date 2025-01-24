# React Week 1 Review

## React Basics

1. What is JSX?

-

2. What is a component in React?

-

3. How do you create a component?

```js

```

4. How do you display a component?

```js

```

5. Is the following code valid JSX?
   ```html
   <button class="btn btn-primary" onClick="{() => handleClick()}">Click Me</button>
   ```
- 


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

- 

## State

1. What is state in React?

- 
 
2. How do you create state in a component?

```js

```

3. Why or when would you use state as opposed to just using regular variables?

- 

4. What are some issues to look out for with state?

- 

5. Why does this code not handle user input correctly?:
   ```javascript
   export default function MyComponent = () =>{
       const [data, setData] = useState("");
       return(
           <>
               <input value={data} />
           </>
       )
   }
   ```
- 

## Hooks

1. What are hooks in React?

- 

2. Where can you use hooks in a React project?

- 

3. How can you tell if something is a hook?

- 

4. What does the useEffect hook do?

- 

5. How do you write a useEffect?

```js

```
