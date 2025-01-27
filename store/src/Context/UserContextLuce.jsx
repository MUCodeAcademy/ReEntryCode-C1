// Context is state for your entire application (global state)
import { useState, createContext, useContext } from "react";

// Initialize the context
export const UserContext = createContext(null);

// Function that lets us use the context
// We're going to run this function any time we want to access/use our context
export function useUser() {
    return useContext(UserContext);
}

// This will store user information and provide it to the entire application
export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState("");

    // Any functions that you want to run go here
    function setUser(username) {
        setCurrentUser(username);
    }

    function clearUser() {
        setCurrentUser("");
    }

    // This return provides our state and our functions to every page
    return (
        <UserContext.Provider value={{ currentUser, setUser, clearUser }}>
            {children}
        </UserContext.Provider>
    )
}