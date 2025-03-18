import { useState } from "react"
import '../Styles/Dice.css';

function Dice() {
    const [number, setNumber] = useState('Roll the die');
    const [dieSides, setDieSides] = useState(6);

    function roll() {
        // Set the number to a random value
        const result = Math.floor(Math.random() * dieSides) + 1;

        setNumber(result);
    }

    return (
        <div id='dice-container'>
            <h1>Dice 🎲</h1>
            {/* <p>&#9856;</p>
            <p>&#9857;</p>
            <p>&#9858;</p> */}
            <p>{number}</p>
            <button onClick={roll}>Roll</button>
            <label htmlFor="options">Die sides</label>
            <select value={dieSides} onChange={(e) => setDieSides(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
            </select>
        </div>
    )
}

export default Dice;