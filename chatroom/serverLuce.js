import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'], // In a real app, you would put the name of your site
    methods: ['GET', 'POST']
  }
});

// When a client connects
io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for a message event from the client
  socket.on('message', (msg) => {
    // Broadcast the message to all connected clients
    io.emit('message', msg);
  });

  // When the client disconnects
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server on port 5000
server.listen(5000, () => console.log('Server running on port 5000'));