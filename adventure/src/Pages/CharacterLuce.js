import { useState, useEffect } from "react";
import { useItem } from "../Context/ItemContext.js";
import { useNavigate } from "react-router-dom";
import "../CSS/Character.css";

function Character() {
    // Create state for character name
    const [name, setName] = useState("");

    const { setAttribute, setWeapon, clearAttributes, clearWeapon, setCharacter, clearCharacter } = useItem();

    const navigate = useNavigate();
    
    /* 
    Input for character name
    Inputs for selecting an attribute
     - When they select an attribute, run setAttribute
    Inputs for selecting an weapon
     - When they select a weapon, run setWeapon

    Maybe add a reset button that runs clearAttributes and clearWeapon

    Button to finish character creation
    (this will take them to the actual game, but for now just make an empty function for it)
    */
   function reset() {

   }
   function finish() {
    navigate("/town");
   }
    return (
        <div>
            <h1>Character Page</h1>
            <input type="text" placeholder="Character Name" />
            <h2>Select a Character Type</h2>
            <div>
                <input type="radio" value={"Human"} name="type" onClick={() => setCharacter("Human")} />
                <label htmlFor="Human">Human</label>
            </div>
            <h2>Select a Starting Weapon</h2>
            <div className="weaponContainer">
                <input type="radio" value={"Club"} name="weapons" onClick={() => setWeapon("Club")} />
                <label htmlFor="Club">Club</label>
                <input type="radio" value={"Sword"} name="weapons" onClick={() => setWeapon("Sword")} />
                <label htmlFor="Sword">Sword</label>
            </div>
            <h2>Select an Attribute</h2>
            <div className="attributeContainer">
                <input type="radio" value={"Strong"} name="attributes" onClick={() => setAttribute("Strong")} />
                <label htmlFor="Strong">Strong</label>
                <input type="radio" value={"Fast"} name="attributes" onClick={() => setAttribute("Fast")} />
                <label htmlFor="Fast">Fast</label>
                <input type="radio" value={"Smart"} name="attributes" onClick={() => setAttribute("Smart")} />
                <label htmlFor="Smart">Smart</label>
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={finish}>Finish</button>
        </div>
    )
}

export default Character;