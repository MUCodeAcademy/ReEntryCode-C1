// Start by copying the UserContext
// Instead of UserContext and useUser it will be named ItemContext and useItem
// Instead of currentUser state we'll need attribute state and weapon state
// Need two functions: setAttribute and setWeapon, and probably removeAttribute and removeWeapon
// At the bottom you'll have the ItemContext.Provider

// Add it to the index.js and import it in the Character.js page.

import { useState, createContext, useContext } from 'react';

// Creates the context with a default value null
export const ItemContext = createContext(null);

// Creates a custom hook for easier access to the ItemContext
export function useItem() {
    return useContext(ItemContext);
} 

// ItemProvider component that wraps our app in the context
export function ItemProvider({ children }) {
    const [currentAttribute, setCurrentAttribute] = useState("");
    const [currentWeapon, setCurrentWeapon] = useState("");
    const [characterType, setCharacterType] = useState("");

    function setAttribute(attribute) {
        setCurrentAttribute(attribute);
    }

    function clearAttribute() {
        setCurrentAttribute("");
    }

    function setWeapon(weapon) {
        setCurrentWeapon(weapon);
    }

    function clearWeapon() {
        setCurrentWeapon("");
    }

    function setCharacter(type) {
        setCharacterType(type);
    }

    function clearCharacter() {
        setCharacterType("");
    }

    // Gives us the provider which allows other components access to the values
    // children represents every rendered component (login page, character page, etc).
    return (
        <ItemContext.Provider value={{ currentAttribute, currentWeapon, setAttribute, clearAttribute, 
        setWeapon, clearWeapon, characterType, setCharacter, clearCharacter }}>
            {children}
        </ItemContext.Provider>
    )
}