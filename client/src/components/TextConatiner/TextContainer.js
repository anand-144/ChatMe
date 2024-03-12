import React from 'react';
import './TextContainer.css';
import { PiChatCircleDots  } from "react-icons/pi";

const TextContainer = ({ users }) => {
  // Function to generate a unique color based on the user's name
  const generateColor = (userName) => {
    // Convert username to a numeric hash code
    const hashCode = userName.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    
    // Generate a hue value based on the hash code
    const hue = hashCode % 360;

    // Convert hue to HSL color format
    return `hsl(${hue}, 70%, 80%)`;
  };

  return (
    <div className="textContainer">
      {users && users.length > 0 && (
        <div>
          <h1>People currently chatting:<PiChatCircleDots className='EnteringIco' /></h1>  
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                  <div
                    className="colorIndicator"
                    style={{ backgroundColor: name === 'Red' ? '#FF0000' : generateColor(name) }}
                  ></div>
                </div>
              ))}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextContainer;
