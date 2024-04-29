import { useState } from "react";
import { useItem } from "../Context/ItemContextLuce";

function Shop({ close }) {
    const { money, updateMoney, weapon, setWeapon } = useItem();

    const [items, setItems] = useState([
        {
            "name": "Flail",
            "price": 7,
            "amount": 4,
            "type": "weapon",
            "img": "/Images/slugLuce.png"
        },
        {
            "name": "Bow",
            "price": 4,
            "amount": 3,
            "type": "weapon",
            "img": "/Images/batLuce.png"
        },
        {
            "name": "Healing Potion",
            "price": 5,
            "amount": 10,
            "type": "potion",
            "img": "/Images/dragonLuce.png"
        }
    ]);

    /*
    Displays:
        - Items for sale with their price
        - If they click on an item, they buy it
        - A back/close button
    */

    function buy(item) {
        // Check if they have enough money to buy it
        if (item.price < money) {
            // Check if the item they bought is a weapon
            if (item.type === "weapon") {
                // If it is, run setWeapon to update their weapon
                setWeapon(item);
                console.log("Your new weapon: ", item);
            } else {
                // If it's not, add it to their list of items
                alert("You purchased not a weapon");
            }
            // Subtract their money with the price of the item
            updateMoney(item.price, "subtract");
        } else {
            // If they don't have enough money, tell them that somehow
            alert("You don't have enough money");
        }
    }

    return (
        <div className="mainShop">
            {/* To display the items, do items.map() and display each item with an onclick */}
            {items.map((item, index) => (
                <div className="itemDiv">
                    <h3>{item.name}</h3>
                    <h5>${item.price}</h5>
                    <img src={item.img}></img>
                    {item.type === "weapon" ? 
                    (<h5>Damage: {item.amount}</h5>)
                    :
                    (<h5>Healing: {item.amount}</h5>)
                    }
                    <button onClick={() => buy(item)}>Purchase</button>
                </div>
            ))}
            <button onClick={close}>Back</button>
        </div>
    )
}

export default Shop;