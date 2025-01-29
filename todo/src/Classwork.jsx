import { useEffect, useState, memo } from 'react';
import './Classwork.css';
import Modal from './Modal';

// memo creates a 'memoized' version of the component
// Memoization remembers the results of a function, and uses its result instead of re-running the function
// By memoizing this component, it won't re-run when the page re-renders
const RandomNumber = memo(() => {
    // const number = Math.floor(Math.random() * 10) + 1;
    const [number, setNumber] = useState(() => Math.floor(Math.random() * 10) + 1);

    return (
        <>
            <p>{number}</p>
            {/* Ternary operator */}
            {number % 2 == 0 ? 
                <p>Your number is even</p>
                :
                <p>Your number is odd</p>
            }
        </>
    )
});

function Classwork() {
    const [modalOpen, setModalOpen] = useState(false);
    const [userIndex, setUserIndex] = useState();

    const users = [
        {
            id: 1,
            username: 'Something',
            age: 20,
            picture: 'bear.jpg'
        },
        {
            id: 2,
            username: 'Guy2',
            age: 40,
            picture: 'fish1.webp'
        },
        {
            id: 3,
            username: 'Username',
            age: 60,
            picture: 'fish2.jpg'
        },
        {
            id: 4,
            username: 'I guess',
            age: 30,
            picture: 'fish3.jpg'
        },
        {
            id: 5,
            username: '[REDACTED]',
            age: 45,
            picture: 'fish4.jpg'
        }
    ];


    // let timeLimit = 10;
    const [timeLimit, setTimeLimit] = useState(10);

    // Runs this code once when the page loads
    useEffect(() => {
        let counter = setInterval(() => {
            // timeLimit--;
            // curr is the current value of time limit
            // making sure we get the most recent version of the time
            setTimeLimit(curr => {
                const newTime = curr - 1;
                console.log(newTime);
                if (newTime <= 0) {
                    clearInterval(counter);
                }
                return newTime; // Updates the state
            });
        }, 1000);

        // Removes the interval when the component is removed from the screen
        // 2 reasons for this:
        // 1. If the user navigates away from the page, we want to make sure it's stopped
        // 2. If the page reloads, we don't want multiple intervals, so we remove the current interval
        return () => clearInterval(counter);
    }, []);


    return (
        <div>
            <h1>Timer: {timeLimit}</h1>
            {modalOpen && 
                <Modal 
                    username={users[userIndex].username}
                    age={users[userIndex].age}
                    picture={users[userIndex].picture}
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                />
            }
            {users.map((item, index) => (
                <div key={item.id} id={item.username}>
                    <h2>{item.username}</h2>
                    <h4>{item.age}</h4>
                    <img src={item.picture} />
                    <RandomNumber />
                    <button onClick={() => { 
                        setModalOpen(true);
                        setUserIndex(index);
                    }}>Show Profile</button>
                </div>
            ))}
        </div>
    )
}

export default Classwork;