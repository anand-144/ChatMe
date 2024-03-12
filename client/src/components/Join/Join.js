import React, { useState } from 'react';
import { FaHandsHelping, FaSignInAlt } from 'react-icons/fa';
import { PiChatCenteredDotsThin } from "react-icons/pi";
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [signingIn, setSigningIn] = useState(false);

    const handleSignIn = () => {
        if (!name.trim() || !room.trim()) {
            alert('Please fill in all fields.');
            return;
        }
    
        if (name.trim().length < 3) {
            alert('Name should contain at least three letters.');
            return;
        }
    
        setSigningIn(true);
        setTimeout(() => {
            window.location.href = `/chat?name=${name}&room=${room}`;
        }, 1000);
    };

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'> Join <FaHandsHelping className="helping-hands-icon" /></h1>
                <div><input placeholder='Name' className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder='Room' className='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)} /></div>
                <button className='button mt-20' type='button' onClick={handleSignIn}>
                    {signingIn ? 'Entering' : 'Sign In'} {signingIn ? <PiChatCenteredDotsThin className='EnteringIcon' /> : <FaSignInAlt className='SignIn' />}
                </button>
            </div>
        </div>
    );
};

export default Join;
