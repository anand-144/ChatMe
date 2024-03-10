import React, { useState } from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import { LiaSignInAltSolid } from "react-icons/lia";
import { PiChatCenteredDotsThin } from "react-icons/pi";
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [signingIn, setSigningIn] = useState(false);

    const handleSignIn = () => {
        if (!name || !room) {
            alert('Please fill in all fields.');
            return;
        }

        // Check if the name contains at least three letters and one emoji
        if (name.length < 3 || !containsEmoji(name)) {
            alert('Name should contain at least three letters and one emoji.');
            return;
        }

        setSigningIn(true);
        setTimeout(() => {
            window.location.href = `/chat?name=${name}&room=${room}`;
        }, 1000);
    };

    const containsEmoji = (str) => {
        const emojiPattern = /[\u{1F300}-\u{1FAD6}]/u;
        return emojiPattern.test(str);
    };

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'> Join <FaHandsHelping className="helping-hands-icon" /></h1>
                <div><input placeholder='Name' className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder='Enter Room Number' className='joinInput mt-20' type='number' onChange={(event) => setRoom(event.target.value)} /></div>
                <button className='button mt-20' type='button' onClick={handleSignIn}>
                    {signingIn ? 'Entering' : 'Sign In'} {signingIn ? <PiChatCenteredDotsThin className='EnteringIcon' /> : <LiaSignInAltSolid className='SignIn' />}
                </button>
            </div>
        </div>
    );
};

export default Join;
