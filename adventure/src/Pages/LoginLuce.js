import { useState, useEffect } from "react";
import { useUser } from "../Context/UserContext";
import "../CSS/Login.css";

function Login() {
    // State to keep track of username
    const [username, setUsername] = useState("");
    // State to keep track of password
    // password is is used for storing the state
    // setPassword is used for updating the state
    const [password, setPassword] = useState("");

    const { currentUser, setUser, clearUser } = useUser();

    // Login function
    function login() {
        // - Check if the current user doesn't exist
        if (currentUser.length == 0) {
            // - Set the current user to their username
            setUser(username);
            const data = {
                username: username,
                password: password
            }
            fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => console.log(response))
            .catch((error) => {
                console.error(error);
            })
        } else {
            alert("You're already logged in");
        }
        setUsername("");
    }

    // Check if their username is a certain length before they register
    async function register() {
        if (username.length < 8) {
            alert("your username must be at least 8 characters");
        } else {
            setUser(username);
            const data = {
                username: username,
                password: password
            }
            // Send our data to our server
            fetch("http://localhost:8080", {
                // Tells the fetch function we want to post data
                method: "POST",
                // Tells the fetch function we're sending a json
                headers: {
                    "Content-Type": "application/json"
                },
                // Puts our data in the body of the request as a JSON string
                body: JSON.stringify(data)
            })
            // After the request runs, take the response and turn it to a string
            .then(response => response.text())
            .then(response => console.log(response))
            // If there's an error, console.log it
            .catch(error => {
                console.log(error);
            })
        }
    }

    return (
        // Inputs for username and password
        // Button to login that runs the login function
        // Button to register that runs the register function
        // If current user exists, tell them they're logged in
        // (this is similar to the recentTodo display on the TodoList with the &&)
        <div className="mainLogin">
            <h1>Login</h1>
            {currentUser && (
                <h2>You're logged in as {currentUser}</h2>
            )}
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button onClick={() => login()}>Login</button>
            <button onClick={() => register()}>Register</button>
        </div>
    )
}

export default Login;