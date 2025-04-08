import { useState } from "react";

export default function Confirmation({ onTest } = {}) {
    const [test, setTest] = useState(false);
    const [hovered, setHovered] = useState(false);

    function TestFunction(username) {
        console.log(username);
    }

    // Make the handleClick the test function if it's a test
    // Otherwise, run the default TestFunction
    const handleClick = onTest || TestFunction;

    const style = {
        cursor: hovered ? 'pointer' : 'auto',
        color: isOpen ? 'green' : 'red',
        backgroundColor: isOpen ? 'yellow' : 'green'
    }

    return (
        <div style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <h1>Your order has been received.</h1>
            <button onClick={() => handleClick("Luce")}>Run</button>
            <button onClick={() => setTest(true)}>Test</button>
            {test && (
                <p>Button was clicked</p>
            )}
        </div>
    )
}