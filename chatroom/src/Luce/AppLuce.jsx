import { useState } from 'react';
import './App.css';
import useSocket from './useSocketLuce';

function App() {
  const [message, setMessage] = useState('');

  const { chat, sendMessage } = useSocket();

  function handleEnter() {
    sendMessage(message);
    setMessage('');
  }

  return (
    <>
      <input 
        type='text'
        placeholder='Enter Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleEnter()}
      />
      <button onClick={() => sendMessage(message)}>Send</button>
      <div>
          <h2>Messages:</h2>
          {chat.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
      </div>
    </>
  )
}

export default App;
