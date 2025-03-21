import { useEffect, useRef, useState } from "react";


function Typing() {
    const sampleSentences = [
        `"If only, if only," the woodpecker sighs, "The bark on the tree was as soft as the skies."`,
        `An eye for an eye only ends up making the whole world blind.`,
        `I don't think I've ever been to an appointment in my life whre I wanted the other guy to show up.`,
        `You can't use the fire exit because you're not made of fire.`,
        `I'm disinclined to acquiesce to your request... Means no.`
    ];

    function getNewSentence() {
        return sampleSentences[Math.floor(Math.random() * sampleSentences.length)];
    }
    
    const [currentSentence, setCurrentSentence] = useState(getNewSentence());
    const [userTyping, setUserTyping] = useState('');
    const [time, setTime] = useState(0);
    const [finalTime, setFinalTime] = useState(0);
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        let interval;
        if (start) {
            textRef.current.focus(); // Will focus the textarea so they can quickly begin typing
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        } else {
            setTime(0);
        }

        return () => clearInterval(interval);
    }, [start]);

    useEffect(() => {
        console.log(userTyping)
        console.log(currentSentence);
        if (userTyping === currentSentence) {
            setFinalTime(time);
            setStart(false);
            setEnd(true)
        }
    }, [userTyping]);

    function reset() {
        setCurrentSentence(getNewSentence());
        setStart(true);
    }

    return (
        <div>
            <h1>Speed Typing Test</h1>
            {start ? (
                <>
                    <h3>{time}</h3>
                    <blockquote>{currentSentence}</blockquote>
                    <textarea 
                        onChange={(e) => setUserTyping(e.target.value)}
                        value={userTyping}
                        placeholder="Start typing here..."
                        ref={textRef}
                    />
                </>
            ) : end ? (
                <>
                    <h3>Final time: {finalTime}</h3>
                    <button onClick={reset}>Reset</button>
                </>
            ) : (

                <button onClick={() => setStart(true)}>Start</button>
            )}
        </div>
    )
}

export default Typing;