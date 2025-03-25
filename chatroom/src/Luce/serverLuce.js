import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

// Our server created with http and express
const server = http.createServer(express());

// Socket.io server instance
const io = new Server(server, {
    // Ensures we bypass the cross-origin resource policy
    cors: {
        origin: ['http://localhost:5173'], // In a real app, you would put the name of your website
        methods: ['GET', 'POST'] // Specifies that we want to allow 'GET' and 'POST' requests
    }
});

// This listens for a 'connection' event
// socket is their specific connection
io.on('connection', (socket) => {
    // When you want to send data to everyone, use 'io'
    // When you want to send data to a specific user, use 'socket'

    // Listen for a message event from the client
    socket.on('message', (data) => {
        // Broadcast the message to everyone in the server
        io.emit('message', data);
    });
});

server.listen(5000, () => console.log('Server running on port 5000'));