import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mysql from 'mysql';
import argon2 from 'argon2';
import { v4 as uuid } from 'uuid';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import multer from 'multer';
dotenv.config(); // Loads our .env file so we can access the variables in there

const app = express();

app.use(cors());
app.use(express.json());
// So the user can access uploaded images from our /uploads
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Using the file name and a uuid for a unique file name
        cb(null, file.fieldname + uuid());
    }
});

// When we upload files, we're going to use our storage configuration
const upload = multer({ storage: storage });

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect();

// Uploading our profilePic to multer as a 'middleware' - something runs before our main function
app.post('/upload-pic', upload.single('profilePic'), (req, res) => {
    const profilePicture = req.file.filename;
    const username = req.body.username;

    try {
        connection.query(
            'UPDATE users SET profile_picture = ? WHERE username = ?',
            [profilePicture, username]
        );
        res.status(200).send({ profilePic: profilePicture });
    } catch (err) {
        res.status(500).send({ error: 'Internal Database Error: ' + err });
    }
});

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userId = uuid();
    const accessLevel = 'public';

    let hashedPassword;
    try {
        hashedPassword = await argon2.hash(password);
    } catch (err) {
        console.log(err);
    }

    try {
        connection.query(
            'INSERT INTO users VALUES (?, ?, ?, ?, ?)',
            [userId, username, hashedPassword, null, accessLevel]
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
    // Ensures we bypass the Cross-Origin Resource Policy
    cors: {
        origin: '*', // In a real app, you would put the name of your website
        methods: ['GET', 'POST'] // Specifies that we want to allow 'GET' and 'POST' requests
    }
});

const users = [];

// This listens for a 'connection' event
// socket is their specific connection
io.on('connection', (socket) => {
    // When you want to send data to everyone, use 'io'
    // When you want to send data to a specific user, use 'socket'

    // When they login, save their username
    socket.on('login', (username) => {
        // Attach the username to their socket
        socket.username = username;

        // See if the user is already in the users array
        const foundUser = users.find(item => item.username === username);
        if (foundUser) {
            foundUser.status = 'online';
        } else {
            const user = {
                username: username,
                socketId: socket.id, // each socket has its own id that we can use to identify users
                status: 'online'
            };

            users.push(user);
        }

        // Send the updated users list to everyone
        io.emit('updateUsers', users);
    });

    // When a user disconnects, remove them from the users array
    socket.on('disconnect', () => {
        // users = users.filter(item => item.socketId !== socket.id);
        // users.find(item => item.socketId === socket.id).status = 'offline';

        const username = socket.username;
        
        if (username) {
            // Find the user, and set their status to 'offline'
            const user = users.find(item => item.username === username);
            if (user) user.status = 'offline';
        }

        io.emit('updateUsers', users);
    });

    socket.on('update pic', (user, pic) => {
        const foundUser = users.find(item => item.username === user);
        if (!foundUser) return;
        foundUser.profilePicture = pic;
        io.emit('updateUsers', users);
    });

    // Listen for a message event from the client
    socket.on('message', (data, fromUser) => {
        const message_id = uuid();
        const is_public = true;

        try {
            connection.query(
                'INSERT INTO chat_history (message_id, content, is_public, sender_id) VALUES (?, ?, ?, ?)',
                [message_id, data, is_public, fromUser]
            )
        } catch (err) {
            console.log(err);
        }

        const sender = users.find(item => item.username === fromUser);
        const profilePicture = sender ? sender.profilePicture : null;

        // Broadcast the message to everyone in the server
        io.emit('message', data, fromUser, profilePicture);
    });

    socket.on('private message', (message, fromUser, toUser) => {
        const message_id = uuid();
        const is_public = false;
        const recipient = users.find(item => item.username === toUser);
        const sender = users.find(item => item.username === fromUser);

        try {
            connection.query(
                'INSERT INTO chat_history (message_id, content, is_public, recipient_id, sender_id) VALUES (?, ?, ?, ?, ?)',
                [message_id, message, is_public, toUser, fromUser]
            )
        } catch (err) {
            console.log(err);
        }

        if (recipient && recipient.status === 'online') {
            // Send the event to the recipient and the sender
            io.to(recipient.socketId).emit('private message', message, fromUser, toUser);
            io.to(sender.socketId).emit('private message', message, fromUser, toUser);
        }

    });

    socket.on('video-offer', (data) => {
        const recipient = users.find(item => item.username === data.to);

        if (recipient && recipient.status === 'online') {
            io.to(recipient.socketId).emit('video-offer', data);
        }
    });

    socket.on('video-answer', (data) => {
        const recipient = users.find(item => item.username === data.to);

        if (recipient && recipient.status === 'online') {
            io.to(recipient.socketId).emit('video-answer', data);
        }
    });

    socket.on('video-ice-candidate', (data) => {
        const recipient = users.find(item => item.username === data.to);

        if (recipient && recipient.status === 'online') {
            io.to(recipient.socketId).emit('video-ice-candidate', data);
        }
    });

    socket.on('end-call', (data) => {
        const recipient = users.find(item => item.username === data.to);

        if (recipient && recipient.status === 'online') {
            io.to(recipient.socketId).emit('end-call', data);
        }
    }); 
});

server.listen(5000, () => console.log('Server running on port 5000'));