import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

const ENDPOINT = 'http://localhost:5000'; // Correct the endpoint format

let socket;

const Chat = () => {
  const location = useLocation(); // Use useLocation hook to access location
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.emit('disconnect');

      socket.off()
    }
  }, [location.search]);
  




  return (
   <div>
    Hello
   </div>
  );
}

export default Chat;
