import { useState } from 'react';
import './Modal.css';


function Modal({ username, picture, age, isOpen, onClose }) {
    const [isAnimatingIn, setIsAnimatingIn] = useState(true);

    return (
        <div className='modal-overlay'>
        {/* If we're animating in, give it the modal-appear class. Otherwise, give it modal-disappear */}
            <div className={`modal-content ${isAnimatingIn ? 'modal-appear' : 'modal-disappear'}`}>
                <button className='modal-button' onClick={() => {
                    setIsAnimatingIn(false);
                    setTimeout(() => {
                        onClose();
                    }, 400);
                }}>X</button>
                <img className='modal-img' src={picture} />
                <h1>{username}</h1>
                <h4>Age: {age}</h4>
            </div>
        </div>
    )
}

export default Modal;