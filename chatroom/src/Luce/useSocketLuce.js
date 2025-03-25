import { useState, useEffect } from "react";
import io from 'socket.io-client';

// Connect to our server
const socket = io('http://localhost:5000');

function useSocket() {
    const [chat, setChat] = useState([]);
    
    useEffect(() => {
        // Listen for incoming message events from other users
        socket.on('message', (data) => {
            setChat(prev => [...prev, data]); // Copies the previous array and adds the new data
        });

        // Disable the listener and disconnects when they navigate away
        return () => {
            socket.off('message');
        }
    }, []);

    function sendMessage(message) {
        // Sends a 'message' event with our message data to the server
        socket.emit('message', message); // 'event name', data
    }

    // Allows our App to access chat and sendMessage from this file
    return { chat, sendMessage }
}

export default useSocket;