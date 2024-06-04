# Context Review

## State Management

1. What is Context?

- Shares state across the entire application. Used for things like user information, theme, other settings.

2. What is the general pattern for context?

- In a context file, use createContext(), make a parent component to wrap the entire app in, and use the useContext() hook in whatever file you need the context in.

3. What are reducers used for in context?

- Reducers are a different way to manage updating state in context.

<!-- 4. What is the dispatch function?

-  -->

5. What is a good folder structure for Context?

- Make a context folder, and each page has their own context file in that folder.

6. What is wrong with the following bit of code:

```javascript
const [arr, setArr] = useState([1, 2, 3]);
setArr([...arr, 4]);
```

```javascript
const [arr, setArr] = useState([1, 2, 3]);
setArr(prevArr => [...prevArr, 4]);
```

- Use an arrow function to take the previous version of the state and add the new value to it.

7. What is a context provider?

- Allows your pages to use context. Usually you put a provider in the index.js around your other components
