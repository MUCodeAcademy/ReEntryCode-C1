import React, { useState, useEffect } from 'react';
import useSocket from './useSocketLuce';

function ChatRoom() {
    const [message, setMessage] = useState('');

    const { chat, onMessageSubmit } = useSocket();

    const onTextChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
        <h1>Chat Room</h1>
        <input
            type="text"
            name="message"
            value={message}
            onChange={onTextChange}
            placeholder="Enter message"
        />
        <button onClick={() => onMessageSubmit(message)}>Send</button>
        <div>
            <h2>Messages:</h2>
            {chat.map((msg, index) => (
                <div key={index}>{msg}</div>
            ))}
        </div>
        </div>
    );
}

export default ChatRoom;
