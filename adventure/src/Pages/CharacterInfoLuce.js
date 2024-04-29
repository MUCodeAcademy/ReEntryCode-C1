import { useItem } from "../Context/ItemContext";
import "../CSS/CharacterInfo.css";

function CharacterInfo() {
    const { health, currentWeapon, items, updateItems, updateHealth } = useItem();

    const maxHealth = 20;

    // Calculates the width of the health bar as a percentage
    const healthBarWidth = (health / maxHealth) * 100;

    function itemClick(item) {
        if (item.type === "potion") {
            updateHealth(item.amount, "add");
        }
        updateItems(item, "remove");
    }

    // Displays health and currentWeapon and items
    return (
        <div>
            <h1 className="mainHealth">
                <p>Health: {health}</p>
                <div className="healthBarContainer">
                    <div className="healthBar" style={{width: `${healthBarWidth}%`}}></div>
                </div>
                <p>Current Weapon: {currentWeapon.name}, Damage: {currentWeapon.amount}</p>
                {items.map((item, index) => (
                    <div>
                        <p>{item.name}</p>
                        <img src={item.img} />
                        <button onClick={() => itemClick(item)}>Use</button>
                    </div>
                ))}
            </h1>
        </div>
    )
}

export default CharacterInfo;