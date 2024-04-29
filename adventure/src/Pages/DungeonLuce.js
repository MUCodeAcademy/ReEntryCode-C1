import { useState, useEffect } from "react";
import "../CSS/Dungeon.css";
import { useItem } from "../Context/ItemContext";
import { useNavigate } from "react-router-dom";
import CharacterInfo from "./CharacterInfo";

function Dungeon() {
    const [showMonster, setShowMonster] = useState(true);
    const [showMoney, setShowMoney] = useState(false);
    const [showHealing, setShowHealing] = useState(false);

    const [monsterHealth, setMonsterHealth] = useState(10);
    const [monsterDamage, setMonsterDamage] = useState(3);
    const [monsterImg, setMonsterImg] = useState("/Images/Creatures_and_Weapons.png");
    const [monsterCounter, setMonsterCounter] = useState(0);

    // Make an array of the monster image file locations
    const monsterImages = [
        "/Images/batLuce.png",
        "/Images/slugLuce.png",
        "/Images/spiderLuce.png",
        "/Images/dragonLuce.png",
    ];

    // State that tracks what image it currently is
    const [randomMonster, setRandomMonster] = useState(null);

    // Function that gets a random monster
    //  - Pick a random number
    //  - Use that number to get the monster image from the array
    function getRandomMonster() {
        const monsterIndex = Math.floor(Math.random() * monsterImages.length);
        setRandomMonster(monsterImages[monsterIndex]);
    }

    useEffect(() => {
        resetHealth();
        getRandomMonster();
    }, []); // this empty array means it will run once when the page loads
    
    const { health, updateHealth, resetHealth, currentWeapon, updateMoney } = useItem();

    const navigate = useNavigate();

    function Monster() {

        return (
            <div>
                <img className="monsterImg" src={randomMonster} />
                <h3>Health: {monsterHealth}</h3>
                <h3>Damage: {monsterDamage}</h3>
            </div>
        )
    }

    function MoneyEvent() {
        // If you wanted a random amount of money, you'd make that variable here
        return (
            <div>
                <h2>You collected $10</h2>
            </div>
        )
    }
    
    function HealingEvent() {
        // If you wanted a random amount of healing, you'd make that variable here
        return (
            <div>
                <h2>You ate a mushroom that restored 10 health</h2>
            </div>
        )
    }
    
    // Function for player attacking
    //  - Subtract the monster's health by the weapon's damage (for right now, just put a number in for the damage)
    //  - If the monster's health is 0 or less, setShowMonster(false)
    function playerAttack() {
        const randomAttack = Math.floor(Math.random() * 5);
        const newHealth = monsterHealth - randomAttack;
        setMonsterHealth(newHealth);
        if (newHealth <= 0) {
            setShowMonster(false);
            setMonsterCounter(prevCounter => prevCounter + 1);
        } else {
            monsterAttack();
        }
    }
    
    // Function for monster attacking
    //  - Subtract the player's health by the monster's damage
    //  - If the player's health is 0 or less, they lost
    function monsterAttack() {
        // updateHealth needs a number and a type, so you need to pass in the damage
        updateHealth(monsterDamage, "subtract");
        const newHealth = health - monsterDamage;
        if (newHealth <= 0) {
            alert("you lost");
            navigate("/character");
        }
    }
    
    // Function for retreating
    //  - setShowMonster(false)
    function retreat() {
        setShowMonster(false);
    }
    
    // Function for going back to town
    //  - Navigate them back to /town
    function toTown() {
        navigate("/town");
    }
    
    // Function for continuing in the dungeon
    //  - setShowMonster(true)
    function continueDungeon() {
        const number = Math.floor(Math.random() * 3);
        setShowMoney(false);
        setShowHealing(false);
        if (number === 0) {
            setShowMoney(true);
            updateMoney(10, "add");
        }
        if (number === 1) {
            setShowHealing(true);
            updateHealth(10, "add");
        }
        if (number === 2) {
            getRandomMonster();
            setShowMonster(true);
            setMonsterHealth(Math.floor(Math.random() * 10) + 1);
            setMonsterDamage(Math.floor(Math.random() * 7) + 1);
            // resetHealth();
        }
    }
    
    return (
        <div className="mainDungeon">
            <h1>Dungeon</h1>
            <CharacterInfo />
            <h2>Monsters Defeated: {monsterCounter}</h2>
            {/* Buttons for attacking/retreating IF the monster is being shown */}
            {showMonster && (
                <>
                    <Monster />
                    <button onClick={() => playerAttack()}>Attack</button>
                    <button onClick={() => retreat()}>Retreat</button>
                </>
            )}
            {showMoney && (
                <>
                    <MoneyEvent />
                </>
            )}
            {showHealing && (
                <>
                    <HealingEvent />
                </>
            )}
            {/* Buttons for going back to town and continuing IF the monster is not shown */}
            {!showMonster && (
                <>
                    <button onClick={() => continueDungeon()}>Continue</button>
                    <button onClick={() => toTown()}>To Town</button>
                </>
            )}
        </div>
    )
}

export default Dungeon;