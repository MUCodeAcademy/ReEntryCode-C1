import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { useState } from "react";

function App() {
  // let greeting = "Hello";

  // Creating state:
  // greeting is the name of the state
  // setGreeting is the function to run when we want to update the state
  // useState makes it into state with an initial value
  const [greeting, setGreeting] = useState("Hello");

  function changeGreeting() {
    // greeting = "Goodbye";
    // Run the setGreeting function to update our state with the new value
    setGreeting("Goodbye");
    console.log(greeting);
  }

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <button onClick={changeGreeting}>Click Here</button>
      <TodoList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Allows us to use the App component in other files
export default App;