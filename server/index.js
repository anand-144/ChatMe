const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room)

      
        callback();
    });

    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
});

app.use(cors()); // Enable CORS for Express routes

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
