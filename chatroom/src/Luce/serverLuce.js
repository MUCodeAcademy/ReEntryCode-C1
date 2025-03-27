import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mysql from 'mysql';
import argon2 from 'argon2';
import { v4 as uuid } from 'uuid';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Loads our .env file so we can access the variables in there

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect();

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const picture = req.body.picture || null;
    const userId = uuid();
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
            [userId, username, hashedPassword, picture, accessLevel]
        );
        res.status(200).send({'success': 'User registered successfully'});
    } catch (err) {
        res.status(500).send('Error inserting into database: ', err);
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
        'SELECT username, password FROM users WHERE username = ?',
        [username],
        async function(err, rows) {
            if (err) {
                return res.status(500).json(err);
            }
            if (rows.length === 0) {
                return res.status(404).json('Invalid username or password');
            }
            const passwordMatch = await argon2.verify(rows[0].password, password);
            if (!passwordMatch) {
                return res.status(404).json('Invalid username or password');
            }
            // You can only send one response back
            res.status(200).json('Login successful');
        }
    )
});

// Our server created with http and express
const server = http.createServer(app);

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
        const message_id = uuid();
        const is_public = true;

        try {
            connection.query(
                'INSERT INTO chat_history (message_id, content, is_public) VALUES (?, ?, ?)',
                [message_id, data, is_public]
            )
        } catch (err) {
            console.log(err);
        }

        // Broadcast the message to everyone in the server
        io.emit('message', data);
    });
});

server.listen(5000, () => console.log('Server running on port 5000'));