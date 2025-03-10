import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';
import { v4 as uuid } from 'uuid';
import argon2 from 'argon2';
dotenv.config();
// import posts from './placeholder.json' assert { type: 'json' };

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect();

const app = express();

// Port number can be mostly anything you want, as long as it's above 2000
const port = 3000;

// Tells our server that we want to handle JSON requests
app.use(express.json());
app.use(cors()); // Lets our server bypass the CORS policy error

app.get('/', (req, res) => res.send('Hello'));

// app.get('/users/:userId', (req, res) => {
//     const userId = parseInt(req.params.userId);

//     // Loops through our posts array and checks if each item has their userId
//     // If it does, it keeps it in the array, otherwise filter it out
//     const userPosts = posts.filter(item => userId === item.userId);

//     res.send(userPosts);
// });

app.post('/register', async (req, res) => {
    // Gets the username variable from the request body
    const username = req.body.username;
    const password = req.body.password;
    const picture = req.body.picture;
    const userId = uuid();

    let hashedPassword;
    try {
        hashedPassword = await argon2.hash(password);
    } catch (error) {
        console.log(error);
    }

    let profilePicture = null;
    if (picture) {
        profilePicture = Buffer.from(picture, "base64");
    }

    connection.query(
        "INSERT INTO users (user_id, user_password, user_username, user_picture) VALUES (?, ?, ?, ?)",
        [userId, hashedPassword, username, profilePicture],
        function (err, rows, fields) {
            if (err) {
                console.error(err);
                return res.json(err, rows);
            }

            console.log("Rows is: ", rows);
            console.log("Fields is: ", fields);
        }
    );

    // Send the response back as a JSON
    res.json(`Register Successful`);
});

app.post('/check-username', (req, res) => {
    const username = req.body.username;

    connection.query('SELECT user_username FROM users WHERE user_username = ?',
        [username],
        function (err, rows) {
            if (err) {
                return res.json('Error: ', err);
            }

            // If the username exists, it will put it in 'rows' in an array
            // rows = [username]
            if (rows[0]) {
                return res.json(true);
            } else {
                return res.json(false);
            }
        }
    )
});

// When they go to the login endpoint:
// Check if the username exists in the database
// If the password matches the username, send a confirmation message
// If the username does not exist OR if the password does not match
// Send back a message saying 'invalid username or password'
// If there's an error, send that back

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
        'SELECT user_username, user_password FROM users WHERE user_username = ?',
        [username],
        async function(err, rows) {
            if (err) {
                return res.status(500).json(err);
            }
            if (rows.length === 0) {
                return res.status(404).json('Invalid username or password');
            }
            const passwordMatch = await argon2.verify(rows[0].user_password, password);
            if (!passwordMatch) {
                return res.status(404).json('Invalid username or password');
            }
            // You can only send one response back
            res.status(200).json('Login successful');
        }
    )
});

// app.listen(port);

// Optionally, you can have it run a function when the server starts
app.listen(port, () => console.log("Server running"));

// If you want to stop the server once it's running, click in the terminal and press CTRL + C