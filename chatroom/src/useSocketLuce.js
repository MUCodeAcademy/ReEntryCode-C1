import {  useState, useEffect } from "react";
import io from 'socket.io-client';

// Connect to the backend Socket.IO server
const socket = io('http://localhost:5000');

function useSocket() {
    const [chat, setChat] = useState([]); 

    useEffect(() => {
        // Listen for incoming messages
        socket.on('message', (msg) => {
            setChat((prevChat) => [...prevChat, msg]);
        });

        // Cleanup the event listener on component unmount
        return () => {
            socket.off('message');
        };
    }, []);

    const onMessageSubmit = (message) => {
        if (message.trim()) {
          // Emit the message to the server
          socket.emit('message', message);
        }
    };

    return { chat, onMessageSubmit }
}

export default useSocket;