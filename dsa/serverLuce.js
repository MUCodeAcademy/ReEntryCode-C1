const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const PORT = 8080;

// Set to store unique IDs
const visitors = new Set();

app.get('/visitorCounter', (req, res) => {
    // Gets the cookie (if they have one already)
    const cookie = req.cookies.id;
    if (!cookie) {
        // Make a unique user ID
        const id = uuidv4();
        visitors.add(id); // Add the visitor's ID to the set
        // Set the cookie
        res.cookie('id', id, { maxAge: 604800000, httpOnly: true });
    }
    res.send(Array.from(visitors));
});

app.listen(PORT, () => {
    console.log("app is running on port: ", PORT);
});