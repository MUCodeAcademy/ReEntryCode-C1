import { useState, useRef } from "react";


function Stopwatch() {
    const [time, setTime] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    // const timerRef = useRef(null);

    function start() {
        // Putting the interval inside of state so that we can clear it.
        // If we used a regular variable to keep track of the interval, it would reset to 'null' every re-render.
        setTimerInterval(setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000));

        // If you want to, you can use a useRef to store the interval instead.
        // This is technically better since it won't cause unnecessary re-renders like useState does.
        
        /*
        
        if (!timerRef.current) { // Prevents multiple intervals by checking if there's not a timerRef
            timerRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000)
        }

        */
    }

    function stop() {
        clearInterval(timerInterval);

        // If you're using a ref:
        // clearInterval(timerRef.current);
        // timerRef.current = null;
    }

    return (
        <div>
            <h2>{time}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    )
}

export default Stopwatch;