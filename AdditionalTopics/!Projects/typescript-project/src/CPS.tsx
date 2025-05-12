import { useEffect, useRef, useState } from 'react'

import './CPS.css'


function CPS() {

    const [clicks, setClicks] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [cps, setCps] = useState(0);
    const [seconds, setSeconds] = useState(10);
    const [ms, setMs] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [outTime, setOutTime] = useState(false);
    const startRef = useRef<number>(performance.now());
    const frameRef = useRef<number>(0);
    const clicksRef = useRef<number>(0);

    useEffect(() => {
        if (!startTimer) return 
        startRef.current = performance.now();
        
        function update(now: number) {
            const time = now - startRef.current;
            const remaining = Math.max(0, 10000 - time);
            setSeconds(Math.floor(remaining / 1000));
            setMs(Math.floor(remaining % 1000));
            const elapsedSeconds = (10000 - remaining) / 1000;
            setCps(
              elapsedSeconds > 0
                ? clicksRef.current / elapsedSeconds
                : 0
            );
            if (remaining > 0) {
                frameRef.current = requestAnimationFrame(update);
            } else {
                setOutTime(true);
            }
        };
        frameRef.current = requestAnimationFrame(update);
        return () => { 
            cancelAnimationFrame(frameRef.current);
        }
    },[startTimer])

    function getMs(time: number) {
        if (time < 100) return 0;
        return time;
    }

    function reset() {
        setIsClicked(false);
        setStartTimer(false);
        setOutTime(false);
        setSeconds(10);
        setMs(0);
        setClicks(0);
        setCps(0);
    }

    return (
        <>
            <h1 className='h1'>Clicks Per Second Test</h1>
            <div className='info-wrapper'>
                <div className='info'>Total Clicks: {clicks}</div>
                <div className='info'>CPS: {cps.toFixed(2)}</div>
                <div className='info'>Time: {seconds}.{getMs(ms).toString().slice(0, 1)} seconds</div>
            </div>
            <div className='click-btn-wrapper'>
                <button 
                    onClick={() => {
                      setClicks((c) => {
                        const next = c + 1;
                        clicksRef.current = next;
                        return next;
                      });
                      setStartTimer(true);
                    }}
                    onMouseDown={() => setIsClicked(true)}
                    onMouseUp={() => setIsClicked(false)}
                    disabled={outTime}
                    className={`click-btn ${isClicked ? 'click' : ''}`} >
                Click!
                </button>
            </div>

            <div className='btn-wrapper'>
                <button 
                className='reset-btn' 
                onClick={() => reset()}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default CPS;