import { useState, useEffect } from "react";
import "../CSS/Town.css";
import Shop from "./Shop";
import { useNavigate } from "react-router-dom";

function Town() {
    const [shopOpen, setShopOpen] = useState(false);

    const navigate = useNavigate();

    /* 
    Display:
        - Current Day
        - Shop button that displays a Shop component
            - Shop component will have some items to display
            - If they don't have enough money, don't let them buy it
            - If they do, subtract their money from the price of the item
        - A button to take them to the dungeon page (useNavigate)
        - Quit game button?
    */  

    function close() {
        setShopOpen(false);
    }

    function quit() {
        navigate("/"); // takes them to the home page
    }

    function start() {
        navigate("/dungeon"); // takes them to the dungeon page
    }

    return (
        <div className="mainTown">
            <h1>Town</h1>
            <button onClick={() => setShopOpen(true)}>Shop</button>
            {shopOpen && <Shop close={close} />}
            <button onClick={start}>Start</button>
            <button onClick={quit}>Quit</button>
        </div>
    )
}

export default Town;