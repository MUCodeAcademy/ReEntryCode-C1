import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';
import { v4 as uuid } from 'uuid';
import argon2 from 'argon2';

const app = express();

app.use(cors());
app.use(express.json());

//Secured Database Access

// let connection = mysql.createConnection({
//     host: process.env.DB_HOST, // Where the database is running
//     user: process.env.DB_USER, // Your username for the database
//     password: process.env.DB_PASSWORD, // Your password (if there is one)
//     database: process.env.DB_DATABASE, // The name of your database schema
// });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'messenger'
});

connection.connect();

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const picture = req.body.picture || null;
    const user_id = uuid();
    const accessLevel = 'public';

    let hashedPassword;
    try {
        hashedPassword = await argon2.hash(password);
    } catch (err) {
        console.log(err);
    }

    if (picture) {
        picture = Buffer.from(picture, 'base64');
    }

    
    try {
        connection.query(
            'INSERT INTO users VALUES (?, ?, ?, ?, ?)',
            [user_id, username, hashedPassword, picture, accessLevel],

        );
        res.status(200).send('User registered successfully');
    } catch (err) {
        res.status(500).send('Error inserting into database: ', err);
    }
});

// Our server created with http and express
const server = http.createServer(app);

// Socket.io server instance
const io = new Server(server, {
    // Ensures we bypass the cross-origin resource policy
    cors: {
        origin: ['http://localhost:5173'], //In a real app, you would put the name of your website
        methods: ['GET', 'POST'] // Specifies that we want to allow 'GET' and 'POST' requests
    }
});

// This listens for a 'connection' event
// socket is their specific connection. Each user gets their own 'line'
io.on('connection', (socket) => {

        //When you want to send data to everyone, use 'io'
        //When you want to send data to a specific user, use 'socket'

        // Listen for a message event from the client
        socket.on('messageEvent', (messageData) => {
            // Broadcast for a message to everyone in the server
            io.emit('messageEvent', messageData);
        });
});

// This starts the server and the console.log is for us humans to let us know the server is running
server.listen(5000, () => console.log('Server running on port 5000'));