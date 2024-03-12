import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from "socket.io-client";
import './Chat.css';
import InfoBar from "../InfoBar/InfoBar";
import Input from '../Input/Input'
import Messages from "../Messages/Messages";
import TextContainer from '../TextConatiner/TextContainer'

const ENDPOINT = 'http://localhost:5000';

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    setRoom(room);
    setName(name);
    newSocket.emit('join', { name, room }, () => {});

    return () => {
      newSocket.emit('disconnect');
      newSocket.off();
    };
  }, [location.search]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
      });

      socket.on('roomData', ({ users }) => {
        setUsers(users);
      });

      return () => {
        socket.off('message');
        socket.off('roomData');
      };
    }
  }, [socket]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (socket && message.trim()) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
