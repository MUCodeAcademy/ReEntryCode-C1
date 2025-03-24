import { useEffect, useState } from 'react';
import '../StylesLuce/TrafficLuce.css';

function Traffic() {
    const [activeLight, setActiveLight] = useState(null);
    const lights = ['red', 'yellow', 'green'];
    
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            console.log(lights[i]);
            setActiveLight(lights[i]);
            i = (i + 1) % lights.length; // loops back after green
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='light-container'>   
            <div className={`red ${activeLight === 'red' ? 'active' : ''}`}></div>
            <div className={`yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
            <div className={`green ${activeLight === 'green' ? 'active' : ''}`}></div>
        </div>
    )
}

export default Traffic;