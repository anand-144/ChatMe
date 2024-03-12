import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <img className='onlineIcon' src={onlineIcon} alt='Online' />
      <h3 className='roomText'>{room}</h3>
    </div>
    <div className='rightInnerContainer'>
      <button onClick={() => window.location.href = '/'}className="customButton">
        <img src={closeIcon} alt='Close' />
      </button>
    </div>
  </div>
);

export default InfoBar;
