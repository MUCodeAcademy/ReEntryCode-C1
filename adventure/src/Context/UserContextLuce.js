import { useState, createContext, useContext } from 'react';

// Creates the context with a default value null
export const UserContext = createContext(null);

// Creates a custom hook for easier access to the UserContext
export function useUser() {
    return useContext(UserContext);
} 

// UserProvider component that wraps our app in the context
export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState("");

    function setUser(username) {
        setCurrentUser(username);
    }

    function clearUser() {
        setCurrentUser("");
    }

    // Gives us the provider which allows other components access to the values
    // props.children represents every rendered component (login page, favorites page, etc).
    return (
        <UserContext.Provider value={{ currentUser, setUser, clearUser }}>
            {children}
        </UserContext.Provider>
    )
}