import { useState, useEffect } from "react";
import { useItem } from "../Context/ItemContextLuce.js";
import { useNavigate } from "react-router-dom";
import "../CSS/Character.css";

function Character() {
    // Create state for character name
    const [name, setName] = useState("");

    const { currentWeapon, currentAttribute, characterType, setAttribute, 
        setWeapon, clearAttribute, clearWeapon, setCharacter, clearCharacter } = useItem();

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
        clearAttribute();
        clearWeapon();
        clearCharacter();
        setName("");
    }
    function finish() {
        navigate("/town");
    }
    return (
        <div className="mainCharacter">
            <h1>Character Page</h1>
            {/* <img className="mapImg" src="/Images/Map.jpg" /> */}
            <input type="text" placeholder="Character Name" value={name} onChange={(e) => setName(e.target.value)} />
            <div className="typeContainer">
                <h2>Select a Character Type</h2>
                <input type="radio" value={"Human"} name="type" onClick={() => setCharacter("Human")} checked={characterType === "Human"} />
                <label htmlFor="Human">Human</label>
                <img src="/Images/human.png" />
                <input type="radio" value={"Minotaur"} name="type" onClick={() => setCharacter("Minotaur")} checked={characterType === "Minotaur"} />
                <label htmlFor="Minotaur">Minotaur</label>
                <img src="/Images/minotaur.png" />
            </div>
            <div className="weaponContainer">
                <h2>Select a Starting Weapon</h2>
                <input type="radio" value={"Club"} name="weapons" onClick={() => setWeapon("Club")} checked={currentWeapon === "Club"} />
                <label htmlFor="Club">Club</label>
                <img src="/Images/club.png" />
                <input type="radio" value={"Sword"} name="weapons" onClick={() => setWeapon("Sword")} checked={currentWeapon === "Sword"} />
                <label htmlFor="Sword">Sword</label>
                <img src="/Images/sword.png" />
            </div>
            <div className="attributeContainer">
                <h2>Select an Attribute</h2>
                <input type="radio" value={"Strong"} name="attributes" onClick={() => setAttribute("Strong")} checked={currentAttribute === "Strong"} />
                <label htmlFor="Strong">Strong</label>
                <img src="/Images/strong.png" />
                <input type="radio" value={"Fast"} name="attributes" onClick={() => setAttribute("Fast")} checked={currentAttribute === "Fast"} />
                <label htmlFor="Fast">Fast</label>
                <img src="/Images/fast.png" />
                <input type="radio" value={"Smart"} name="attributes" onClick={() => setAttribute("Smart")} checked={currentAttribute === "Smart"} />
                <label htmlFor="Smart">Smart</label>
                <img src="/Images/smart.png" />
            </div>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={finish}>Finish</button>
        </div>
    )
}

export default Character;