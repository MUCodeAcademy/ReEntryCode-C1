import { useState, useEffect } from "react";

function LoginPage() {
    // State to keep track of username
    const [username, setUsername] = useState("");
    // State to keep track of password
    const [password, setPassword] = useState("");
    // State to keep track of current user
    const [currentUser, setCurrentUser] = useState("");

    // Login function
    function login() {
        // - Check if the current user doesn't exist
        if (currentUser.length == 0) {
            // - Set the current user to their username
            setCurrentUser(username);
        } else {
            alert("You're already logged in");
        }
        setUsername("");
    }

    // Register function (this will probably do the same thing as login for now)
    function register() {
        setCurrentUser(username);
    }

    return (
        // Inputs for username and password
        // Button to login that runs the login function
        // Button to register that runs the register function
        // If current user exists, tell them they're logged in
        // (this is similar to the recentTodo display on the TodoList with the &&)
        <div>
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

export default LoginPage;